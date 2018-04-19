require('./lib/all');
let getUrlData = require('./lib/fn/getParamFromUrl');



$(document).ready(function(){
	PAGE.init();
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