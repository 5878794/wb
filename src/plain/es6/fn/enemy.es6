let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};


let enemy = function(type,scene,layer,res){
	let thisRes = res['enemy'+type],
		width = r2p(thisRes.width),
		height = r2p(thisRes.height),
		x = Math.random()*(scene.width-width),
		y = -height,
		spd = setting.getEnemySpd(type),
		blood = setting.blood[type],
		hitRes = setting.getHitRes(res,type),
		boomRes = setting.getBoomRes(res,type);

	let _enemy = new game.sprite({
		width:width,
		height:height,
		x:x,
		y:y,
		res:thisRes,
		beforeRenderFn:function(){
			this.y = this.y + this.data.spd;
			this.y1 = this.y + this.height;
		},
		data:{
			res:thisRes,
			blood:blood,
			hitRes:hitRes,
			boomRes:boomRes,
			boomN:0,
			type:type,
			spd:spd,
			isBoom:false,
			isDel:false
		}
	});

	layer.append(_enemy);
	return _enemy;
};




module.exports = enemy;