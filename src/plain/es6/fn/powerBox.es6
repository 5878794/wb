let device = require('../lib/device'),
	setting = require('./setting'),
	game = require('../lib/canvas/canvas'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};


module.exports = {
	parentObj:null,
	init: function (parentObj) {
		this.parentObj = parentObj;

		let scene = parentObj.mainScene,
			res = parentObj.res,
			type = parseInt(Math.random() * 2),
			powerRes = (type == 1) ? res.blur_box : res.yellow_box,
			width = r2p(powerRes.width),
			height = r2p(powerRes.height),
			maxX = scene.width - width,
			maxY = scene.height - height,
			x = parseInt(Math.random() * maxX),
			y = -height,
			dirX = (parseInt(Math.random() * 2) == 1),
			dirY = true,
			spdX = parseInt(Math.random() * setting.powerMaxSpd)+ setting.powerSpd,
			spdY = parseInt(Math.random() * setting.powerMaxSpd)+ setting.powerSpd,
			_this = this;


		let box = new game.sprite({
			width: width,
			height: height,
			x: x,
			y: y,
			res: powerRes,
			beforeRenderFn: function () {

				//设置新的坐标
				_this.setXY(this);

			},
			data: {
				dirX: dirX,
				dirY: dirY,
				spdX: spdX,
				spdY: spdY,
				type: type,  //type == 1 blur  type == 0 yellow
				maxX: maxX,
				maxY: maxY,
				isDel: false
			}
		});


		parentObj.mainLayer.append(box);
		return box;
	},
	setXY(powerBox){

		let data = powerBox.data,
			dirX = data.dirX,
			dirY = data.dirY,
			spdX = data.spdX,
			spdY = data.spdY,
			maxX = data.maxX,
			maxY = data.maxY;


		//dirX dirY   等于true时增加 反之减少
		powerBox.x = (dirX)? powerBox.x + spdX : powerBox.x - spdX;
		powerBox.y = (dirY)? powerBox.y + spdY : powerBox.y - spdY;


		if(powerBox.x >= maxX){
			powerBox.x = maxX;
			powerBox.data.dirX = !dirX;
		}
		if(powerBox.x <= 0){
			powerBox.x = 0;
			powerBox.data.dirX = !dirX;
		}

		if(powerBox.y >=maxY){
			powerBox.y = maxY;
			powerBox.data.dirY = !dirY;
		}

		if(powerBox.y <= 0){
			powerBox.y = 0;
			powerBox.data.dirY = !dirY;
		}


		powerBox.x1 = powerBox.x + powerBox.width;
		powerBox.y1 = powerBox.y + powerBox.height;
	}

};