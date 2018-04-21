let $$ = require('./event/$$');

require('./jq/extend');
require('./jq/cssAnimate');
require('./jq/text2Span');
require('./jq/randomShowSpan');
require('./jq/hoverSpanJump');

$(document).ready(function(){
	PAGE.init();
});


var PAGE = {
	init(){
		$('#menu_item').text2Span();
		this.menuListSelect();
		this.homePageBtnEventBind();
		this.menuBtnEventBind();
		this.menuBtnHoverEvent();

	},
	homePageBtnEventBind(){
		let btn = $('#top_left');
		$$(btn).myclickok(function(){
			window.location.href = './index.html';
		});
	},
	menuBtnEventBind(){
		let btn = $('#top_right'),
			menu = $('#menu'),
			top_pc_menu = $('#top_pc_menu'),
			top_pc_close = $('#top_pc_close'),
			menuList = menu.find('.menu_main'),
			closeBtn = menu.find('.menu_close_btn');

		let show = function(){
			if(window.innerWidth<DATA.winSize){
				menu.css3({
					display:'block',
					background:'rgba(0,0,0,0)',
					transform:'scale(1)',
					opacity:1
				});
				menuList.css3({
					transform:'translateX(0)'
				});
				menuList.find('span').css({opacity:0});


				menu.cssAnimate({
					background:'rgba(0,0,0,0.7)'
				},500);
				menuList.cssAnimate({
					transform:'translateX(-100%)'
				},500,function(){
					//随机字显示效果
					menuList.randomShowSpan();
				});
			}else{
				menu.css3({
					display:'block',
					background:'#181818',
					opacity:0,
					transform:'scale(0.5)'
				});
				menuList.css3({transform:'translateX(-100%)'});
				menuList.find('span').css({opacity:0});

				menu.cssAnimate({
					transform:'scale(1)',
					opacity:1
				},500,function(){
					menuList.randomShowSpan();
				});
			}

		};

		let hide = function(){
			if(window.innerWidth<DATA.winSize){
				menu.cssAnimate({
					background:'rgba(0,0,0,0)'
				},500);
				menuList.cssAnimate({
					transform:'translateX(0)'
				},500,function(){
					menuList.find('span').css({opacity:0});
					menu.css({display:'none'});
				});
			}else{
				menu.cssAnimate({
					transform:'scale(0.5)',
					opacity:0
				},500,function(){
					menu.css({display:'none'});
				});
			}
		};

		$$(btn).myclickok(function(){
			show();
		});

		$$(closeBtn).myclickok(function(){
			hide();
		});

		$$(top_pc_close).myclickok(function(){
			$(this).hide().css({display:'none'});
			hide();
			top_pc_menu.show();
		});

		$$(top_pc_menu).myclickok(function(){
			$(this).hide();
			show();
			top_pc_close.css({display:'block'}).show();
		});

		$$(menu).myclickok(function(){
			hide();
		}).myclickdown(function(){}).myclickup(function(){});

		$$($('#menu_main')).myclickok(function(e){e.stopPop();}).myclickdown(function(){}).myclickup(function(){});


	},
	menuBtnHoverEvent(){
		$('#menu_item').find('a:not(.notSelect)').hoverSpanJump();
	},
	menuListSelect(){
		let pathName = window.location.pathname,
			as = $('#menu_item').find('a');

		if(pathName.substr(pathName.length-1) == '\/'){
			as.eq(0).addClass('notSelect');
		}else{
			as.each(function(){
				if(pathName.indexOf($(this).attr('href'))>-1){
					$(this).addClass('notSelect');
				}
			})
		}
	}

};