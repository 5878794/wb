

//btn组合对象
//返回的是spriteGroup对象;

//事件要在加入的场景启用事件监听
//scene.addEvent();



let canvas = require("./../canvas"),
	create = Symbol();

class bg{
	constructor(opt = {}){
		this.img = opt.img;
		this.width = opt.width;
		this.height = opt.height;
		this.x = opt.x || 0;
		this.y = opt.y || 0;
		this.time = opt.time;
		this.style = opt.style;
		this.groupBeforeRenderFn = opt.groupBeforeRenderFn || function(){};


		this.g = null;
		this[create]();
		// this.animate({
		// 	time:this.time,
		// 	style:this.style
		// });

		return this.g;
	}

	[create](){
		let bg = new canvas.sprite({
			width:this.width,
			height:this.height,
			res:this.img,
			x:0,
			y:0
		});
		let bg1 = new canvas.sprite({
			width:this.width,
			height:this.height,
			res:this.img,
			x:0,
			y:-this.height
		});


		let g = new canvas.group({
			width:this.width,
			height:this.height*2,
			x:this.x,
			y:this.y,
			groupBeforeRenderFn:this.groupBeforeRenderFn
		});

		g.append("bg",bg).append("bg1",bg1);
		this.g = g;


	}

	animate(opt={}){
		this.g.animate({
			time:opt.time,
			infinite:true,
			style:opt.style
		})
	}



}


module.exports = bg;