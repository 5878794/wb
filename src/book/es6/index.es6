let viewport = require('./lib/ui/setViewport');
viewport(750);


let banner = require('./lib/ui/bannerScroll');


$(document).ready(function(){
	let body = $('#banner'),
		main = $('#banner_main');

	new banner({
		win: body,                      //@param:jqobj    外层窗口
		body: main,        //@param:jqobj    滑动层
		time: 3000,                     //@param:number   滑动间隔时间
		animateTime: 500,         //@param:number   滑动动画时间
		showPoint:true              //@param:number   是否显示下面的小点
		// leftBtn:$("#story_right_btn"),  //@param:jqobj    左滑动按钮
		// rightBtn:$("#story_left_btn"),  //@param:jqobj    右滑动按钮
		// changeStartFn:function(page){}, //@param:fn       滑动开始时执行函数，传递当前要滑动到的页面number
		// changeEndFn:function(page){}    //@param:fn       滑动结束时执行函数，传递当前要滑动到的页面number
	})
});