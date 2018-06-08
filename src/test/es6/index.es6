let fn = require('./lib/ui/textChangeEffect');
let viewport = require('./lib/ui/setViewport');

viewport(650);

$(document).ready(function(){

	window.a = new fn({
		dom:$('#aa'),               //容器dom @param:jqobj
		bg:'rgb(255,255,255)',   //背景色  必须rgba  默认:rgba(255,255,255,0)
		fontSize:12,                //字体大小 @param:number  单位px
		fontColor:'rgb(0,0,0)',     //字体颜色 @param:rgb    默认:rgb(0,0,0)
		textAlign:'center',          //文字水平对齐方式  @param:str  默认:center
		// left,right,center
		fontSizeUnit:'px'
	});
	// window.a.show(2);
	// window.a = new fn({
	// 	dom:$('#aa'),
	// 	fontColor:'rgb(51,51,51)',
	// 	bg:'rgb(255,255,255)',
	// 	textAlign:'center'
	// });
	console.log(new Date().getTime())
	window.a.show(2);
	console.log(new Date().getTime())
});



//
// let createCanvas = Symbol(),
// 	textToImageData = Symbol(),
// 	getTextPointArray = Symbol(),
// 	drawPoint = Symbol(),
// 	clearCanvas = Symbol(),
// 	getShowFontColorRGBA = Symbol(),
// 	animatePoint = Symbol(),
// 	clearEmptyPointArray = Symbol(),
// 	arrayRowColChange = Symbol(),
// 	createMainCanvas = Symbol();
//
//
// let animate = require('./lib/fn/jsAnimate');
//
// class numberChange{
// 	constructor(opt){
// 		this.dom = opt.dom;
// 		this.bg = opt.bg || 'rgb(255,255,255)';
// 		this.fontSize = opt.fontSize || '12';
// 		this.fontColor = opt.fontColor || 'rgb(0,0,0)';
// 		this.fontR = '';
// 		this.fontG = '';
// 		this.fontB = '';
// 		this.bgR = '';
// 		this.bgG = '';
// 		this.bgB = '';
//
// 		this.scale = window.devicePixelRatio;
// 		this.domWidth = parseInt(this.dom.width());
// 		this.domHeight = parseInt(this.dom.height());
// 		this.canvasWidth = this.domWidth*this.scale;
// 		this.canvasHeight = this.domHeight*this.scale;
// 		this.nowPoints = [];
//
//
// 		this.canvas = null;
// 		this.ctx = null;
//
// 		this[getShowFontColorRGBA]();
// 		this[createMainCanvas]();
//
// 	}
//
// 	[getShowFontColorRGBA](){
// 		let colors = this.fontColor.match(/(\d+)/ig);
// 		this.fontR = parseInt(colors[0]);
// 		this.fontG = parseInt(colors[1]);
// 		this.fontB = parseInt(colors[2]);
//
// 		let bg = this.bg.match(/(\d+)/ig);
// 		this.bgR = parseInt(bg[0]);
// 		this.bgG = parseInt(bg[1]);
// 		this.bgB = parseInt(bg[2]);
// 	}
//
// 	show(str){
// 		let imgData = this[textToImageData](str),
// 			array = this[getTextPointArray](imgData),
// 			endNumber = array.length,
// 			startNumber = this.nowPoints.length,
// 			startArray,
// 			endArray,
// 			centerX = parseInt(this.canvasWidth/2),
// 			centerY = parseInt(this.canvasHeight/2),
// 			_this = this;
//
// 		console.log('----------')
// 		console.log(array)
// 		console.log('----------')
//
// 		if(endNumber > startNumber){
// 			//增加新的像素点
// 			//渐显的初始位置为中心点
// 			let add = endNumber - startNumber;
//
//
// 			for(let i=0,l=add;i<l;i++){
// 				this.nowPoints.push({
// 					x:centerX,
// 					y:centerY,
// 					r:this.fontR,
// 					g:this.fontG,
// 					b:this.fontB,
// 					a:0
// 				});
// 			}
//
// 		}else{
// 			//现在的图形像素点大于之前显示的像素点,渐隐多余的 之前图像后面的像素点
// 			//渐隐的位置为中心点
// 			let cut = startNumber - endNumber;
//
// 			for(let i=0,l=cut;i<l;i++){
// 				let point = this.nowPoints[startNumber-1-i];
// 				array.push({
// 					x:centerX,
// 					y:centerY,
// 					r:point.r,
// 					g:point.g,
// 					b:point.b,
// 					a:0
// 				})
// 			}
// 		}
//
// 		startArray = this.nowPoints;
// 		endArray = array;
//
//
// 		// console.log(startArray,endArray)
// 		this[animatePoint](startArray,endArray,500,function(){
// 			_this.nowPoints = endArray;
// 		});
//
//
// 		// this[drawPoint](array);
//
// 	}
//
//
// 	[animatePoint](startArray,endArray,time,callback){
// 		let _this = this;
// 		var a = new animate({
// 			start:0,                  //@param:number   初始位置
// 			end:1,                    //@param:number   结束位置
// 			time:time,                 //@param:number   动画执行时间  ms
// 			type:"Quint",             //@param:str      tween动画类别,默认：Linear 详见函数内tween函数
// 			class:"easeIn",           //@param:str      tween动画方式,默认：easeIn 详见函数内tween函数
// 			stepFn:function(per){     //@param:fn       每步执行函数,返回当前属性值
// 				let newArray = [];
// 				for(let i=0,l=startArray.length;i<l;i++){
// 					let SP = startArray[i],
// 						EP = endArray[i];
//
// 					newArray.push({
// 						x:SP.x+(EP.x-SP.x)*per,
// 						y:SP.y+(EP.y-SP.y)*per,
// 						r:SP.r+(EP.r-SP.r)*per,
// 						g:SP.g+(EP.g-SP.g)*per,
// 						b:SP.b+(EP.b-SP.b)*per,
// 						a:SP.a+(EP.a-SP.a)*per
// 					})
// 				}
//
// 				_this[drawPoint](newArray);
// 			},
// 			endFn:function(){         //@param:fn       动画结束执行
// 				callback();
// 			},
// 			alternate:false,          //@param:boolean  动画结束时是否反向运行，默认：false
// 			infinite:false            //@param:boolean  动画是否循环执行，默认：false
// 			// 设置该参数endFn将失效
// 		});
//
// 		a.play();
// 		// a.stop();
// 	}
//
// 	[drawPoint](array){
// 		this[clearCanvas]();
// 		array.map(rs=>{
// 			this.ctx.fillStyle = 'rgba('+rs.r+','+rs.g+','+rs.b+','+rs.a+')';
// 			this.ctx.fillRect(rs.x,rs.y,1,1);
// 		});
// 	}
//
// 	[clearCanvas](){
// 		this.ctx.fillStyle = this.bg;
// 		this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);
// 	}
//
// 	// show(str){
// 	// 	let data = this[textToImageData](str),
// 	// 		array = this[getTextPointArray](data);
// 	//
// 	// 	array = this[clearEmptyPointArray](array);
// 	//
// 	// 	if(array.length == 0 ){return;}
// 	// 	let _width = this.domWidth/array[0].length,
// 	// 		_height = this.domHeight/array.length,
// 	// 		_r = (_width>_height)? _height : _width,
// 	// 		__r = _r*4/5;
// 	//
// 	//
// 	//
// 	//
// 	//
// 	// 	this.ctx.fillStyle = '#fff';
// 	// 	for(let y=0,yl=array.length;y<yl;y++){
// 	// 		for(let x=0,xl=array[y].length;x<xl;x++){
// 	// 			if(array[y][x] != 0){
// 	// 				let center_x = x*_r,
// 	// 					center_y = y*_r;
// 	//
// 	//
// 	// 				// this.ctx.beginPath();
// 	// 				// console.log(center_x,center_y,_r/2,0,2*Math.PI)
// 	// 				// this.ctx.arc(center_x,center_y,_r/2,0,2*Math.PI,true);
// 	// 				// this.ctx.closePath();
// 	// 				// this.ctx.fill();
// 	// 				// this.ctx.stroke();
// 	// 				this.ctx.fillRect(center_x,center_y,__r,__r);
// 	// 			}
// 	// 		}
// 	// 	}
// 	//
// 	//
// 	//
// 	// 	console.log(array);
// 	// }
//
// 	//创建画布
// 	[createCanvas](){
// 		let canvas = document.createElement('canvas'),
// 			ctx = canvas.getContext('2d');
//
// 		return {canvas,ctx};
// 	}
//
// 	//文字写入画布,在获取画布的imageData
// 	[textToImageData](str){
// 		let {canvas,ctx} = this[createCanvas]();
//
// 		canvas.width = this.canvasWidth;
// 		canvas.height = this.canvasHeight;
// 		ctx.fillStyle = this.bg;
// 		ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);
//
// 		ctx.fillStyle = this.fontColor;
// 		let size = this.fontSize * this.scale;
// 		ctx.font = size+'px sans-serif';
// 		ctx.textAlign = 'center';
// 		ctx.textBaseline = 'middle';
// 		ctx.fillText(str,this.canvasWidth/2,this.canvasHeight/2);
//
// 		return ctx.getImageData(0,0,this.canvasWidth,this.canvasHeight);
// 	}
//
// 	// //imageData转成文字的点的2维数组
// 	[getTextPointArray](data){
// 		let imgData = data.data,
// 			width = data.width,
// 			height = data.height,
// 			newData = [];
//
// 		for(let y=0,yl=height;y<yl;y++){
// 			for(let x=0,xl=width;x<xl;x++){
// 				let n = (y*width+x)*4,
// 					r = imgData[n],
// 					g = imgData[n+1],
// 					b = imgData[n+2],
// 					a = imgData[n+3];
//
// 				if(r!=this.bgR || g!=this.bgG || b!=this.bgB){
// 					newData.push({
// 						x:x,
// 						y:y,
// 						r:r,
// 						g:g,
// 						b:b,
// 						a:a
// 					});
// 				}
// 			}
// 		}
//
// 		return newData;
// 	}
//
// 	// //清除空的点的行和列
// 	// [clearEmptyPointArray](data){
// 	// 	let newData = [];
// 	// 	//清除行
// 	// 	data.map(rs=>{
// 	// 		if(rs.indexOf(1)>-1){
// 	// 			newData.push(rs);
// 	// 		}
// 	// 	});
// 	//
// 	//
// 	// 	//数组行列转换
// 	// 	newData = this[arrayRowColChange](newData);
// 	// 	let backData = [];
// 	// 	//清除列
// 	//
// 	// 	newData.map(rs=>{
// 	// 		if(rs.indexOf(1)>-1){
// 	// 			backData.push(rs);
// 	// 		}
// 	// 	});
// 	//
// 	// 	//反转数组后返回
// 	// 	return this[arrayRowColChange](backData);
// 	//
// 	// }
// 	//
// 	// //2维数组行列转换
// 	// [arrayRowColChange](data){
// 	// 	if(data.length == 0){return [];}
// 	//
// 	// 	let x = data[0].length,
// 	// 		y = data.length,
// 	// 		backData = [];
// 	//
// 	// 	for(let i =0,l=x;i<l;i++){
// 	// 		backData.push(new Array(y));
// 	// 	}
// 	//
// 	//
// 	// 	for(let yy=0,yl=y;yy<yl;yy++){
// 	// 		for(let xx=0,xl=x;xx<xl;xx++){
// 	// 			backData[xx][yy] = data[yy][xx];
// 	// 		}
// 	// 	}
// 	//
// 	// 	return backData;
// 	// }
//
// 	//创建主canvas
// 	[createMainCanvas](){
// 		let {canvas,ctx} = this[createCanvas]();
// 		this.canvas = canvas;
// 		this.ctx = ctx;
//
// 		this.canvas.width = this.canvasWidth;
// 		this.canvas.height = this.canvasHeight;
//
// 		this.ctx.fillStyle = this.bg;
// 		this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);
//
// 		$(this.canvas).css({
// 			'transform-origin':'left top',
// 			'-webkit-transform-origin':'left top',
// 			transform:'scale('+1/this.scale+')',
// 			'-webkit-transform':'scale('+1/this.scale+')'
// 		});
//
// 		this.dom.append(this.canvas);
// 	}
//
// }
//
//




