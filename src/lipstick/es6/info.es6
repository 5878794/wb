let $$ = require('./lib/event/$$');

var DATA = {
	//橘色
	'1':{
		img: './image/product/1/color_product_1.png',
		price: '$38',
		name: 'ISABELLA 128',
		color: './image/product/1/color_ys_1.png'
	},
	//梅子色
	'2':{
		img: './image/product/1/color_product_2.png',
		price: '$38',
		name: 'ALVIE 108',
		color: './image/product/1/color_ys_2.png'
	},
	// 桃色
	'3':{
		img: './image/product/1/color_product_3.png',
		price: '$38',
		name: 'ELEANOR 048',
		color: './image/product/1/color_ys_3.png'
	},
	//正红色
	'4':{
		img:'./image/product/1/color_product_4.png',
		price:'$38',
		name:'JANICE 068',
		color:'./image/product/1/color_ys_4.png'
	}
};




$(document).ready(function(){
	PAGE.init();
});


const PAGE = {
	init(){
		this.hideInfo();
		this.bindColorEvent();
		this.selectEventBind();
		this.infoEventBind();

	},
	hideInfo(){
		let list = $('#info_info_body').find('.info_info'),
			listHeight = window.innerWidth*0.12;
		list.each(function(){
			let height = parseInt($(this).height());
			$(this).data({height:height});
			$(this).css({
				height:listHeight+'px',
				overflow:'hidden'
			}).removeClass('select');
		})
	},
	bindColorEvent(){
		let btns = $('#info_colors_div').find('p'),
			img = $('#color_img'),
			price = $('#color_price'),
			name1 = $('#color_name1'),
			name2 = $('#color_name2');

		$$(btns).myclickdown(function(){
			let id = $(this).data('id'),
				data = DATA[id];

			btns.removeClass('select');
			$(this).addClass('select');
			img.attr({src:data.img});
			price.text(data.price);
			name1.text(data.name);
			name2.text(data.name);
		})
	},
	selectEventBind(){
		let showDom = $('#show_number').find('span');
		$('#number_select').get(0).addEventListener('change',function(){
			showDom.text($(this).val());
		},false);
	},
	infoEventBind(){
		let list = $('#info_info_body').find('.info_info');

		$$(list).myclickok(function(){
			if($(this).hasClass('select')){
				//关闭
				$(this).removeClass('select');
				let height = window.innerWidth*0.12;
				$(this).css({
					height:height+'px',
					overflow:'hidden'
				})
			}else{
				//打开
				$(this).addClass('select');
				let height = $(this).data('height');
				$(this).css({
					height:height+'px',
					overflow:'hidden'
				})
			}
		});


	}
};