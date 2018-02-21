return {
	deps:{
		repoMeta: 'models'
	},
	create: function(deps, params){
		if (!deps.repoMeta.modelIndex.length) return
		console.log('selected', deps.repoMeta.models[deps.repoMeta.modelIndex[0]])
	}
}
