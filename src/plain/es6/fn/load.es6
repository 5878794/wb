let resLoader = require('../lib/resLoader/resLoader').image,
	game = require('../lib/canvas/canvas'),
	device = require('../lib/device'),
	setting = require('./setting'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};

let load = {
	scene:null,
	layer:null,
	logo:null,
	loadBg:null,
	loading:null,
	btn:null,
	init(scene,catchRes,loadRes){
		this.scene = scene;
		this.res = catchRes;
		return new Promise(async success=>{
			this.createLayer();
			this.createLogo();
			this.createLoading();
			let res = await this.loadRes(loadRes);
			this.layer.del(this.loadBg);
			this.layer.del(this.loading);
			this.createStartBtn();
			await this.clickEvent();


			this.btn.animatePause();
			success(res);
		});
	},
	createLayer(){
		this.layer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:1
		});

		this.scene.append(this.layer);
	},
	createLogo(){
		let width = r2p(this.res.logo.width),
			height = r2p(this.res.logo.height),
			x = (this.scene.width - width)/2,
			y = r2p(100);

		this.logo = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:this.res.logo
		});

		this.layer.append(this.logo);
	},
	createLoading(){
		let width = r2p(404),
			height = r2p(8),
			x = (this.scene.width - width)/2,
			y = this.scene.height - r2p(400);

		this.loadBg = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:'#fff'
		});

		this.layer.append(this.loadBg);

		let width1 = r2p(400),
			height1 = r2p(4),
			x1 = (this.scene.width - width1)/2,
			y1 = this.scene.height - r2p(398);

		this.loading = new game.sprite({
			width:0,
			height:height1,
			x:x1,
			y:y1,
			res:'#000'
		});

		this.layer.append(this.loading);
	},
	async loadRes(res){
		let _this = this,
			imgObj = await new resLoader(res,function(loaded,total){
				let per = loaded/total,
					width = r2p(400*per);
				_this.loading.width = width;

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
	createStartBtn(){
		let width = r2p(this.res.startBtn.width),
			height = r2p(this.res.startBtn.height),
			x = (this.scene.width-width)/2,
			y = this.scene.height-r2p(200)-height;

		this.btn = new game.sprite({
			x:x,
			y:y,
			width:width,
			height:height,
			res:this.res.startBtn
		});
		this.btn.animate({
			time:700,
			infinite:true,
			flip:true,
			style:{
				alpha:0
			}
		});

		this.layer.append(this.btn);
	},
	clickEvent(){
		return new Promise(success=>{
			this.scene.dom.get(0).addEventListener('click',function(){
				success();
			},false);
		})
	}
};



module.exports = load;