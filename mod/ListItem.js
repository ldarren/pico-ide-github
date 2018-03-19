return {
	signals: ['select', 'open'],
	deps:{
		model: 'model',
		tpl: 'file'
	},
	create(deps, params){
		this.el.innerHTML=deps.tpl(deps.model)
		this.el.id = deps.model.id
	},
	selected: function(){
		this.el.classList.add('selected')
		this.signals.select().send(this.host)
	},
	unselected: function(){
		this.el.classList.remove('selected')
	},
	slots: {
		'selected': function(from, sender, selectedItem){
			this.unselected()
		}
	},
	events: {
		'tap li': function(evt, target){
			this.selected()
		},
		'taps li': function(evt, target){
			this.signals.open(this.deps.model).send(this.host)
		}
	}
}
