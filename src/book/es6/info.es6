let viewport = require('./lib/ui/setViewport'),
	localData = require('./lib/h5/localData');
viewport(750);


$(document).ready(function(){
	//清除顶部返回等
	$('#top_left').remove();
	$('.top_gg').css({display:'block'});

	page.init();
});

var page = {
	init(){
		let {type,size}=this.getLocalData();
		this.setPage(type,size);
		this.bindData(type,size);
		this.addEvent();
	},
	getLocalData(){
		let lData = localData.getItem('bens_set') || '{}';
		lData = JSON.parse(lData);
		let	type = lData.type || 1,     //1:白天  2:晚上
			size = lData.size || 20;

		return {
			type,size
		}
	},
	saveLocalData(data){
		localData.setItem('bens_set',JSON.stringify(data));
	},
	setPage(type,size){
		//设置样式
		this.setMs(type);
		this.setSize(size);
	},
	bindData(type,size){
		$('body').data({
			type:type,
			size:size
		});
	},
	addEvent(){
		let ms = $('#info_icon1'),
			add = $('#info_icon2'),
			less = $('#info_icon3'),
			_this = this;

		ms.click(function(){
			let type = $('body').data('type');
			type = (type == 1)? 2 : 1;
			_this.setMs(type);
		});

		add.click(function(){
			let size = $('body').data('size');
			size = size +2;
			size = (size <= 24)? size : 24;
			_this.setSize(size);
		});

		less.click(function(){
			let size = $('body').data('size');
			size = size -2;
			size = (size <= 16)? 16 : size;
			_this.setSize(size);
		});

	},

	setMs(type){
		//1:白天  2:晚上
		$('body').data({type:type});
		let lData = this.getLocalData();
		lData.type = type;
		this.saveLocalData(lData);

		let color = (type==1)? '#333' : '#fff',
			bg = (type ==1)? '#fff' : '#000';

		$('.info_main').css({
			background:bg,
			color:color
		})

	},
	setSize(size){
		$('body').data({size:size});
		let lData = this.getLocalData();
		lData.size = size;
		this.saveLocalData(lData);

		$('.info_body').css({
			'cssText':'font-size:'+size+'px!important;line-height:120%;'
		})
	}
};

