

require('./lib/all');
require('./lib/jq/text2Span');
require('./lib/jq/hoverSpanJump');
require('./lib/jq/extend');
let $$ = require('./lib/event/$$');
require('./lib/jq/pageLoading');


$(document).ready(function(){
	$('body').pageLoading({
		a:'./image/index/bg.png',
		b:'./image/index/title.png',
		c:'./image/close.png',
		d:'./image/home.png',
		e:'./image/home_.png',
		f:'./image/menu.png',
		g:'./image/menu_.png'
	},function(){
		PAGE.init();
	},function(){});
});


var PAGE = {
	init(){

		this.btnEventBind();
		this.slideBtnEvent();
	},
	btnEventBind(){
		let btn = $('#index_open'),
			menu = $('#top_right');

		btn.text2Span();
		btn.find('span').css({opacity:1});
		btn.find('p').hoverSpanJump();

		$$(btn).myclickok(function(){
			$$(menu).trigger('myclickok');
		});


	},
	slideBtnEvent(){
		let btn = $('#index_slide_btn'),
			body = $('#index_slide_body'),
			bodyWidth = parseInt(body.width())-10,
			isMouseDown = false,
			left=-10,
			p = 0;

		btn.mousedown(function(e){
			p = e.pageX;
			bodyWidth = parseInt(body.width())-10
			isMouseDown = true;
		});

		$(window).mousemove(function(e){
			if(!isMouseDown){return;}
			let np = e.pageX,
				m = left+(np-p);
			m = (m<-10)? -10 :m;
			m = (m>bodyWidth)? bodyWidth : m;
			btn.css({
				left:m+"px"
			})
		});

		$(window).mouseup(function(e){
			if(!isMouseDown){return;}
			let menu = $('#top_right');
			isMouseDown = false;
			let np = e.pageX,
				m = left + (np-p);
			if(m+10>=bodyWidth){
				$$(menu).trigger('myclickok');
			}else{
				//退回起点
				btn.cssAnimate({
					left:'-10px'
				},500)
			}
		});


	}
};