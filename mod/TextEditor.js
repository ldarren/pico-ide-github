return {
	signals: ['github.getRaw', 'github.postCommit'],
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
			CodeMirror.fromTextArea(this.el, {
				lineNumbers: true,
				mode: 'javascript'
			}).on('Alt-S', (instance, key, evt) => {
				this.signals['github.postCommit'](selected.id, dirname, instance.getValue()).send(this.host)
			})
		}).send(this.host)
	}
}
