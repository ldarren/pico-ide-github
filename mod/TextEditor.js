return {
	render: function(){
		this.editor = CodeMirror.fromTextArea(this.el, {
			lineNumbers: true
		})
	}
}
