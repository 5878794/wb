

require('./lib/all');
require('./lib/jq/text2Span');
require('./lib/jq/hoverSpanJump');
let $$ = require('./lib/event/$$');
require('./lib/jq/pageLoading');


$(document).ready(function(){

	PAGE.init();
});


var PAGE = {
	init(){
		$('body').pageLoading({
			a:'./image/index/bg.png',
			b:'./image/index/title.png',
			c:'./image/close.png',
			d:'./image/home.png',
			e:'./image/home_.png',
			f:'./image/menu.png',
			g:'./image/menu_.png'
		});
		this.btnEventBind();
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


	}
};