require('./lib/all');
require('./lib/jq/extend');
let banner = require('./lib/ui/bannerScroll'),
	$$ = require('./lib/event/$$');


$(document).ready(function(){
	PAGE.init();
});


var PAGE = {
	data:DATA.about,
	init(){
		this.bindData();
		this.setBanner();
		// this.addSlideEvent();
	},
	bindData(){
		let banner = $('#about_banner_body'),
			bannerData = this.data.banner;

		for(let i=0,l=bannerData.length;i<l;i++){
			let a = $('<a></a>');
			a.css3({
				background:'url('+bannerData[i]+') no-repeat center center',
				'background-size':'100% 100%'
			});
			banner.append(a);
		}

		let text = $('#about_text'),
			textData = this.data.text;


		for(let i=0,l=textData.length;i<l;i++){
			let p = $('<p>'+textData[i]+'</p>');
			text.append(p);
		}


	},
	setBanner(){
		let html = $('#about_banner_html'),
			body = $('#about_banner_body'),
			width = parseInt(html.width()),
			height = width*588/881;
		html.css({height:height+"px"});

		// 881*588

		new banner({
			win: html,                     // @param:jqobj    外层窗口
			body: body,       // @param:jqobj    滑动层
			time: 5000,                    // @param:number   滑动间隔时间
			animateTime: 1000,        // @param:number   滑动动画时间
			showPoint:false              // @param:number   是否显示下面的小点
			// leftBtn:$("#story_right_btn"),  //@param:jqobj    左滑动按钮
			// rightBtn:$("#story_left_btn"),  //@param:jqobj    右滑动按钮
			// changeStartFn:function(page){}, //@param:fn       滑动开始时执行函数，传递当前要滑动到的页面number
			// changeEndFn:function(page){}    //@param:fn       滑动结束时执行函数，传递当前要滑动到的页面number
		});
	},
	addSlideEvent(){
		let body = $('body'),
			dom = $('#about_body');

		$$(body).myslideup(function(){
			dom.cssAnimate({
				transform:'translateY(-100%)'
			},500)
		}).myslidedown(function(){
			dom.cssAnimate({
				transform:'translateY(0)'
			},500)
		}).myclickdown(function(){}).myclickup(function(){});
	}
};