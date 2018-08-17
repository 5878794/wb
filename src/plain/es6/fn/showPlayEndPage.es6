let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	{ajax,api} = require('./ajax'),
	$$ = require('../lib/event/$$');

require('../lib/jq/extend');
require('../lib/jq/cssAnimate');



module.exports = {
	parentObj:null,
	main:null,
	replayBtn:null,
	prizeBtn:null,
	indexBtn:null,
	homeBtn:null,
	init(parentObj){


		this.parentObj = parentObj;
		this.createPage();

		$('body').append(this.main);

		$('body').cssAnimate({
			opacity:1
		},1000);

		this.addEvent();
		this.updateData();


	},
	createPage(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			title = $('<div></div>'),
			scoreDiv = $('<div>'+this.parentObj.score+'</div>'),
			indexBtn = $(res.indexBtn),
			prizeBtn = $(res.prizeBtn),
			replayBtn = $(res.replayBtn),
			homeBtn = $(res.home_btn);

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		title.css({
			width:r2p(res.scoreTitle.width)+'px',
			height:r2p(60)+'px',
			background:'url('+res.scoreTitle.src+') no-repeat center top',
			'background-size':'100% '+r2p(res.scoreTitle.height)+'px',
			'-webkit-background-size':'100% '+r2p(res.scoreTitle.height)+'px',
			'margin-bottom':r2p(20)+'px'
		});
		scoreDiv.css({
			width:r2p(res.indexBtn.width)+'px',
			height:r2p(270)+'px',
			'line-height':r2p(270)+'px',
			'font-size':r2p(60)+'px',
			color:'#fff',
			'text-align':'center',
			background:'rgba(255,255,255,0.2)',
			border:'1px solid rgba(255,255,255,0.3)',
			'border-radius':r2p(10)+'px',
			'margin-bottom':r2p(30)+'px'
		});
		indexBtn.css({
			display:'block',
			width:r2p(res.indexBtn.width)+'px',
			height:r2p(res.indexBtn.height)+'px',
			'margin-bottom':r2p(27)+'px'
		});
		prizeBtn.css({
			display:'block',
			width:r2p(res.prizeBtn.width)+'px',
			height:r2p(res.prizeBtn.height)+'px',
			'margin-bottom':r2p(27)+'px'
		});
		replayBtn.css({
			display:'block',
			width:r2p(res.replayBtn.width)+'px',
			height:r2p(res.replayBtn.height)+'px',
			'margin-bottom':r2p(250)+'px'
		});
		homeBtn.css({
			display:'block',
			width:r2p(res.home_btn.width)+'px',
			height:r2p(res.home_btn.height)+'px'
		});

		main.append(title)
			.append(scoreDiv)
			.append(indexBtn)
			.append(prizeBtn)
			.append(replayBtn)
			.append(homeBtn);

		this.main = main;
		this.replayBtn = replayBtn;
		this.indexBtn = indexBtn;
		this.prizeBtn = prizeBtn;
		this.homeBtn = homeBtn;

	},
	updateData(){
		let _this = this;
		this.parentObj.loading.show('loading');
		this.updateScore().then(rs=>{
			_this.parentObj.loading.hide();
		}).catch(rs=>{
			_this.parentObj.loading.hide();
			if(confirm('积分上传失败是否重试？')){
				_this.updateData();
			}
		});
	},
	async updateScore(){
		let score = this.parentObj.score,
			token = this.parentObj.token;

		await ajax.send([
			api.saveValue({
				value:score,
				token:token
			})
		]);

		return '';

	},
	addEvent(){
		let _this = this;
		$$(this.replayBtn).myclickok(function(){
			_this.parentObj.loading.show('loading...');
			_this.getToken().then(rs=>{
				_this.parentObj.loading.hide();
				//赋值token到parentObj
				_this.parentObj.token = rs.token;

				_this.removePage();
				_this.parentObj.replay();
			}).catch(rs=>{
				_this.parentObj.loading.hide();
				_this.parentObj.info.show(rs);
			});


		});

		$$(this.indexBtn).myclickok(function(){
			_this.parentObj.loading.show('loading...');
				_this.getList().then(rs=>{
				_this.parentObj.loading.hide();
				_this.hidePage();
				_this.parentObj.showIndexListPage(_this.main,rs);
			}).catch(rs=>{
				_this.parentObj.loading.hide();
				_this.parentObj.info.show(rs);
			});


		});

		$$(this.prizeBtn).myclickok(function(){
			_this.removePage();
			_this.parentObj.showPrizePage(_this.main);
		});

		$$(this.homeBtn).myclickok(function(){
			_this.removePage();
			_this.parentObj.game.show(_this.parentObj.loadScene);
		});
	},
	removePage(){
		$$(this.replayBtn).unbind(true);
		$$(this.indexBtn).unbind(true);
		$$(this.prizeBtn).unbind(true);
		this.main.remove();
	},
	hidePage(){
		this.main.addClass('hidden');
	},
	async getToken(){
		let _this = this.parentObj;
		let data = await ajax.send([
			api.getToken({
				phoneNo:_this.phone,
				nikeName:_this.nickname
			})
		]);

		return data[0];

	},
	async getList(){
		let data = await ajax.send([
			api.getRanking({})
		]);

		return data[0];
	}
};