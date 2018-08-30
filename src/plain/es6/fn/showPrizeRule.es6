let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	bannerFn = require('../lib/ui/bannerScroll'),
	$$ = require('../lib/event/$$'),
	setting = require('./setting');

require('../lib/jq/extend');

module.exports = {
	parentObj:null,
	main:null,
	btn:null,
	bannerMain:null,
	bannerBody:null,
	bannerObj:null,
	oldBgSpd:0,
	async init(parentObj){
		parentObj.game.pause();

		this.parentObj = parentObj;
		this.createPage();
		$('body').append(this.main);

		this.addBannerEvent();
		await this.addEvent();

		this.removePage();

		parentObj.game.resume();
		return true;

	},
	createPage(){
		let res = this.parentObj.res,
			div = $('<div class="box_scc"></div>'),
			title = $(res.game_sm_title),
			text = $('<div>《《《 左右滑动方框内图片查看其它内容 》》》</div>'),
			bannerMain = $('<div></div>'),
			bannerBody = $('<div></div>'),
			a = $('<a></a>'),
			img1 = $(res.prize_rule_text),
			img11 = $(res.prize_rule_text1),
			img2 = $(res.game_sm_banner1),
			img3 = $(res.game_sm_banner2),
			img4 = $(res.game_sm_banner3),
			img5 = $(res.game_sm_banner4),
			btn = $(res.home_btn);

		title.css3({
			display:'block',
			width:r2p(res.game_sm_title.width)+'px',
			height:r2p(res.game_sm_title.height)+'px',
			'margin-bottom':r2p(20)+'px'
		});
		btn.css({
			display:'block',
			width:r2p(res.home_btn.width)+'px',
			height:r2p(res.home_btn.height)+'px',
			'margin-top':r2p(100)+'px'
		});
		text.css({
			width:'100%',
			height:r2p(60)+'px',
			'font-size':'12px',
			color:'#ccc',
			'text-align':'center',
			transform:'scale(0.8)',
			'-webkit-transform':'scale(0.8)'
		});
		div.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		bannerMain.css({
			width:r2p(res.game_sm_banner1.width)+'px',
			height:r2p(res.game_sm_banner1.height)+'px',
			overflow:'hidden'
		});
		a.css({
			display:'block',
			width:r2p(res.game_sm_banner1.width)+'px',
			height:r2p(res.game_sm_banner1.height)+'px'
		});


		let banner1 = a.clone().append(img1),
			banner11 = a.clone().append(img11),
			banner2 = a.clone().append(img2),
			banner3 = a.clone().append(img3),
			banner4 = a.clone().append(img4),
			banner5 = a.clone().append(img5);

		bannerBody.append(banner1)
					.append(banner11)
					.append(banner2)
					.append(banner3)
					.append(banner4)
					.append(banner5);
		bannerBody.find('img').css({
			display:'block',
			width:'100%',
			height:'100%'
		});
		bannerMain.append(bannerBody);
		div.append(title).append(bannerMain).append(text).append(btn);


		this.main = div;
		this.btn = btn;
		this.bannerMain = bannerMain;
		this.bannerBody = bannerBody;

	},
	addBannerEvent(){
		let _this = this;

		this.bannerObj = new bannerFn({
			win: _this.bannerMain,                      //@param:jqobj    外层窗口
			body: _this.bannerBody,        //@param:jqobj    滑动层
			time: 4000,                     //@param:number   滑动间隔时间
			animateTime: 500,         //@param:number   滑动动画时间
			showPoint:false                //@param:number   是否显示下面的小点
			// leftBtn:$("#story_right_btn"),  //@param:jqobj    左滑动按钮
			// rightBtn:$("#story_left_btn"),  //@param:jqobj    右滑动按钮
			// changeStartFn:function(page){}, //@param:fn       滑动开始时执行函数，传递当前要滑动到的页面number
			// changeEndFn:function(page){}    //@param:fn       滑动结束时执行函数，传递当前要滑动到的页面number
		});
	},
	addEvent(){
		return new Promise(success=>{
			$$(this.btn).myclickok(function(){
				success();
			});
		})
	},
	removePage(){
		this.bannerObj.destroy();
		$$(this.btn).unbind(true);
		this.main.remove();
	}
};