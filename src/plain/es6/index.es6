
let viewport = require('./lib/ui/setViewport'),
	device = require('./lib/device'),
	game = require('./lib/canvas/canvas'),
	loadFn = require('./lib/ui/loading_old'),
	info = require('./lib/ui/info'),
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
	scoreAreaFn = require('./fn/scoreArea'),
	showPrizeRule = require('./fn/showPrizeRule'),
	showLogin = require('./fn/showLogin'),
	showPlayEndPage = require('./fn/showPlayEndPage'),
	showIndexListPage = require('./fn/showIndexPage'),
	showPrizePage = require('./fn/showPrizePage'),
	showAddressPage = require('./fn/showAddressPage'),
	ts = require('./fn/ts'),
	powerBox = require('./fn/powerBox'),
	localData = require('./lib/h5/localData'),
	{res,mp3} = require('./fn/resList');
require('./lib/jq/cssAnimate');




let preLoadRes = ['bg','logo','startBtn','prize_list','prize_rule_btn'];



viewport(750);


//TODO
//敌机的血
//重置参数有问题


$(document).ready(function(){
	game.preventScroll();
	PAGE.init().catch(rs=>console.log(rs));
});



var PAGE = {
	loading:null,
	info:null,
	isGameOver:true,
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
	powerBoxs:[],
	score:0,
	showTs:false,
	ts:null,
	showTsStep:0,
	stepFn:null,
	async init(){
		let _this = this;

		this.loading = new loadFn();
		this.info = info;

		//创建游戏
		this.game = new game.app({
			pauseFn:function(){
				if(_this.music.bg && !_this.isGameOver){
					_this.music.bg.pause();
				}
			},
			resumeFn:function(){
				if(_this.music.bg && !_this.isGameOver){
					_this.music.bg.play();
				}
			}
		});
		this.game.showFrame();

		this.createBg();
		await this.getRes();

		this.game.run();

		await this.createLoadPage();

	},
	//创建背景层
	createBg(){
		//创建背景
		this.bgScene = new game.scene();
		this.game.append(this.bgScene);
	},
	//获取要提前加载的图片
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
	//创建加载页面
	async createLoadPage(){
		//创建加载页面
		this.loadScene = new game.scene();
		this.game.append(this.loadScene);
		let obj = await loadScene.init(this.loadScene,this.res,res,mp3,this);

		this.res = obj.res;
		this.music = obj.mp3;
	},
	//显示规则页面
	async showPrizeRulePage(){
		this.game.hidden(this.loadScene);
		await showPrizeRule.init(this);

		//返回后
		this.game.show(this.loadScene);
	},
	//显示登陆页面
	async showLoginPage(){
		this.game.hidden(this.loadScene);
		await showLogin.init(this);

		// 点击开始游戏后
		if(this.music.bg){
			this.music.bg.play();
		}


		this.bullets = [];
		this.enemys = [];
		this.powerBoxs = [];
		this.score = 0;
		this.game.step = 0;
		this.createMain();
		this.addFrameFn();
	},
	//创建主游戏界面
	createMain(){
		this.isGameOver = false;
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

		//显示游戏提示
		this.showTsFn();

		//创建积分显示区
		this.scoreArea = scoreAreaFn(this.mainScene,this.mainLayer,this);
	},
	//是否显示提示
	showTsFn(){
		let showTs = localData.getItem('ts1') || '';
		this.showTs = (showTs)? false : true;
		localData.setItem('ts1','1');

		if(this.showTs){
			this.ts = ts(this);
			this.showTsStep = this.game.step+2;

			let fn = null,
				_this = this;
			window.addEventListener(device.START_EV,fn=function(){
				_this.showTs = false;
				_this.game.step = 0;
				_this.game.resume();
				_this.mainLayer.del(_this.ts);
				window.removeEventListener(device.START_EV,fn,false);
			},false)
		}
	},
	//创建每帧的处理事件
	addFrameFn(){
		let _this = this;

		this.game.addFn(this.stepFn = function(){

			//是否显示ts
			if(_this.showTs){
				if(_this.game.isFrame(_this.showTsStep)){
					_this.game.pause();
				}
			}

			//增加能量球
			if(_this.game.isFrame(setting.powerBox)){
				_this.powerBoxs.push(powerBox.init(_this));
			}


			//创建子弹
			if(_this.game.isFrame(setting.nowBulletParam.interval)){
				let bullet = bulletSprite(_this.plain,_this.mainLayer,_this.res);
				_this.bullets.push(bullet);
				if(_this.music.shot){
					_this.music.shot.volume(0.2);
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



			if(_this.game.isFrame(1)){
				//碰撞检测
				checkFn.init(_this.plain,_this.bullets,_this.enemys,_this.powerBoxs);

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

				_this.powerBoxs = _this.powerBoxs.filter(rs=>{
					if(!rs.data.isDel){
						return rs;
					}else{
						_this.mainLayer.del(rs);
					}
				});
			}
		});
	},
	//清除游戏层
	delMainScene(){
		this.game.delFn(this.stepFn);
		this.game.del(this.mainScene);
		this.game.resume();
	},
	//重玩游戏
	replay(){
		this.delMainScene();
		this.bullets = [];
		this.enemys = [];
		this.powerBoxs = [];
		this.score = 0;

		this.game.step = 0;
		this.createMain();
		this.addFrameFn();

		// 点击开始游戏后
		if(this.music.bg){
			this.music.bg.play();
		}
	},
	//游戏结束
	async endPlay(){
		let _this = this;

		this.game.pause();
		$('body').cssAnimate({
			opacity:0
		},2000,function(){
			_this.delMainScene();

			showPlayEndPage.init(_this);
		});
	},
	async showIndexListPage(parentPage){
		await showIndexListPage.init(this);

		parentPage.removeClass('hidden');
	},
	showPrizePage(parentPage){
		showPrizePage.init(this);
	},
	showAddressPage(){
		showAddressPage.init(this);
	}
};


window.page = PAGE;
window.r2p = r2p;
