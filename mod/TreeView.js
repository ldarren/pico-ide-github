const Gihub = require('Github')

return {
	deps: {
		repoMeta: 'models'	
		tree: 'models'	
	},
	create: function callee(deps, params){
		var path = params[0]
		var list = deps.tree.get(path)
		var mainRepo = deps.repoMeta.index(0)

		Github.getContent(mainRepo, path, function()
		callee.prototype.call(this, deps, params)
	}
}
