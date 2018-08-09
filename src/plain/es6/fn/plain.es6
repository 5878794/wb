let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};



let plain = {
	hasEventBind:false,
	layer:null,
	plain:null,
	scene:null,
	res:null,
	game:null,
	obj:null,
	init(scene,layer,res,game,obj){
		this.scene = scene;
		this.layer = layer;
		this.res = res;
		this.game = game;
		this.obj = obj;

		this.createPlain();
		if(!this.hasEventBind){
			this.addEvent();
			this.hasEventBind = true;
		}


		return this.plain;
	},
	createPlain(){
		let width = r2p(this.res.plain.width),
			height = r2p(this.res.plain.height),
			maxX = this.scene.width - width,
			maxY = this.scene.height - height,
			x = (this.scene.width - width)/2,
			y = (this.scene.height - height),
			size = setting.plainSize,
			newSize = {},
			_this = this;

		for(let [key,val] of Object.entries(size)){
			newSize[key] = r2p(val);
		}


		this.plain = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:this.res.plain,
			data:{
				maxX:maxX,
				maxY:maxY,
				size:newSize
			},
			beforeRenderFn(){
				if(this.data.isHit){
					_this.obj.endPlay();
				}
			}
		});

		this.layer.append(this.plain);
	},
	addEvent(){
		let x=0,y=0,isTouch = false,_this = this;
		window.addEventListener(device.START_EV,function(e){
			isTouch = true;
			e = (e.touches && e.touches[0])? e.touches[0] : e;
			x = e.screenX;
			y = e.screenY;
		},false);
		window.addEventListener(device.MOVE_EV,function(e){
			if(!isTouch){return;}
			e = (e.touches && e.touches[0])? e.touches[0] : e;
			let _x = e.screenX,
				_y = e.screenY,
				plain = _this.plain;

			plain.x += _x-x;
			plain.y += _y-y;

			plain.x = (plain.x < 0)? 0 : plain.x;
			plain.x = (plain.x > plain.data.maxX)? plain.data.maxX : plain.x;
			plain.y = (plain.y < 0)? 0 : plain.y;
			plain.y = (plain.y > plain.data.maxY)? plain.data.maxY : plain.y;

			plain.x1 = plain.x + plain.width;
			plain.y1 = plain.y + plain.height;

			x = _x;
			y = _y;

		},false);
		window.addEventListener(device.END_EV,function(e){
			isTouch = false;
		},false);
	}
};


module.exports = plain;