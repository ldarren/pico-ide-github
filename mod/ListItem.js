return {
	deps:{
		model: 'model',
		tpl: 'file'
	},
	create(deps, params){
		this.el.innerHTML=deps.tpl(deps.model)
	}
}
