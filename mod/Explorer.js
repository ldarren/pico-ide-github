var Github = require('Github')

return {
	deps: {
		repos: 'models'
	},
	create(deps, params){
		const repo = deps.repos.get('103002478')
		Github.getRaw(repo.owner.login, repo.name, 'branches', (err, branches) => {
			if (err) return console.error(err)
			console.log('### branches', branches)
			const branch = branches[0]
			Github.getRaw(repo.owner.login, repo.name, 'commits/' + branch.commit.sha, (err, commit) => {
				if (err) return console.error(err)
				console.log('### commit', commit)
				const tree = commit.commit.tree.sha
			})
		})
	}
}
