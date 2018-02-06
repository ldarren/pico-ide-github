pico.run({
    name: 'main',
    ajax: __.ajax,
    onLoad: __.load,
    env:{
        live:false,
		dataset:(function(el){ if (el) return el.dataset })(document.getElementById('picoEnv'))
    },
    preprocessors:{
        '.asp':function(url,asp){ return pico.export('pico/str').template(asp) }
    },
    paths:{
        '~': 'http://dev.biclicious.biz:8080/raw/ldarren/pico-example-todo/master/mod/',
        root: 'http://dev.biclicious.biz:8080/raw/ldarren/pico-example-todo/master/',
        cfg: 'http://dev.biclicious.biz:8080/raw/ldarren/pico-example-todo/master/cfg/',
		p: 'http://dev.biclicious.biz:8080/raw/ldarren/pico-client/master/lib/',
		po: 'http://dev.biclicious.biz:8080/raw/ldarren/pojs/master/lib/'
    }
},function(){
    var specMgr= require('p/specMgr')
    var View= require('p/View')
    var project = require('cfg/proj-todo.json')

    return function(){
		specMgr.load(null, null, project, function(err, spec){
			if (err) return console.error(err)
			View.prototype.spawnBySpec(spec)
		})
    }
})
