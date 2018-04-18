

require('./lib/all');
require('./lib/jq/text2Span');
require('./lib/jq/hoverSpanJump');
let $$ = require('./lib/event/$$');



$(document).ready(function(){
	PAGE.init();
});


var PAGE = {
	init(){

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