return {
	deps: {
		Shortcut: 'view',
		TreeView: 'view',
		TextEditor: 'view'
	},
	create: function(deps, params){
		this.spawn(deps.Shortcut)
	},
	slots: {
		'browse': function(from, sender){
			this.spawn(this.deps.TreeView)
		},
		'edit': function(from, sender, url){
			this.spawn(this.deps.TextEditor)
		},
		'close': function(from, sender){
			this.spawn(this.deps.Shortcut)
		}
	}
}
