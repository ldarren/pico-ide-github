var pObj = pico.export('pico/obj')

// https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests
var domain = 'https://api.github.com/'
var options = {
	headers: {
		"Accept": "application/vnd.github.machine-man-preview+json"
	}
}
var oauth = {}

function ajax(){
	var method = 'GET'
	var url
	var body = null
	var options = null
	var cb = function(){}

	switch (arguments.length){
	case 2:
		url = arguments[0]
		cb = arguments[1]
		break
	case 3:
		method = arguments[0]
		url = arguments[1]
		cb = arguments[2]
		break
	case 4:
		method = arguments[0]
		url = arguments[1]
		body = arguments[2]
		cb = arguments[3]
		break
	case 5:
		method = arguments[0]
		url = arguments[1]
		body = arguments[2]
		options = arguments[3]
		cb = arguments[4]
		break
	default: return console.error('Invalid params count')
	}

	__.ajax(method, url, body, options, (err, state, res) => {
		if (4 !== state) return
		if (err) return cb(err, res)
		try { var json = JSON.parse(res) }
		catch(exp) { return cb(exp) }
		cb(null, json)
	})
}

function getAccessToken(cb){
	ajax('http://dev.biclicious.biz:8080/auth' + location.search, cb)
}

function getInstallations(cb){
	ajax('GET', domain + 'user/installations', oauth, options, cb)
}

function getRepositories(installationIds, repositories, cb){
	if (!installationIds.length) return cb(null, repositories)
	var id = installationIds.shift()
	ajax('GET', domain + 'user/installations/' + id + '/repositories', oauth, options, (err, res) => {
		repositories.push([err, res.repositories])
		getRepositories(installationIds, repositories, cb)
	})
}

function getContent(owner, repo, path, cb){
	ajax('GET', domain + `repos/${owner}/${repo}/contents/${path}`, oauth, {
		headers:{
			Accept: 'application/vnd.github.VERSION.raw'
		}
	}, cb)
}

function getRaw(owner, repo, path, cb){
	ajax('http://dev.biclicious.biz:8080/get/raw/repos/' + `${owner}/${repo}/${path}`, cb)
}

return {
	deps: {
		repos: 'models'
	},
	create(deps, params){
		getAccessToken((err, res) => {
			if (err) return console.error(err)
			oauth['access_token'] = res.access_token
			getInstallations((err, res) => {
				if (err) return console.error(err)
				console.log('### installtions', res)
				getRepositories(pObj.pluck(res.installations, 'id'), [], (err, res) => {
					if (err) return console.error(err)
					console.log('### repositories', res)
					const [_, repos]  = res[0]
					const repo = repos[0]
					getRaw(repo.owner.login, repo.name, 'branches', (err, branches) => {
						if (err) return console.error(err)
						console.log('### branches', branches)
						const branch = branches[0]
						getRaw(repo.owner.login, repo.name, 'commits/' + branch.commit.sha, (err, commit) => {
							if (err) return console.error(err)
							console.log('### commit', commit)
							const tree = commit.commit.tree.sha
						})
					})
				})
			})
		})
	}
}
