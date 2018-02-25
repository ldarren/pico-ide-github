return {
	signals: ['browse'],
	deps: {
		predefined: 'list'
	},
	create: function(deps, params){
		deps.predefined.forEach(opt => {
			this.el.appendChild(__.dom.get(opt))
		})
		this.create.prototype.call(this, deps, params)
	},
	events: {
		'click .listItem': function(evt, target){
			this.signals.browse().send(this.host)
		}
	}
}
