let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$');

require('../lib/jq/extend');
require('../lib/jq/cssAnimate');



module.exports = {
	parentObj:null,
	main:null,
	replayBtn:null,
	prizeBtn:null,
	indexBtn:null,
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
			replayBtn = $(res.replayBtn);

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		title.css({
			width:r2p(res.scoreTitle.width)+'px',
			height:r2p(200)+'px',
			background:'url('+res.scoreTitle.src+') no-repeat center top',
			'background-size':'100% '+r2p(res.scoreTitle.height)+'px',
			'-webkit-background-size':'100% '+r2p(res.scoreTitle.height)+'px',
		});
		scoreDiv.css({
			width:'100%',
			height:r2p(200)+'px',
			'font-size':r2p(60)+'px',
			color:'#fff',
			'text-align':'center'
		});
		indexBtn.css({
			display:'block',
			width:r2p(res.indexBtn.width)+'px',
			height:r2p(res.indexBtn.height)+'px',
			'margin-bottom':r2p(55)+'px'
		});
		prizeBtn.css({
			display:'block',
			width:r2p(res.prizeBtn.width)+'px',
			height:r2p(res.prizeBtn.height)+'px',
			'margin-bottom':r2p(55)+'px'
		});
		replayBtn.css({
			display:'block',
			width:r2p(res.replayBtn.width)+'px',
			height:r2p(res.replayBtn.height)+'px',
			'margin-bottom':r2p(55)+'px'
		});

		main.append(title)
			.append(scoreDiv)
			.append(indexBtn)
			.append(prizeBtn)
			.append(replayBtn);

		this.main = main;
		this.replayBtn = replayBtn;
		this.indexBtn = indexBtn;
		this.prizeBtn = prizeBtn;

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
	//TODO
	updateScore(){

		return new Promise((success,error)=>{
			setTimeout(function(){
				success();
			},1000)
		});
	},
	addEvent(){
		let _this = this;
		$$(this.replayBtn).myclickok(async function(){
			_this.parentObj.loading.show('loading...');
			await _this.getToken().then(rs=>{
				_this.parentObj.loading.hide();
				//赋值token到parentObj TODO

			}).catch(rs=>{
				_this.parentObj.loading.hide();
				_this.parentObj.info.show(rs);
			});

			_this.removePage();
			_this.parentObj.replay();
		});

		$$(this.indexBtn).myclickok(function(){
			_this.hidePage();
			_this.parentObj.showIndexListPage(_this.main);
		});

		$$(this.prizeBtn).myclickok(function(){
			_this.removePage();
			_this.parentObj.showPrizePage(_this.main);
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
	getToken(){
		return new Promise((success,error)=>{
			setTimeout(function(){
				success();
			},1000)
		})

	}
};