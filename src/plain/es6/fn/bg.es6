


let resLoader = require('../lib/resLoader/resLoader').image,
	game = require('../lib/canvas/canvas'),
	bgObj = require('../lib/canvas/group/bg'),
	device = require('../lib/device'),
	r2p = function(val){
		return device.rem2Px(750,val)
	};

let bg = {
	bgImage:null,
	scene:null,
	layer:null,
	init(scene){
		this.scene = scene;
		return new Promise(async success=>{
			this.bgImage = await this.loadBgImage();
			this.createBg();
			success();
		});
	},
	//加载背景图片
	async loadBgImage(){
		let imgObj = await new resLoader(
			{
				bg:'./image/bg.png'
			},
			function(loaded,total){
				console.log('load bg image');
				// console.log(loaded+"/"+total);
			}
		);


		if(imgObj.state == 1){
			//输出{key,imgObj对象, ...}
			return imgObj.data.bg;
		}else{
			//返回出错的图片地址
			throw(imgObj.msg);
			// console.log(imgObj.msg)
		}
	},
	//创建页面元素
	createBg(){
		this.layer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:1
		});
		this.scene.append(this.layer);

		var gg = new bgObj({
			img:this.bgImage,
			width:r2p(7.5),
			height:r2p(13),
			x:0,
			y:0,
			groupBeforeRenderFn:function(){
				this.y = this.y + 0.25;
				if(this.y >= this.height/2){
					this.y = 0;
				}
			}
		});

		this.layer.append(gg);
	}
};



module.exports = bg;