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
	prize_list:null,
	prize_btn:null,
	loadBg:null,
	loading:null,
	btn:null,
	total:0,
	init(scene,catchRes,loadRes,loadMp3,parentObj){
		this.parentObj = parentObj;
		this.total = [...Object.values(loadRes)].length + [...Object.values(loadMp3)].length;
		this.scene = scene;
		this.res = catchRes;
		return new Promise(async success=>{
			this.createLayer();
			this.createLogo();
			// this.createPrizeList();
			this.createLoading();
			let res = await this.loadRes(loadRes);
			let mp3 = await this.loadMusic(loadMp3);
			this.layer.del(this.loadBg);
			this.layer.del(this.loading);

			//增加事件监听
			this.scene.addEvent();

			this.createPrizeBtn();
			this.createStartBtn();

			success({res,mp3});
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
			y = r2p(60);

		this.logo = new game.sprite({
			width:width,
			height:height,
			x:x,
			y:y,
			res:this.res.logo
		});

		this.layer.append(this.logo);
	},
	// createPrizeList(){
	// 	let width = r2p(this.res.prize_list.width),
	// 		height = r2p(this.res.prize_list.height),
	// 		x = (this.scene.width - width)/2,
	// 		y = r2p(120)+r2p(this.res.logo.height);
	//
	// 	this.prize_list = new game.sprite({
	// 		width:width,
	// 		height:height,
	// 		x:x,
	// 		y:y,
	// 		res:this.res.prize_list
	// 	});
	//
	// 	this.layer.append(this.prize_list);
	// },
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
				_this.loaded = loaded;
				let per = loaded/_this.total,
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
	async loadMusic(mp3){
		let backObj = {};
		for(let [key,val] of Object.entries(mp3)){
			backObj[key] = await this.loadMp3(val);

			this.loaded++;
			let per = this.loaded/this.total,
				width = r2p(400*per);
			this.loading.width = width;
		}

		await device.sleep(0.5);

		return backObj;
	},
	loadMp3(src){
		let loop = (src.indexOf('bg')>-1);

		return new Promise(success=>{
			let sound;
			sound = new Howl({
				src: [src],
				loop:loop,
				preload:true,
				onload:function(){
					console.log(sound)
					success(sound);
				},
				onloaderror:function(a,b){
					console.log(a,b)
					success();
				}
			});
		});
	},
	createPrizeBtn(){
		let width = r2p(this.res.prize_rule_btn.width),
			height = r2p(this.res.prize_rule_btn.height),
			x = (this.scene.width-width)/2,
			y = r2p(550),
			_this = this;

		this.prize_btn = new game.sprite({
			x:x,
			y:y,
			width:width,
			height:height,
			res:this.res.prize_rule_btn
		});

		this.prize_btn.myclickok(function(){
			_this.parentObj.showPrizeRulePage();
		});
		this.prize_btn.myclickdown(function(){
			_this.prize_btn.alpha = 50;
		});
		this.prize_btn.myclickup(function(){
			_this.prize_btn.alpha = 100;
		});
		this.layer.append(this.prize_btn);

	},
	createStartBtn(){
		let width = r2p(this.res.startBtn.width),
			height = r2p(this.res.startBtn.height),
			x = (this.scene.width-width)/2,
			y = r2p(740),
			_this = this;

		this.btn = new game.sprite({
			x:x,
			y:y,
			width:width,
			height:height,
			res:this.res.startBtn
		});

		this.layer.append(this.btn);

		this.btn.myclickdown(function(){
			_this.btn.alpha = 50;
		});
		this.btn.myclickup(function(){
			_this.btn.alpha = 100;
		});
		this.btn.myclickok(function(){
			_this.parentObj.showLoginPage();
		});
	}
};



module.exports = load;