
let viewport = require('./lib/ui/setViewport'),
	bg = require('./lib/canvas/group/bg'),
	device = require('./lib/device'),
	game = require('./lib/canvas/canvas'),
	r2p = function(val){
		return device.rem2Px(750,val)
	},
	resLoader = require('./lib/resLoader/resLoader').image;

let res = {
	bg:'./image/background_1.png',
	plain:'./image/enemy3_fly_1.png',
	dr:'./image/enemy1_fly_1.png',
	zd:'./image/bullet1.png'
};



viewport(750);




$(document).ready(function(){
	game.preventScroll();
	PAGE.init().catch(rs=>console.log(rs));
});



var PAGE = {
	res:null,
	game:null,
	mainScene:null,
	async init(){
		this.game = new game.app();
		this.game.showFrame();

		this.res = await this.resLoaderImage(res);

		this.createMainScene();



		this.game.run();


	},

	async resLoaderImage(res){
		let imgObj = await new resLoader(
			res,
			function(loaded,total){
				console.log(loaded+"/"+total);
			}
		);


		if(imgObj.state == 1){
			//输出{key,imgObj对象, ...}
			return imgObj.data;
		}else{
			//返回出错的图片地址
			throw(imgObj.msg);
			// console.log(imgObj.msg)
		}
	},

	createMainScene(){
		this.mainScene = new game.scene();
		this.game.append(this.mainScene);

		mainScene.init(this.mainScene);




	}
};



var mainScene = {
	scene:null,
	mainLayer:null,
	bgLayer:null,
	zds:[],
	init(mainScene){
		this.scene = mainScene;


		this.createBg();
		this.createMain();





	},
	createMain(){
		this.mainLayer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:2
		});
		this.scene.append(this.mainLayer);

		this.createPlain();
		setInterval(()=>{
			this.createZD();
		},100);




	},
	createPlain(){
		let width = device.rem2Px(320,0.46),
			height = device.rem2Px(320,0.6),
			x = (this.mainLayer.width - width)/2,
			y = (this.mainLayer.height - height);


		this.plain = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:PAGE.res.plain
		});

		this.mainLayer.append(this.plain);
	},
	createZD(){
		let width = device.rem2Px(320,0.06),
			height = device.rem2Px(320,0.14),
			x = this.plain.x + this.plain.width/2 - width/2,
			y = this.plain.y - height,
			endY = y - this.mainLayer.height;


		let zd = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:PAGE.res.zd
		});
		zd.animate({
			time:1500,
			style:{
				y:endY
			}
		});

		this.zds.push(zd);
		this.mainLayer.append(zd);
	},
	createBg(){
		this.bgLayer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:1
		});
		this.scene.append(this.bgLayer);

		var gg = new bg({
			img:PAGE.res.bg,
			width:device.rem2Px(320,3.2),
			height:device.rem2Px(320,5.68),
			x:0,
			y:0,
			time:32000,
			style:{
				y:PAGE.res.bg.height
			}
		});

		this.bgLayer.append(gg);
	}
};


window.page = PAGE;
