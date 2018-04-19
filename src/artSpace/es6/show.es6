require('./lib/all');

$(document).ready(function(){
	PAGE.init();
});



var PAGE = {
	data:DATA.show,
	init(){
		this.bindData();
		this.addEffect();
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

		let line = window.innerHeight/2,
			_this = this;

		$(window).scroll(function(){
			let top = $(window).scrollTop();
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
		}

	}
};