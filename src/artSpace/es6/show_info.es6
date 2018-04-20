require('./lib/all');
require('./lib/jq/pageLoading');

let getUrlData = require('./lib/fn/getParamFromUrl');



$(document).ready(function(){
	let id = getUrlData().id;
	let dataImg = DATA.show;
	let data = {
		c:'./image/close.png',
		d:'./image/home.png',
		e:'./image/home_.png',
		f:'./image/menu.png',
		g:'./image/menu_.png'
	};
	dataImg.map((rs,i)=>{
		if(rs.id == id){
			data['a1'] = rs.img;
		}
	});

	$('body').pageLoading(data,function(){
		PAGE.init();
	},function(){

	});
});



var PAGE = {
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
		DATA.show.map(rs=>{
			if(rs.id == parseInt(id)){
				data = rs;
			}
		});
		return data;
	},
	bindData(data){
		$('#bg').css({'background-image':'url('+data.img+')'});
		$('#title').text(data.name);
		$('#info').text(data.info);

		let address = [];
		data.address.map(aa=>{
			address.push(aa);
		});
		$('#address').html(address.join('<br/>'));
		$('#organizer').text(data.organizer);
		$('#time').text(data.time);
		$('#img').attr({src:data.img});

		let texts = $('#text');
		data.text.map(rs=>{
			texts.append('<p>'+rs+'</p>');
		})
	}
};