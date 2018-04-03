var DEVICE = {};
(function () {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/ipad; cpu os ([\d_]+)/)) ? Sys.ipad = s[1].replace(/_/g, ".") :
		(s = ua.match(/iphone os ([\d_]+)/)) ? Sys.iphone = s[1].replace(/_/g, ".") :
			(s = ua.match(/android[ \/]([\d.]+)/)) ? Sys.android = s[1] :
				(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
					(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
						(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
							(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
								(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
									(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : Sys._ = 0;


	DEVICE.isIpad = (Sys.hasOwnProperty("ipad"));
	DEVICE.isIphone = (Sys.hasOwnProperty("iphone"));
	DEVICE.isAndroid = (Sys.hasOwnProperty("android"));
	DEVICE.isIe = (Sys.hasOwnProperty("ie"));
	DEVICE.isFirefox = (Sys.hasOwnProperty("firefox"));
	DEVICE.isChrome = (Sys.hasOwnProperty("chrome"));
	DEVICE.isOpera = (Sys.hasOwnProperty("opera"));
	DEVICE.isSafari = (Sys.hasOwnProperty("safari"));
	DEVICE.isWeChat = (ua.match(/MicroMessenger/i) == "micromessenger");

	DEVICE.ver = 0;
	var ver;
	for (var key in Sys) {
		if (Sys.hasOwnProperty(key)) {
			ver = Sys[key];
		}
	}
	ver = ver.split(".");
	var _ver = [];
	for (var i = 0, l = ver.length; i < l; i++) {
		if (i >= 2) {
			break;
		}
		_ver.push(ver[i]);
	}
	_ver = _ver.join(".");
	DEVICE.ver = _ver;

	DEVICE.isPhone = (DEVICE.isAndroid || DEVICE.isIpad || DEVICE.isIphone);
})();


$(document).ready(function(){
	//处理头部显示
	handlerTopInfo();

	//
	handlerTouchEvent();


	addInputClearBtn();

});


var handlerTopInfo = function(){
	if(DEVICE.isIpad || DEVICE.isIphone){
		$('#top_dom').find('.top_pos').css({display:'block'});
		$('.top_gg').css({display:'none'});
	}else{
		$('#top_dom').find('.top_back').css({display:'block'});
		if($('.top_logo').length==0){
			$('#top_left').removeClass('boxflex1').removeClass('box_h');
		}
	}
};

var handlerTouchEvent = function(){
	$('a').each(function(){
		this.addEventListener('touchstart',function(){},false)
	});
};

var addInputClearBtn = function(){
	$('input').each(function(){
		var parentDom = $(this).parent(),
			position = $(this).parent().css('position'),
			input = this;

		if(position=='fixed' || position=='relative' || position=='absolute'){

		}else{
			parentDom.css({
				position:'relative'
			})
		}

		var dom = $('<div>x</div>');
		dom.css({
			position:'absolute',
			right:'0.9rem',
			top:'50%',width:'0.5rem',height:'0.5rem','text-align':'center',
			'line-height':'0.5rem','font-size':'0.3rem',color:'#333',
			'margin-top':'-0.25rem',
			'z-index':8,'display':'none'
		});

		parentDom.append(dom);

		dom.get(0).addEventListener('touchstart',function(){
			$(input).val('');
			dom.css({display:'none'})
		},false);

		this.addEventListener('input',function(){
			if($(this).val()==''){
				dom.css({display:'none'})
			}else{
				dom.css({display:'block'})
			}
		},false)
	});
};

var xInfo = {
	dom:null,
	tempFn:null,
	create:function(text){
		var body = $('<div class="center"></div>');
		body.css({
			position:'fixed',
			left:0,
			top:0,
			width:'100%',
			height:'100%',
			background:'rgba(0,0,0,0)'
		});

		var main = $('<div></div>');
		main.css({
			'min-width':'2rem',
			display:'inline-block',
			padding:'0.2rem',
			background:'rgba(0,0,0,0.7)',
			'border-radius':'0.2rem',
			'-webkit-border-radius':'0.2rem'
		});

		var m1 = $('<div class="box_s center"></div>');


		var imgSrc = 'data:image/png;base64,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';
		var img = $('<img src="'+imgSrc+'">');
		img.css({
			display:'block',
			width:'1.2rem',
			height:'1.2rem'
		});

		var t = $('<div>'+text+'</div>');
		t.css({
			'text-align':'center',
			'max-width':'4rem',
			'font-size':'0.3rem',
			color:'#fff',
			'margin-top':'0.3rem',
			'line-height':'0.4rem'
		});

		main.append(m1);
		m1.append(img).append(t);
		body.append(main);

		this.dom = body;
	},
	show:function(text){
		if(this.dom){
			this.hide();
		}
		this.create(text);
		$('body').append(this.dom);

		var _this = this;
		this.tempFn = setTimeout(function(){
			_this.hide();
		},3000)
	},
	hide:function(){
		this.dom.remove();
		this.dom = null;
		clearTimeout(this.tempFn);
		this.tempFn = null;
	}
};