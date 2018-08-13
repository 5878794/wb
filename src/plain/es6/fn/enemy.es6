let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};



let enemy = function(type,scene,layer,res,obj){
	let thisRes = res['enemy'+type],
		width = r2p(thisRes.width),
		height = r2p(thisRes.height),
		x = Math.random()*(scene.width-width),
		y = -height,
		spd = setting.getEnemySpd(type,obj.game.step),
		blood = setting.blood[type],
		hitRes = setting.getHitRes(res,type),
		boomRes = setting.getBoomRes(res,type),
		score = setting.score[type] || 1,
		hitSize = setting.hitSize[type],
		enemySize = setting.enemySize[type],
		newHitSize = {},
		newEnemySize = {};

	for(let [key,val] of Object.entries(hitSize)){
		newHitSize[key] = r2p(val);
	}
	for(let [key,val] of Object.entries(enemySize)){
		newEnemySize[key] = r2p(val);
	}


	let _enemy = new game.sprite({
		width:width,
		height:height,
		x:x,
		y:y,
		res:thisRes,
		beforeRenderFn:function(){
			let _this = this;

			this.y = this.y + this.data.spd;
			this.y1 = this.y + this.height;

			//被击中
			if(this.data.isHit){
				// this.data.blood = this.data.blood - 1;

				if(this.data.blood <= 0){
					this.data.spd = 0;
					if(obj.music.shot){
						obj.music.shot.stop();
					}
					if(obj.music.boom){
						obj.music.boom.play();
					}
					this.data.isBoom = true;
					obj.score += this.data.score;
					this.setResAnimateList({
						resList:this.data.boomRes,     //播放资源,最后一张同原始资源
						canStopResPointer:[],   //资源切换时能停止的资源序号点
						frame:3,           //动画间隔几帧播放下一张资源图,正常情况下一秒60帧
						infinite:false,           //循环播放资源队列,true时回调不执行
						callback:function(){
							_this.data.isDel = true;
							_this.alpha = 0;
						}
					});
					this.resAnimatePlay();

				}else{
					//显示被击中动画
					this.setResAnimateList({
						resList:[this.data.hitRes,this.data.res],     //播放资源,最后一张同原始资源
						canStopResPointer:[],   //资源切换时能停止的资源序号点
						frame:3,           //动画间隔几帧播放下一张资源图,正常情况下一秒60帧
						infinite:false           //循环播放资源队列,true时回调不执行
					});
					this.resAnimatePlay();
				}

				this.data.isHit = false;
			}

		},
		data:{
			hitSize:newHitSize,
			enemySize:newEnemySize,
			score:score,
			isHit:false,
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