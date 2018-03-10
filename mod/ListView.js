return {
	signals: ['selected'],
	deps:{
		models: 'models',
		repoMeta: 'models',
		ListItem: 'view'
	},
	create: function(deps, params){
		deps.models.callback.on('add', (action, models, id) => {
			this.addItem(id)
		})
		deps.models.list( (err, models) => {
			if (err) return console.error(err)
			for (let i = 0, m; m = models[i]; i++){
				this.addItem(m.id)
			}
		})
	},
	slots: {
		'select': function(from, sender){
			this.signals.selected(sender).send([this.host, this, sender])
		}
	},
	addItem: function(id, spec){
		this.spawn(this.deps.ListItem, [id], spec)
	}
}
