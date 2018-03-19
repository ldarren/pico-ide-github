return {
	signals: ['browse','create'],
	deps: {
		predefined: 'list'
	},
	create: function callee(deps, params){
		deps.predefined.forEach(opt => {
			this.el.appendChild(__.dom.get(opt))
		})
		callee.prototype.call(this, deps, params)
	},
	events: {
		'click .listItem': function(evt, target){
			switch(target.querySelector('a').name){
			case 'browse':
				this.signals.browse('').send(this.host)
				break
			case 'create':
				this.signals.create().send(this.host)
				break
			}
		}
	}
}
