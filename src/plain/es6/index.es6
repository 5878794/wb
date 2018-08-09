
let viewport = require('./lib/ui/setViewport'),
	device = require('./lib/device'),
	game = require('./lib/canvas/canvas'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	resLoader = require('./lib/resLoader/resLoader').image,
	setting = require('./fn/setting'),
	bgScene = require('./fn/bg'),
	loadScene = require('./fn/load'),
	plainSprite = require('./fn/plain'),
	bulletSprite = require('./fn/bullet'),
	enemySprite = require('./fn/enemy'),
	checkFn = require('./fn/checkFn'),
	scoreAreaFn = require('./fn/scoreArea');




let res = {
	logo:'./image/logo.png',
	bg:'./image/bg.jpeg',
	startBtn:'./image/start.png',
	bullet:'./image/bullet.png',
	plain:'./image/plain.png',
	enemy1:'./image/enemy1.png',
	enemy2:'./image/enemy2.png',
	enemy3:'./image/enemy3.png',
	enemy1_hit:'./image/enemy1.png',
	enemy2_hit:'./image/enemy2_hit.png',
	enemy3_hit:'./image/enemy3_hit.png',
	enemy1_boom1:'./image/enemy1_boom1.png',
	enemy1_boom2:'./image/enemy1_boom2.png',
	enemy1_boom3:'./image/enemy1_boom3.png',
	enemy2_boom1:'./image/enemy2_boom1.png',
	enemy2_boom2:'./image/enemy2_boom2.png',
	enemy2_boom3:'./image/enemy2_boom3.png',
	enemy3_boom1:'./image/enemy3_boom1.png',
	enemy3_boom2:'./image/enemy3_boom2.png',
	enemy3_boom3:'./image/enemy3_boom3.png',
	enemy3_boom4:'./image/enemy3_boom4.png',
	enemy3_boom5:'./image/enemy3_boom5.png',

};
let mp3 = {
	bg:'./mp3/2.mp3',
	shot:'./mp3/1.mp3',
	boom:'./mp3/3.mp3'
};
let preLoadRes = ['bg','logo','startBtn'];



viewport(750);




$(document).ready(function(){
	game.preventScroll();
	PAGE.init().catch(rs=>console.log(rs));
});



var PAGE = {
	res:{},
	music:{},
	game:null,
	bgScene:null,
	loadScene:null,
	mainScene:null,
	mainLayer:null,
	plain:null,
	scoreArea:null,
	bullets:[],
	enemys:[],
	score:0,
	stepFn:null,
	async init(){
		let _this = this;
		//创建游戏
		this.game = new game.app({
			pauseFn:function(){
				if(_this.music.bg){
					_this.music.bg.pause();
				}
			},
			resumeFn:function(){
				if(_this.music.bg){
					_this.music.bg.play();
				}
			}
		});
		this.game.showFrame();

		this.createBg();
		await this.getRes();

		this.game.run();

		await this.createLoadPage();


		//点击开始游戏后
		this.game.del(this.loadScene);
		if(this.music.bg){
			this.music.bg.play();
		}



		this.createMain();
		this.addFrameFn();


	},
	createBg(){
		//创建背景
		this.bgScene = new game.scene();
		this.game.append(this.bgScene);
	},
	async getRes(){
		//获取需要提前加载的图片
		let preLoadImg = {};
		for(let [key,val] of Object.entries(res)){
			if(preLoadRes.indexOf(key)>-1){
				preLoadImg[key] = val;
			}
		}
		this.res = await bgScene.init(this.bgScene,preLoadImg);
	},
	async createLoadPage(){
		//创建加载页面
		this.loadScene = new game.scene();
		this.game.append(this.loadScene);
		let obj = await loadScene.init(this.loadScene,this.res,res,mp3);

		this.res = obj.res;
		this.music = obj.mp3;
	},
	createMain(){
		//创建游戏场景
		this.mainScene = new game.scene();
		this.game.append(this.mainScene);

		this.mainLayer = new game.layer({
			width:this.mainScene.width,
			height:this.mainScene.height,
			zIndex:2
		});
		this.mainScene.append(this.mainLayer);

		//创建飞机
		this.plain = plainSprite.init(this.mainScene,this.mainLayer,this.res,this.game,this);

		//创建积分显示区
		this.scoreArea = scoreAreaFn(this.mainScene,this.mainLayer,this);
	},
	addFrameFn(){
		let _this = this;

		this.game.addFn(this.stepFn = function(){
			//创建子弹
			if(_this.game.isFrame(setting.bulletInterval)){
				let bullet = bulletSprite(_this.plain,_this.mainLayer,_this.res);
				_this.bullets.push(bullet);
				_this.music.shot.volume(0.2);
				if(_this.music.shot){
					_this.music.shot.play();
				}
			}

			//创建敌机
			let tempInterval = setting.getEnemyInterVal(_this.game.step);
			if(_this.game.isFrame(tempInterval)){
				let type = setting.getEnemyType(_this.game.step);
				let enemy = enemySprite(type,_this.mainScene,_this.mainLayer,_this.res,_this);
				_this.enemys.push(enemy);

			}


			//碰撞检测
			if(_this.game.isFrame(1)){
				checkFn.init(_this.plain,_this.bullets,_this.enemys);

				//清除删除的对象
				_this.bullets = _this.bullets.filter(rs=>{
					if(!rs.data.isDel && rs.y1>0){
						return rs;
					}else{
						_this.mainLayer.del(rs);
					}
				});
				_this.enemys = _this.enemys.filter(rs=>{
					if(!rs.data.isDel){
						return rs;
					}else{
						_this.mainLayer.del(rs);
					}
				});
			}
		});
	},


	replay(){
		this.game.delFn(this.stepFn);
		this.game.del(this.mainScene);
		this.game.step = 0;
		this.game.resume();
		this.bullets = [];
		this.enemys = [];
		this.score = 0;

		this.createMain();
		this.addFrameFn();
	},


	endPlay(){
		this.game.pause();
		alert('得分:'+this.score);
		this.replay();
	}
};


window.page = PAGE;
