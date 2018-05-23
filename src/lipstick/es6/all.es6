require('./lib/jq/extend');
const $$ = require('./lib/event/$$');

$(document).ready(function(){
	ALL.init();
});



const ALL = {
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
		let btn = $('#all_top_menu');

		$$(btn).myclickok(function(){
			console.log(123)
			if($(this).hasClass('select')){
				//关闭
				$(this).removeClass('select');

			}else{
				//打开
				$(this).addClass('select');

			}
		}).myclickdown(function(){

		}).myclickup(function(){

		});




	}
};