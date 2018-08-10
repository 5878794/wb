let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$');

require('../lib/jq/extend');


let rote = {
	0:240,
	1:300,
	2:120,
	3:180,
	4:60,
	5:0
};


module.exports = {
	parentObj:null,
	startBtn:null,
	main:null,
	reStartBtn:null,
	pan:null,
	init(parentObj){
		this.parentObj = parentObj;
		this.createMain();

		$('body').append(this.main);

		this.addEvent();
	},
	createMain(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			body = $('<div></div>'),
			pan = $(res.prizePan),
			zhen = $(res.prizeZhen),
			startBtn = $(res.prizePageBtn),
			text = $(res.prizePageText);

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		body.css({
			width:r2p(res.prizePan.width)+'px',
			height:r2p(res.prizePan.height)+'px',
			position:'relative',
			'margin-bottom':r2p(100)+'px'
		});
		pan.css({
			display:'block',
			width:r2p(res.prizePan.width)+'px',
			height:r2p(res.prizePan.height)+'px',
			position:'absolute',
			left:0,top:0,
			'z-index':1
		});
		zhen.css({
			display:'block',
			width:r2p(res.prizeZhen.width)+'px',
			height:r2p(res.prizeZhen.height)+'px',
			position:'absolute',
			left:'50%',
			top:'50%',
			'margin-left':-r2p(res.prizeZhen.width/2)+'px',
			'margin-top':-r2p(res.prizeZhen.height/2+36)+'px',
			'z-index':2
		});
		startBtn.css({
			display:'block',
			width:r2p(res.prizePageBtn.width)+'px',
			height:r2p(res.prizePageBtn.height)+'px',
			position:'absolute',
			left:'50%',
			top:'50%',
			'margin-left':-r2p(res.prizePageBtn.width/2)+'px',
			'margin-top':-r2p(res.prizePageBtn.height/2)+'px',
			'z-index':3
		});
		text.css({
			display:'block',
			width:r2p(res.prizePageText.width)+'px',
			height:r2p(res.prizePageText.height)+'px',
		});

		body.append(pan).append(zhen).append(startBtn);
		main.append(body).append(text);


		this.startBtn = startBtn;
		this.main = main;
		this.pan = pan;


	},
	addEvent(){
		let _this = this;
		$$(this.startBtn).myclickok(async function(){
			_this.parentObj.loading.show('loading...');
			_this.startRote();
			_this.getData().then(rs=>{
				rs = 1;
				_this.stopRote(rs);
			}).catch(rs=>{
				_this.stopRote();
			});
		});
	},
	getData(){
		return new Promise((success,error)=>{
			setTimeout(function(){
				success();
			},1000)
		})
	},
	startRote(){

	},
	stopRote(n=0){

	}
};