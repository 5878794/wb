

module.exports = {

	//背景每一贞滚动的距离 px
	bgScrollY:0.25,
	//子弹发送间隔 **帧
	bulletInterval:10,
	//子弹的速度
	bulletSpd:8,
	bulletPower:1,
	//当前子弹的属性
	nowBulletParam:{
		spd:8,
		power:1,
		interval:10
	},
	//能量球出现帧数
	powerBox:60*30,  //30秒*60
	//能量球的x、y的最高速度
	powerMaxSpd:4,
	powerSpd:2,  //初始速度
	//能量的使用时间
	powerTime:60*15,
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
		x:30,y:84,w:108,h:140
	},
	//击中范围
	hitSize:{
		1:{x:20,y:24,w:58,h:96},
		2:{x:10,y:100,w:140,h:140},
		3:{x:12,y:45,w:250,h:250}
	},
	//碰撞范围
	enemySize:{
		1:{x:30,y:26,w:40,h:82},
		2:{x:20,y:97,w:122,h:122},
		3:{x:24,y:55,w:234,h:208}
	},
	//获取被击中时的图片
	getHitRes:function(res,type){
		let resName = 'enemy'+type+"_hit";
		return res[resName];
	},
	//获取飞机爆炸的资源图
	getPlainBoomRes:function(res){
		return [
			res.plain_boom1,
			res.plain_boom2
		];
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
		let min = 2,
			max = 6;
		if(step>0){min=3;}
		if(step>900){min=4;}
		if(step>2700){min=5;}

		return  min + parseInt(Math.random()*(max-min)) + (3-type)*1.2;
	},
	//生成敌机的种类
	getEnemyType:function(step){
		//2 5 3
		if(step>3600){
			let a = [1,2,2,2,2,2,3,3,3,3];
			return a[parseInt(Math.random()*10)];
		}
		//4 4 2
		if(step>1800){
			let a = [1,1,2,2,2,2,2,3,3,3];
			return a[parseInt(Math.random()*10)];
		}
		//6 3 1
		if(step>=0){
			let a = [1,1,1,1,2,2,2,2,3,3];
			return a[parseInt(Math.random()*10)];
		}
	}
};