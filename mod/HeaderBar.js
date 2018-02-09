return {
	signals:['changeContent'],
	create(){
	},
	events: {
		'change select': function(evt, target){
			this.signals.changeContent(target.value).send(this.host)	
		}
	}
}
