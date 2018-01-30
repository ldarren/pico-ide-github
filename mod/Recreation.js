var dragFunc = {
	topleft: function(el, box, region){
		var d = box[1] - box[3]
		var style = el.style

		region[1] = el.offsetTop - d
		region[3] = el.offsetHeight + d
		style.top = region[1] + 'px'
		style.height = region[3] + 'px'

		d = box[0] - box[2]
		region[0] = el.offsetLeft - d
		region[2] = el.offsetWidth + d
		style.left = region[0] + 'px'
		style.width = region[2] + 'px'
	},
	topcenter: function(el, box, region){
		var d = box[1] - box[3]
		var style = el.style

		region[1] = el.offsetTop - d
		region[3] = el.offsetHeight + d
		style.top = region[1] + 'px'
		style.height = region[3] + 'px'
	},
	topright: function(el, box, region){
		var d = box[1] - box[3]
		var style = el.style

		region[1] = el.offsetTop - d
		region[3] = el.offsetHeight + d
		style.top = region[1] + 'px'
		style.height = region[3] + 'px'

		region[2] = el.offsetWidth - box[0] + box[2]
		style.width = region[2] + 'px'
	},
	middleleft: function(el, box, region){
		var d = box[0] - box[2]
		var style = el.style

		region[0] = el.offsetLeft - d
		region[2] = el.offsetWidth + d
		style.left = el.offsetLeft - d + 'px'
		style.width = el.offsetWidth + d + 'px'
	},
	middlecenter: function(el, box, region){
		var style = el.style

		region[0] = el.offsetLeft - (box[0] - box[2])
		region[1] = el.offsetTop - (box[1] - box[3])

		style.left = region[0] + 'px'
		style.top = region[1] + 'px'
	},
	middleright: function(el, box, region){
		var style = el.style
		region[2] = el.offsetWidth - box[0] + box[2]
		style.width = region[2] + 'px'
	},
	bottomleft: function(el, box, region){
		var d = box[0] - box[2]
		var style = el.style

		region[0] = el.offsetLeft - d
		region[2] = el.offsetWidth + d
		style.left = region[0] + 'px'
		style.width = region[2] + 'px'

		region[3] = el.offsetHeight - box[1] + box[3]
		style.height = region[3] + 'px'
	},
	bottomcenter: function(el, box, region){
		var style = el.style
		region[2] = el.offsetHeight - box[1] + box[3]
		style.height = region[2] + 'px'
	},
	bottomright: function(el, box, region){
		var style = el.style
		region[2] = el.offsetWidth - box[0] + box[2]
		region[3] = el.offsetHeight - box[1] + box[3]
		style.width = region[2] + 'px'
		style.height = region[3] + 'px'
	}
}

return {
	deps: {
		center: ['list', [100, 100]],
		size: ['list', [200, 100]]
	},
	create: function(deps, params){
		var xy = deps.center
		var size = deps.size
		var style = this.el.style

		this.dragFunc = null
		this.fullscreen = false
		this.region = [xy[0], xy[1], size[0], size[1]]

		style.left = (xy[0] - size[0]/2) + 'px'
		style.top = (xy[1] - size[1]/2) + 'px'
		style.width = size[0]+'px'
		style.height = size[1]+'px'
	},
	events: {
		'touchstart': function(evt, col){
			var row = col.parentElement
			this.dragFunc = dragFunc[row.className.split(' ')[1] + col.className.split(' ')[1]]
		},
		'touchend': function(evt, target){
			this.dragFunc = null
		},
		'taps': function(evt, target){
			this.fullscreen = !this.fullscreen
			var style = this.el.style
			if (this.fullscreen) {
				style.left = 0
				style.top = 0
				style.width = '100%'
				style.height = '100%'
			} else {
				var r = this.region
				style.left = r[0] + 'px'
				style.top = r[1] + 'px'
				style.width = r[2] + 'px'
				style.height = r[3] + 'px'
			}
		},
		'touchend button': function(evt, target){
			this.remove()
		}
	},
	slots: {
		rub: function(from, sender, box){
			if (!this.dragFunc) return
			this.dragFunc(this.el, box, this.region)
		},
		rubStop: function(from, sender){
			this.dragFunc = null
		}
	}
}
