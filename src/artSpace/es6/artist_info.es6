require('./lib/all');
require('./lib/jq/pageLoading');
require('./lib/jq/autoShow');

let getUrlData = require('./lib/fn/getParamFromUrl');



$(document).ready(function(){
	let id = getUrlData().id;
	let dataImg = DATA.artist;
	let data = {
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
		$('#lists').autoShow('div');
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

		data.works.map(src=>{
			let dom = list.clone().attr({id:''}).css({display:'block'});
			dom.find('img').attr({src:src});
			body.append(dom);
		})
	}
};