

module.exports = {
	//背景每一贞滚动的距离 px
	bgScrollY:0.25,
	//子弹发送间隔 **帧
	bulletInterval:10,
	//子弹的速度
	bulletSpd:10,
	//敌机血
	blood:{
		1:1,
		2:3,
		3:10
	},
	//获取被击中时的图片
	getHitRes:function(res,type){
		let resName = 'enemy'+type+"_hit";
		return res[resName];
	},
	//获取爆炸的图片
	getBoomRes:function(res,type){
		if(type==1){
			return [
				res.enemy1_boom1,
				res.enemy1_boom2,
				res.enemy1_boom3
			]
		}else if(type == 2){
			return [
				res.enemy2_boom1,
				res.enemy2_boom2,
				res.enemy2_boom3
			]
		}else{
			return [
				res.enemy3_boom1,
				res.enemy3_boom2,
				res.enemy3_boom3,
				res.enemy3_boom4,
				res.enemy3_boom5
			]
		}
	},
	// 敌机的出现速度 **帧
	getEnemyInterVal:function(){
		let min = 30,
			max = 120;
		return  min + parseInt(Math.random()*(max-min));
	},
	//敌机的速度
	getEnemySpd:function(type){
		let min = 1,
			max = 4;
		return  min + parseInt(Math.random()*(max-min)) + (3-type)*1.2;
	},

	//生成敌机的种类
	getEnemyType:function(){
		return parseInt(Math.random()*3)+1;
	}
};