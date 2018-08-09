

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
		3:8
	},
	//分
	score:{
		1:100,
		2:300,
		3:1000
	},
	plainSize:{
		x:36,y:70,w:61,h:176
	},
	//击中范围
	hitSize:{
		1:{x:0,y:0,w:62,h:120},
		2:{x:8,y:106,w:144,h:146},
		3:{x:30,y:42,w:253,h:253}
	},
	//碰撞范围
	enemySize:{
		1:{x:6,y:26,w:51,h:72},
		2:{x:17,y:106,w:125,h:110},
		3:{x:68,y:48,w:176,h:192}
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
	getEnemyInterVal:function(step){
		let min = 30,
			max = 90 - parseInt(step/20);

		max = (max<=min)? min : max;

		return  min + parseInt(Math.random()*(max-min));
	},
	//敌机的速度
	getEnemySpd:function(type,step){
		let min = 1,
			max = 4;
		if(step>400){min=2;}
		if(step>800){min=3;}
		if(step>1600){min=4;}

		return  min + parseInt(Math.random()*(max-min)) + (3-type)*1.2;
	},
	//生成敌机的种类
	getEnemyType:function(step){
		//6 3 1
		if(step>=0){
			let a = [1,1,1,1,1,1,2,2,2,3];
			return a[parseInt(Math.random()*10)];
		}
		//4 4 2
		if(step>600){
			let a = [1,1,1,1,2,2,2,2,3,3];
			return a[parseInt(Math.random()*10)];
		}
		//2 5 3
		if(step>1200){
			let a = [1,1,2,2,2,2,2,3,3,3];
			return a[parseInt(Math.random()*10)];
		}
	}
};