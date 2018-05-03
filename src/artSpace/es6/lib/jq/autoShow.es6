//元素自动从底部显示出来

require('./extend');
require('./cssAnimate');
let $$ = require('../event/$$');

$.fn.autoShow = function(tag,id){
	$(this).css({overflow:'hidden'});
	let list = $(this).find(tag);

	//获取元素相对页面位置
	let pos = [];
	for(let i=0,l=list.length;i<l;i++){
		let top = list.eq(i).offset().top;
		pos.push(top);
	}

	//设置初始样式
	list.css({
		opacity:0,
		transform:'translateY('+window.innerHeight+'px)'
	});

	let show = function(){
		let scrollTop = $(window).scrollTop(),
			winHeight = window.innerHeight,
			showHeightToTop = winHeight - 100;

		pos.map((rs,i)=>{
			let nowTop = rs-scrollTop;
			if(nowTop<showHeightToTop){

				if(!list.eq(i).data('run')){
					list.eq(i).data({'run':true}).cssAnimate({
						opacity:1,
						transform:'translateY(0)'
					},800,function(){},true,'ease-out','transform')
				}
			}
		})
	};

	$(window).scroll(function(){
		show();
	});

	show();


	if(!id){return;}
	let arrow = $('#'+id),
		arrow_height = parseInt(arrow.parent().height());

	$$(arrow).myclickok(function(){
		$(this).parent().toggleClass('__back__');
		setTimeout(function(){
			let now_arrow_div_height = parseInt(arrow.parent().height()),
				ll = now_arrow_div_height - arrow_height,
				newPos = [];

			if(ll > arrow_height){
				pos.map(rs=>{
					newPos.push(rs+ll);
				})
			}else{
				pos.map(rs=>{
					newPos.push(rs-ll);
				})
			}
			pos = newPos;

			show();
		},100);
	});

};

module.exports = null;