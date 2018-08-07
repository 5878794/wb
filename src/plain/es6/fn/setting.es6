

module.exports = {
	//背景每一贞滚动的距离 px
	bgScrollY:0.25,
	//子弹发送间隔 **帧
	bulletInterval:10,
	//子弹的速度
	bulletSpd:10,
	// 敌机的出现速度 **帧
	getEnemyInterVal:function(){
		let min = 30,
			max = 120;
		return  min + parseInt(Math.random()*(max-min));
	},
	//敌机的速度
	getEnemySpd:function(){
		let min = 1,
			max = 4;
		return  min + parseInt(Math.random()*(max-min));
	},

	//生成敌机的种类
	getEnemyType:function(){
		return parseInt(Math.random()*3)+1;
	}
};