return {
	deps: {
		Shortcut: 'view',
		TreeView: 'view',
		TextEditor: 'view'
	},
	create: function(deps, params){
		this.spawn(deps.TextEditor)
	},
	slots: {
		'go': function(from, sender){
		},
		'close': function(from, sender){
		}
	}
}
