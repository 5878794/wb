let $$ = require('./lib/event/$$');
let sensor = require('./lib/h5/gravitySensor');
	// loading = require('./lib/ui/loading_old');
require('./lib/all');
require('./lib/jq/extend');
require('./lib/all');
require('./lib/jq/pageLoading');


// var loadFn = null;
// window.load = loading;

$(document).ready(function(){
	let data = {
		c:'./image/close.png',
		d:'./image/home.png',
		e:'./image/home_.png',
		f:'./image/menu.png',
		g:'./image/menu_.png',
		a:'./image/pavilion/p1.jpg',
		b:'./image/pavilion/p2.jpg',
		h:'./image/pavilion/p3.jpg',
		i:'./image/pavilion/p4.jpg',
		j:'./image/arrow.png'
	};

	$('body').pageLoading(data,function(){
		PAGE.init();
	},function(){

	});
});

var PAGE = {
	data:DATA.pavilion,
	n:0,
	init(){
		this.addTLYEvent();
		this.show(0).then(rs=>{
			// loadFn.hide();
		}).catch(rs=>{
			// loadFn.hide();
			alert(rs);
		});
		this.btnEventBind();
		this.resizeFn();
	},
	btnEventBind(){
		let left = $('#pavilion_btns_left'),
			right = $('#pavilion_btns_right'),
			_this = this;

		$$(left).myclickok(function(){
			_this.getImg('pre')
		});
		$$(right).myclickok(function(){
			_this.getImg('next')
		});
	},
	getImg(type){
		if(type=='pre'){
			this.n--;
		}else{
			this.n++;
		}

		let max = this.data.length - 1;
		this.n = (this.n > max)? 0 : this.n;
		this.n = (this.n < 0)? max : this.n;

		// loadFn.show('极速加载中');
		this.show(this.n).then(rs=>{
			// loadFn.hide();
		}).catch(rs=>{
			// loadFn.hide();
			alert(rs);
		});
	},
	loadImg(src){
		return new Promise((success,error)=>{
			let img = new Image();
			img.onload = function(){
				success(img);
			};
			img.onerror = function(){
				error('加载错误');
			};
			img.src = src;
		});
	},
	async show(n){
		let src = this.data[n];
		if(!src){alert('暂无图片');return;}

		let imgBody = $('#pavilion_body');

		let img = await this.loadImg(src);
		this.img = img;
		this.imgAutoSize();
		imgBody.find('img').remove();

		imgBody.append(img);

		let imgWidth = parseInt($(img).width());
		imgBody.css({
			left:'50%',top:0,
			'margin-left':-imgWidth/2+'px'
		});

	},
	addTLYEvent(){
		let obj = $('#pavilion_body');
		if(window.innerWidth<DATA.winSize){
			new sensor({
				moveFn:function(x,y){
					//x:y轴旋转角度 -90 - 90
					//y:x轴旋转角度 -90 - 90
					//旋转角度可转换成百分比在转换成实际的移动像素x,y
					//手机横向时 x=y  y=x;
					x = x*4;
					obj.css3({transform:"translate3d("+x+"px,0,0)"});
				}
			});
		}
	},
	imgAutoSize(){
		if(!this.img){return;}
		if(!(window.innerWidth>DATA.winSize)){return;}
		let winWidth = window.innerWidth,
			winHeight = window.innerHeight,
			imgWidth = this.img.width,
			imgHeight = this.img.height;

		if(winWidth/winHeight >= imgWidth/imgHeight){
			this.img.width = winWidth;
			this.img.height = winWidth*imgHeight/imgWidth;

		}else{
			this.img.height = winHeight;
			this.img.width = winHeight*imgWidth/imgHeight;
		}

		let dom = $('#pavilion_body');
		dom.find('img').css({
			width:this.img.width+'px',
			height:this.img.height+'px'
		});
		dom.css({
			left:'50%',top:0,
			'margin-left':-this.img.width/2+'px'
		});
	},
	resizeFn(){
		let _this = this;
		$(window).resize(function(){
			if(window.innerWidth>DATA.winSize){
				_this.imgAutoSize();
			}
		});
	}
};