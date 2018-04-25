require('./classAnimate');
require('./extend');
let imgLoader = require('../resLoader/image');

$.fn.pageLoading = async function(imgs,callback,callback1){
	//隐藏 原始的
	$('body').children().css({opacity:0});


	let body = $('<div></div>');
	body.css({
		position:'fixed',
		left:0,top:0,width:'100%',height:'100%',
		'z-index':10000,background:'#181818'
	});
	let main = $('<div></div>');
	main.css({
		position:'absolute', color:'#fff',
		left:'50%',top:'50%',width:'300px',height:'240px',
		'margin-top':'-120px',
		'margin-left':'-150px',
		'text-align':'center',
		'font-size':'25px',
		'letter-spacing':'4px'
	});
	let logo = $('<div></div>');
	logo.css({
		margin:'0 auto',
		width: '60px', height: '60px',
		'background-image': 'url(./image/home.png)',
		'background-repeat': 'no-repeat',
		'background-position': 'center center',
		'-webkit-background-size':'17px 30px',
		'background-size':'17px 30px',
		'margin-bottom':'40px'
	});
	let logoDiv = $('<div></div>');
	let text = $('<div>AURA SPACE</div>');
	text.css({
		width:'100%','line-height':'30px'
	});
	let text1 = $('<div>THE WORLD OF ART</div>');
	text1.css({
		'font-size':'10px',
		'letter-spacing':'5px'
	});
	let pre = $('<div>0</div>');
	pre.css({
		width:'100%',
		'margin-top':'40px'
	});

	logoDiv.append(logo);
	main.append(logoDiv).append(text).append(text1).append(pre);
	body.append(main);

	$('body').append(body);

	logoDiv.set3dDom();
	logo.classAnimate({
		'0%':'transform:rotate3d(0,0,0，0)',
		'25%':'transform:rotate3d(0,0.5,0,180deg)',
		'50%':'transform:rotate3d(0,0,0.5,180deg)',
		'75%':'transform:rotate3d(0.5,0,0,180deg)',
		'100%':'transform:rotate3d(0,0,0,180deg)'
	},4000,'linear',true,false,function(){},0,'transform');


	let s = new Date().getTime();
	await new imgLoader(
		imgs,
		function(loaded,total){
			pre.text(parseInt(loaded*100/total))
		}
	);

	let e = new Date().getTime();


	let end = function(){
		body.cssAnimate({
			opacity:0
		},500,function(){
			logo.removeClassAnimate();
			body.remove();
			callback();
			setTimeout(function(){
				let isRunCallBack = false;
				$('body').children().each(function(){
					$(this).cssAnimate({
						opacity:1
					},1000,function(){
						if(!isRunCallBack){
							isRunCallBack = true;
							setTimeout(function(){
								callback1();
							},100)
						}
					},true,'','opacity');
				})
			},200)
		})
	};


	if(e-s<1000){
		setTimeout(function(){
			end();
		},1000+s-e)
	}else{
		end();
	}



};


module.exports = null;