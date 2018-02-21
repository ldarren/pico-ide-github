return {
	deps: {
		Project: 'view',
		Explorer: 'view',
		Editor: 'view',
		Preview: 'view'
	},
	create: function(deps, params){
		this.spawn(deps.Project)
	},
	slots:{
		changeContent: function(from, sender, name){
			var Mod = this.deps[name]
			if (!Mod) return

			var ms = this.modules
			for (var i=0,m; m=ms[i]; i++){
				m.remove()
			}
			ms.length = 0
			
			this.spawn(Mod)
		}
	}}
