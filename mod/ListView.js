function addItem(ctx, id){
	ctx.spawn(ctx.deps.ListItem, [id])
}

return {
	deps:{
		repos: 'models',
		repoMeta: 'models',
		ListItem: 'view'
	},
	create: function(deps, params){
		deps.repos.callback.on('add', (action, models, id) => {
			addItem(this, id)
		})
		deps.repos.list( (err, models) => {
			if (err) return console.error(err)
			for (let i = 0, m; m = models[i]; i++){
				addItem(this, m.id)
			}
		})
	}
}
