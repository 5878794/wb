
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
	djs:[],
	init(mainScene){
		this.scene = mainScene;


		this.createBg();
		this.createMain();
		this.addEvent();





	},
	createMain(){
		this.mainLayer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:2
		});
		this.scene.append(this.mainLayer);

		this.createPlain();

		let _this =this;
		PAGE.game.addFn(function(){
			//创建子弹对象
			if(PAGE.game.isFrame(10)){
				_this.createZD();
			}

			//创建敌机
			let n = parseInt(Math.random()*60);
			if(PAGE.game.isFrame(n)){
				_this.createDJ();
			}

			//清除不用的对象
			if(PAGE.game.isFrame(1)){
				_this.zds = _this.zds.filter(rs=>{
					return (!rs.data.del);
				});
				_this.djs = _this.djs.filter(rs=>{
					return (!rs.data.del);
				});
			}

		});
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
			res:PAGE.res.plain,
			data:{
				spd:4
			}
		});

		this.mainLayer.append(this.plain);
	},
	createDJ(){
		let width = device.rem2Px(320,0.34),
			height = device.rem2Px(320,0.24),
			x = Math.random()*this.mainLayer.width-width,
			y = -height,
			_this = this;

		let dj = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:PAGE.res.dr,
			data:{
				spd:4
			},
			beforeRenderFn:function(){
				this.y += this.data.spd;
				this.y1 = this.y + this.height;


				let x = this.x,
					y = this.y,
					x1 = this.x1,
					y1 = this.y1;

				_this.zds.map(rs=>{
					if(rs.x<=x1 && rs.x>=x && rs.y>=y && rs.y<=y1){
						this.res = '#000';
					}
				});
			}
		});

		this.djs.push(dj);
		this.mainLayer.append(dj);
	},
	addEvent(){
		let x=0,y=0,isTouch = false,_this = this;
		window.addEventListener(device.START_EV,function(e){
			isTouch = true;
			e = (e.touches && e.touches[0])? e.touches[0] : e;
			x = e.screenX;
			y = e.screenY;
		},false);
		window.addEventListener(device.MOVE_EV,function(e){
			if(!isTouch){return;}
			e = (e.touches && e.touches[0])? e.touches[0] : e;
			let _x = e.screenX,
				_y = e.screenY,
				plain = _this.plain;
				// dx = (_x>x)? 1 : -1,
				// dy = (_y>y)? 1 : -1;

			// plain.x += (Math.abs(_x-x)>plain.data.spd)? plain.data.spd*dx : _x-x;
			// plain.y += (Math.abs(_y-y)>plain.data.spd)? plain.data.spd*dy : _y-y;
			plain.x += _x-x;
			plain.y += _y-y;
			plain.x1 = plain.x + plain.width;
			plain.y1 = plain.y + plain.height;

			x = _x;
			y = _y;

		},false);
		window.addEventListener(device.END_EV,function(e){
			isTouch = false;
		},false);
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
			res:PAGE.res.zd,
			data:{
				spd:6
			},
			beforeRenderFn:function(){
				this.y = this.y - this.data.spd;
				this.y1 = this.y + this.height;
			}
		});
		// zd.animate({
		// 	time:1500,
		// 	style:{
		// 		y:endY
		// 	}
		// });

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
			// time:32000,
			// style:{
			// 	y:PAGE.res.bg.height
			// }
			groupBeforeRenderFn:function(){
				this.y = this.y + 10.5;
				if(this.y >= this.height/2){
					this.y = 0;
				}
			}
		});

		this.bgLayer.append(gg);
	}
};


window.page = PAGE;
window.main = mainScene;
