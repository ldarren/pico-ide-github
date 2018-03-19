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
		'browse': function(from, sender, path){
			this.clear()
			this.spawn(this.deps.TreeView, [path])
		},
		'edit': function(from, sender, url){
			this.clear()
			this.spawn(this.deps.TextEditor, [url])
		},
		'close': function(from, sender){
			this.clear()
			this.spawn(this.deps.Shortcut)
		}
	}
}
