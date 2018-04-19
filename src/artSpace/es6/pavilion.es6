let $$ = require('./lib/event/$$');
let sensor = require('./lib/h5/gravitySensor'),
	loading = require('./lib/ui/loading_old');
require('./lib/all');
require('./lib/jq/extend');
require('./lib/all');


var loadFn = null;
window.load = loading;

$(document).ready(function(){
	loadFn = new loading();
	PAGE.init();
});

var PAGE = {
	data:DATA.pavilion,
	n:0,
	init(){
		this.addTLYEvent();
		loadFn.show('极速加载中');
		this.show(0).then(rs=>{
			loadFn.hide();
		}).catch(rs=>{
			loadFn.hide();
			alert(rs);
		});
		this.btnEventBind();
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

		loadFn.show('极速加载中');
		this.show(this.n).then(rs=>{
			loadFn.hide();
		}).catch(rs=>{
			loadFn.hide();
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
		new sensor({
			moveFn:function(x,y){
				//x:y轴旋转角度 -90 - 90
				//y:x轴旋转角度 -90 - 90
				//旋转角度可转换成百分比在转换成实际的移动像素x,y
				//手机横向时 x=y  y=x;
				obj.css3({transform:"translate3d("+x+"px,0,0)"});
			}
		});
	}
};