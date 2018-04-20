let $$ = require('./lib/event/$$');
require('./lib/jq/cssAnimate');
require('./lib/jq/text2Span');
require('./lib/jq/hoverSpanJump');
require('./lib/all');
require('./lib/jq/pageLoading');


$(document).ready(function(){
	let data = {
		c:'./image/close.png',
		d:'./image/home.png',
		e:'./image/home_.png',
		f:'./image/menu.png',
		g:'./image/menu_.png',
		j:'./image/map.png'
	};

	$('body').pageLoading(data,function(){
		PAGE.init();
	},function(){

	});
});


var PAGE = {
	init(){
		this.addBtnEffect();
		this.bindBtnEvent();
	},
	addBtnEffect(){
		let btn = $('#map');
		btn.text2Span();
		btn.find('span').css({opacity:1});
		btn.find('p').hoverSpanJump();
	},
	bindBtnEvent(){
		let btn = $('#map'),
			dom = $('#map_body');

		dom.get(0).addEventListener('touchstart',function(){
			dom.css({opacity:0,display:'none'});
		},false);

		$$(btn).myclickok(function(){
			dom.css({display:'block'});
			dom.cssAnimate({
				opacity:1
			},500);
		});


	}
};