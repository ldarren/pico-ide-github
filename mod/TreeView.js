return {
	signals: ['github.getRaw', 'github.getContent', 'edit', 'browse'],
	deps: {
		tree: 'models',
		repoMeta: 'models'
	},
	create: function callee(deps, params){
		callee.prototype.call(this, deps, params)

		const dirname = this.dirname = params[0] + '/'
		const content = deps.tree.filter(item => dirname === item.dirname)

		if (content && content.length){
			deps.models.load(content)
		}else{
			const selected = deps.repoMeta.at(0)
			if (!selected) return __.alert('Please select a repo first')

			this.signals['github.getContent'](selected.id, dirname, function(err, newContent){
				deps.models.load(newContent.map(item => Object.assign({dirname}, item)))
			}).send(this.host)
		}
	},
	slots: {
		'open': function(from, sender, model){
			var name = this.dirname + model.name
			switch(model.type){
			case 'file':
				this.signals.edit(name).send(this.host)	
				break
			default:
				this.signals.browse(name).send(this.host)	
				break
			}
		}
	},
}
