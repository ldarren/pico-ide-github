return {
	signals: ['github.getRaw', 'github.getContent'],
	deps: {
		repoMeta: 'models',
		tree: 'models'
	},
	create: function callee(deps, params){
		deps.repoMeta.list((err, models) => {
			if (err) return console.error(err)
			if (!models.length) return __.alert('Please select a repo')
			var path = params[0]
			this.signals['github.getContent'](models[0].id, path, function(err, content){
				deps.tree.create({id:path, content})
				debugger
			}).send(this.host)
		})

		callee.prototype.call(this, deps, params)
	}
}
