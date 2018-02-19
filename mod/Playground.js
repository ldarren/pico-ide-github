return {
	signals: ['rub'],
	deps: {
		Recreation: 'view',
		Github: 'ctrl'
	},
	create: function(deps, params){
		this.spawn(this.deps.Github)
	},
	events: {
		'touchstart': function(evt, target){
			if (!target.classList.contains('col')) return
			var recreation = target.closest('.recreation')
			if (!recreation) return
			this.el.appendChild(recreation)
		},
		'taps': function(evt, target){
			if (target.classList.contains('__'))
				this.spawn(this.deps.Recreation, null, [['center', 'list', evt.detail]])
		},
		'rub': function(evt, target){
			this.signals.rub(evt.detail).send([this.host])
		}
	}
}
