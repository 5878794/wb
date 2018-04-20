
require('./lib/all');
require('./lib/jq/autoShow');


$(document).ready(function(){
	PAGE.init();
});


var PAGE = {
	data:DATA.artist,
	init(){
		this.bindData();
		this.bindList();
		this.addEffect();
		$('#list_main').autoShow('a');
	},
	bindData(){
		let people_number = $('#people_number');
		people_number.text(this.data.length);
	},
	bindList(){
		let body = $('#list_main'),
			list = $('#list'),
			data = this.data;

		data.map(rs=>{
			let dom = list.clone().attr({id:''}).css({display:'block'});
			dom.find('.show_item_title').text(rs.name1);
			dom.find('.show_item_info').text(rs.name2);
			dom.find('img').attr({src:rs.image});
			dom.attr({href:'artist_info.html?id='+rs.id});
			body.append(dom);
		});
	},
	addEffect(){
		let list = $('#list_main').find('a'),
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