
let viewport = require('./lib/ui/setViewport'),
	device = require('./lib/device'),
	game = require('./lib/canvas/canvas'),
	r2p = function(val){
		return device.rem2Px(750,val)
	},
	resLoader = require('./lib/resLoader/resLoader').image,
	bgScene = require('./fn/bg'),
	loadScene = require('./fn/load');




let res = {
	logo:'./image/plain.png',
	bg:'./image/bg.png',
	bullet:'./image/bullet.png',
	plain:'./image/plain.png',
	enemy1:'./image/enemy1.png',
	enemy2:'./image/enemy2.png',
	enemy3:'./image/enemy3.png',
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
let preLoadRes = ['bg','logo'];



viewport(750);




$(document).ready(function(){
	game.preventScroll();
	PAGE.init().catch(rs=>console.log(rs));
});



var PAGE = {
	res:{},
	game:null,
	bgScene:null,
	loadScene:null,
	async init(){
		//创建游戏
		this.game = new game.app();
		this.game.showFrame();

		//创建背景
		this.bgScene = new game.scene();
		this.game.append(this.bgScene);
		//获取需要提前加载的图片
		let preLoadImg = {};
		for(let [key,val] of Object.entries(res)){
			if(preLoadRes.indexOf(key)>-1){
				preLoadImg[key] = val;
			}
		}
		this.res = await bgScene.init(this.bgScene,preLoadImg);

		this.game.run();

		//创建加载页面
		this.loadScene = new game.scene();
		this.game.append(this.loadScene);
		this.res = await loadScene.init(this.loadScene,this.res,res);


		//点击开始游戏后
		this.game.del(this.loadScene);

	}
};


window.page = PAGE;
