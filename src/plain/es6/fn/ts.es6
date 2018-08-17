let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};


let ts = function(parentObj) {
	let res = parentObj.res,
		width = r2p(res.plain_ts.width),
		height = r2p(res.plain_ts.height),
		plainW = r2p(res.plain.width),
		plainH = r2p(res.plain.height),
		x = parentObj.mainScene.width/2 + plainW/2 - r2p(60),
		y = parentObj.mainScene.height - plainH - height;


	let _ts = new game.sprite({
		width:width,
		height:height,
		x:x,
		y:y,
		res:res.plain_ts,
		data:{},
		beforeRenderFn(){

		}
	});

	parentObj.mainLayer.append(_ts);

	return _ts;
};




module.exports = ts;