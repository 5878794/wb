let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};


let bullet = {
	bullet:null,
	init(plain,layer,res){
		this.plain = plain;
		this.layer = layer;
		this.res = res;
		this.createBullet();

		return this.bullet;
	},
	createBullet(){
		let width = r2p(this.res.bullet.width),
			height = r2p(this.res.bullet.height),
			x = this.plain.x + this.plain.width/2 - width/2,
			y = this.plain.y - height;

		this.bullet = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:this.res.bullet,
			beforeRenderFn:function(){
				this.y = this.y - this.data.spd;
				this.y1 = this.y + this.height;
			},
			data:{
				spd:setting.bulletSpd,
				isDel:false
			}
		});

		this.layer.append(this.bullet);
	}
};


module.exports = bullet;