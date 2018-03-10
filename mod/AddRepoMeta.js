return {
	deps:{
		repoMeta: 'models'
	},
	create: function callee(deps, params){
		callee.prototype.call(this, deps, params)

		if (deps.repoMeta.get(this.el.id)){
			this.selected()
		} else {
			this.unselected()
		}
	},
	selected: function callee(){
		this.deps.repoMeta.create({id: this.el.id, role: 'main'})
		callee.prototype.call(this)
	},
	unselected: function callee(){
		this.deps.repoMeta.remove(this.el.id)
		callee.prototype.call(this)
	}
}
