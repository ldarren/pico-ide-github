return {
	signals: ['github.getRaw'],
	deps: {
		repoMeta: 'models'
	},
	create: function callee(deps, params){
		this.super.create.call(this, deps, params)

		const dirname = this.dirname = params[0]
		const selected = deps.repoMeta.at(0)
		if (!selected) return __.alert('Please select a repo first')

		this.signals['github.getRaw'](selected.id, dirname, (err, raw) => {
			this.el.value = raw
			this.editor = CodeMirror.fromTextArea(this.el, {
				lineNumbers: true,
				mode: 'javascript'
			})
		}).send(this.host)
	}
}
