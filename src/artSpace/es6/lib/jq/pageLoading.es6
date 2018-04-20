require('./classAnimate');
require('./extend');
let imgLoader = require('../resLoader/image');

$.fn.pageLoading = async function(imgs){
	//隐藏原始的
	$('body').children().css({opacity:0});


	let body = $('<div></div>');
	body.css({
		position:'fixed',
		left:0,top:0,width:'100%',height:'100%',
		'z-index':10000,background:'#333'
	});
	let main = $('<div></div>');
	main.css({
		position:'absolute', color:'#fff',
		left:'50%',top:'50%',width:'300px',height:'200px',
		'margin-top':'-100px',
		'margin-left':'-150px',
		'text-align':'center',
		'font-size':'32px'
	});
	let logo = $('<div></div>');
	logo.css({
		margin:'0 auto',
		width: '60px', height: '60px',
		'background-image': 'url(./image/home.png)',
		'background-repeat': 'no-repeat',
		'background-position': 'center center',
		'-webkit-background-size':'17px 30px',
		'background-size':'17px 30px'
	});
	let text = $('<div>AURA SPACE</div>');
	text.css({
		width:'100%','line-height':'60px'
	});
	let text1 = $('<div>THE WORLD OF ART</div>');
	text1.css({
		'font-size':'14px',
		'letter-spacing':'4px'
	});
	let pre = $('<div>0</div>');
	pre.css({
		width:'100%','line-height':'100px'
	});

	main.append(logo).append(text).append(text1).append(pre);
	body.append(main);

	$('body').append(body);

	main.set3dDom();
	logo.classAnimate({
		'0%':'transform:rotateY(0deg) rotateX(0deg)',
		'50%':'transform:rotateY(180deg) rotateX(0deg)',
		'100%':'transform:rotateY(180deg) rotateX(180deg)'
	},2000,'linear',true,false,function(){},0,'transform')


	let s = new Date().getTime();
	await new imgLoader(
		imgs,
		function(loaded,total){
			pre.text(parseInt(loaded*100/total))
		}
	);

	let e = new Date().getTime();


	let end = function(){
		logo.removeClassAnimate();
		body.cssAnimate({
			opacity:0
		},500,function(){
			body.remove();
			setTimeout(function(){
				$('body').children().each(function(){
					$(this).cssAnimate({
						opacity:1
					},1000,function(){},true,'','opacity');
				})
			},300)
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