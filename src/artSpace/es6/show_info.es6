require('./lib/all');
let getUrlData = require('./lib/fn/getParamFromUrl');



$(document).ready(function(){
	PAGE.init();
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