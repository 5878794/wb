require('./lib/all');
require('./lib/jq/pageLoading');
require('./lib/jq/autoShow');
let showBigImage = require('./lib/ui/showBigPicture');

let getUrlData = require('./lib/fn/getParamFromUrl');



$(document).ready(function(){
	let id = getUrlData().id;
	let dataImg = DATA.artist;
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
		if(rs.id == id){
			let imgs = rs.works;
			imgs.map((r,a)=>{
				data['a'+a] = r;
			});

		}
	});

	$('body').pageLoading(data,function(){
		PAGE.init();
	},function(){
		$('#lists').autoShow('div','show_add_info_texts_arrow');
	});
});


var PAGE = {
	data:null,
	init(){
		let id = getUrlData().id;
		if(!id){
			alert('参数错误！');
			window.history.go(-1);
			return;
		}

		let data = this.getData(id);

		if(!data){
			alert('参数错误！');
			window.history.go(-1);
			return;
		}

		this.bindData(data);
		this.bindScrollEffect();
		this.addShowBigImage(data);

	},
	getData(id){
		let data = null;
		DATA.artist.map(rs=>{
			if(rs.id == parseInt(id)){
				data = rs;
			}
		});
		return data;
	},
	bindData(data){
		$('#name').text(data.name1);
		$('#work_number').text(data.works.length);


		let body = $('#lists'),
			list = $('#list');


		let infos = $('#show_add_info_texts');
		data.text.map(rs=>{
			infos.append('<p>'+rs+'</p>');
		});
		let clone_info = infos.clone().attr({id:''})
			.removeClass('show_add_info_texts')
			.addClass('show_add_info_texts1');
		clone_info.find('p').css({height:'0','overflow':'hidden',opacity:0}).addClass('hover_animate2');
		clone_info.append('<span class="show_add_info_texts_arrow" id="show_add_info_texts_arrow"></span>');
		body.append(clone_info);


		data.works.map((src,i)=>{
			let dom = list.clone().attr({id:''}).css({display:'block'});
			dom.find('img').attr({src:src}).data({n:i});
			dom.data({n:i});
			body.append(dom);
		});






		list.remove();
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
	addShowBigImage(data){

		$('.artist_info_item').find('img').click(function(){
			if(window.innerWidth>=DATA.winSize){
				let n = $(this).data('n');
				let a = new showBigImage({
					imgs: data.works
				});
				a.showImg(n);
			}
		})

	}
};