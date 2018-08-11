let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$'),
	rotateToEnd = require('../lib/fn/rotateToDeg');

require('../lib/jq/extend');


let roteObj = {
	0:120,
	1:60,
	2:240,
	3:180,
	4:300,
	5:0
};


module.exports = {
	parentObj:null,
	startBtn:null,
	main:null,
	reStartBtn:null,
	pan:null,
	startDeg:0,
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
			$$(this).unbind(true);
			_this.prizeStart(_this.startDeg);
		});
	},
	prizeStart(startDeg){
		let _this = this;

		_this.startRote(startDeg);
		_this.getData().then(rs=>{
			rs = 3;
			_this.stopRote(rs,function(){
				_this.showResult(rs);
			});
		}).catch(rs=>{
			_this.stopRote('',function(){
				_this.showResult();
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
	startRote(startDeg){
		let dom = this.pan;

		this.a = new rotateToEnd({
			startDeg:startDeg,
			stepFn:function(aa){
				dom.css({
					transform:'rotate('+aa+'deg)'
				});
			}
		});

	},
	stopRote(n=0){
		this.startDeg = roteObj[n];
		this.a.stopRotate(this.startDeg)
	},


	showResult(rs=0){

	}
};