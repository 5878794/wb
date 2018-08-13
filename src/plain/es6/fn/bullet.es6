let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};


let bullet = function(plain,layer,res) {
	let width = r2p(res.bullet.width),
		height = r2p(res.bullet.height),
		x = plain.x + plain.width/2 - width/2,
		y = plain.y - height;

	let _bullet = new game.sprite({
		width:width,
		height:height,
		x:x,
		y:y,
		res:res.bullet,
		beforeRenderFn:function(){
			this.y = this.y - this.data.spd;
			this.y1 = this.y + this.height;
		},
		data:{
			spd:setting.nowBulletParam.spd,
			power:setting.nowBulletParam.power,
			interval:setting.nowBulletParam.interval,
			isDel:false
		}
	});

	layer.append(_bullet);

	return _bullet;
};




module.exports = bullet;