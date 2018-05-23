require('./lib/jq/extend');
const $$ = require('./lib/event/$$');

$(document).ready(function(){
	ALL.init();
});



const ALL = {
	menuIsAnimate:false,
	init(){
		this.addLogoEffect();
		this.addMenuEffect();
	},

	addLogoEffect(){
		let logo = $('#all_top_logo'),
			bg = $('#all_top_logo_bg');

		let runLogo = function(top){
			if(top>110){
				logo.css3({transform:'scale(0.8)'})
			}else{
				logo.css3({transform:'scale(1)'})
			}
		};
		let rotateLogo = function(top){
			// top = top%360;
			top = top/2;
			bg.css3({transform:'rotate('+top+'deg)'})
		};


		$(window).scroll(function(e){
			let top = $(window).scrollTop();
			runLogo(top);
			rotateLogo(top);
		});
	},

	addMenuEffect(){
		let btn = $('#all_top_menu'),
			_this = this,
			body = $('#all_menu'),
			main = $('#all_menu_body');


		let showMenu = function(){
			body.css({display:'block'});
			setTimeout(function(){
				body.css({background:'rgba(0,0,0,0.5)'});
				main.css3({
					transform:'translateX(0)',
					opacity:1
				})
			},0);
		};
		let closeMenu = function(){
			body.css({background:'rgba(0,0,0,0)'});
			main.css3({
				transform:'translateX(100%)',
				opacity:0
			});
			setTimeout(function(){
				body.css({display:'none'});
			},500)
		};

		$$(body).myclickok(function(){
			if(_this.menuIsAnimate){return;}
			_this.menuIsAnimate = true;
			setTimeout(function(){
				_this.menuIsAnimate = false;
			},600);
			if(btn.hasClass('select')){
				btn.removeClass('select');
			}else{
				btn.addClass('select');
			}
			closeMenu();
		}).myclickup(function(){}).myclickdown(function(){});

		$$(main).myclickok(function(e){
			e.stopPop();
		}).myclickup(function(){}).myclickdown(function(){});

		$$(btn).myclickok(function(){
			if(_this.menuIsAnimate){return;}
			_this.menuIsAnimate = true;
			setTimeout(function(){
				_this.menuIsAnimate = false;
			},600);


			if($(this).hasClass('select')){
				//关闭
				$(this).removeClass('select');
				closeMenu();
			}else{
				//打开
				$(this).addClass('select');
				showMenu();
			}
		}).myclickdown(function(){

		}).myclickup(function(){

		});




	}
};