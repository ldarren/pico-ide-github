return {
	deps: {
		Github: 'view',
		repoMeta: 'models',
		tree: 'models'
	},
	create: function callee(deps, params){
		deps.repoMeta.list(function(err, models){
			if (err) return console.error(err)
			if (!models.length) return __.alert('Please select a repo')
			var path = params[0]
			deps.Github.getContent(models[0].id, path, function(){
				console.log(arguments)
			})
		})

		callee.prototype.call(this, deps, params)
	}
}
