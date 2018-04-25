require('./lib/all');
require('./lib/jq/autoShow');
require('./lib/jq/extend');
require('./lib/jq/pageLoading');

$(document).ready(function(){
	let dataImg = DATA.show;
	let data = {
		z:'./image/menu_bg1.png',
		x:'./image/meun_bg2.png',
		c:'./image/close.png',
		d:'./image/home.png',
		e:'./image/home_.png',
		f:'./image/menu.png',
		g:'./image/menu_.png'
	};
	dataImg.map((rs,i)=>{
		data['a'+i] = rs.img;
	});

	$('body').pageLoading(data,function(){
		PAGE.init();
	},function(){
		$('#show_list').autoShow('a');
	});
});



var PAGE = {
	data:DATA.show,
	init(){
		this.bindData();
		this.addEffect();
		this.bindScrollEffect();
	},
	bindData(){
		$('#show_number').text(this.data.length);

		let body = $('#show_list'),
			list = $('#list');

		this.data.map(rs=>{
			let dom = list.clone().attr({id:''}).css({display:'block'});
			dom.attr({href:'show_info.html?id='+rs.id});
			dom.find('.show_item_time').text(rs.year);
			dom.find('.show_item_title').text(rs.name);
			dom.find('.show_item_info').text(rs.msg);
			dom.find('img').attr({src:rs.img});
			body.append(dom);
		})
	},
	addEffect(){
		let list = $('#show_list').find('a'),
			position = [];

		for(let i=0,l=list.length;i<l;i++){
			let p = list.eq(i).offset().top;
			position.push(p);
		}

		list.eq(0).addClass('active');
		this.setBg(list.eq(0));

		let _this = this;

		$(window).scroll(function(){
			let top = $(window).scrollTop(),
				line = window.innerHeight/2;

			_this.handleScroll(position,top,line,list);
		})

	},
	handleScroll(position,top,line,list){
		let newP = [],newP1 = [];
		position.map(rs=>{
			let val = rs-top-line;
			newP.push(val);
			newP1.push(val)
		});

		newP1 = newP1.filter(rs=>{
			if(rs<=0){
				return rs;
			}
		});

		let max = Math.max.apply(this,newP1),
			n = newP.indexOf(max);

		let dom = list.eq(n);
		if(dom.hasClass('active')){

		}else{
			list.removeClass('active');
			dom.addClass('active');
			this.setBg(dom);
		}

	},
	bindScrollEffect(){
		let scroller = $('#show_scroll_main');
		$(window).scroll(function(){
			let winHeight = window.innerHeight,
				bodyHeight = parseInt($('body').height()),
				scrollTop = $(window).scrollTop(),
				height = scrollTop*100 / (bodyHeight-winHeight);
			height = (height == 0)? 0.1 : height;
			height = (!height || height<0)? '100%' : height+'%';

			scroller.css({
				height:height
			})
		});
	},
	setBg(dom){
		if(DATA.winSize>window.innerWidth){return;}
		let src = dom.find('img').attr('src');
		$('#show_pc_bg').css3({
			opacity:0.2,
			background:'url('+src+') no-repeat top center',
			'background-size':'cover'
		});
		setTimeout(function(){
			$('#show_pc_bg').cssAnimate({
				opacity:0.6
			},500)
		},100)

	}
};

