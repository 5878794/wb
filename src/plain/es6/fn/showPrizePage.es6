let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$'),
	{ajax,api} = require('./ajax'),
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
	resultMain:null,
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
			text = $(res.prizePageText),
			resultDiv = $('<div class="box_hcb"></div>');

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
		resultDiv.css({
			position:'absolute',
			left:0,top:-r2p(60)+'px',
			width:r2p(625)+'px',
			height:r2p(595)+'px',
			'z-index':4
		}).addClass('hidden');

		body.append(pan).append(zhen).append(startBtn).append(resultDiv);
		main.append(body).append(text);


		this.startBtn = startBtn;
		this.main = main;
		this.pan = pan;
		this.resultMain = resultDiv;


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
			rs = rs.lotteryResult;
			_this.stopRote(rs);
		}).catch(rs=>{
			_this.stopRote('');
		});
	},
	async getData(){
		let _this = this.parentObj;
		let data = await ajax.send([
			api.getLotteryResult({
				token:_this.token,
				value:_this.score
			})
		]);

		data = data[0];
		return data;

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
		let _this = this;

		this.startDeg = roteObj[n];
		this.a.stopRotate(this.startDeg,function(){
			_this.showResult(n);
		})
	},


	showResult(rs=0){
		let body = this.resultMain,
			bg,btn,
			_this = this;

		if(rs == 0){
			bg = this.parentObj.res.prizePageNothing;
			btn = this.parentObj.res.prizePageReplay;
		}else{
			bg =this.parentObj.res['prizePageObj'+rs];
			btn = this.parentObj.res.prizePageGet;
		}

		let img = $(bg),
			button = $(btn);

		img.css({
			width:r2p(bg.width)+'px',
			height:r2p(bg.height)+'px',
			display:'block'
		});
		button.css({
			display:'block',
			position:'absolute',
			width:r2p(btn.width)+'px',
			height:r2p(btn.height)+'px',
			left:'50%',
			'margin-left':-r2p(btn.width/2),
			bottom:r2p(50)
		});

		body.append(img).append(button);
		body.removeClass('hidden');


		let removeResultPage = function(){
			$$(button).unbind(true);
			body.addClass('hidden');
			body.html('');
		};


		if(rs == 0){
			//未中奖  在玩一次
			$$(button).myclickok(function(){
				removeResultPage();
				_this.prizeStart(_this.startDeg);
			});
		}else{
			//中奖
			$$(button).myclickok(function(){
				removeResultPage();
				_this.delPage();
				_this.parentObj.showAddressPage();
			});
		}


	},

	delPage(){
		this.a = null;
		this.main.remove();
	}
};