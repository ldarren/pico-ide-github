return {
	deps:{
		repo: 'model',
		tpl: 'file'
	},
	create(deps, params){
		this.el.innerHTML=deps.tpl(deps.repo)
	}
}
