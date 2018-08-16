let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$'),
	childStepAnimate = require('../lib/jq/childrenStepAnimate');

require('../lib/jq/extend');


module.exports = {
	parentObj:null,
	main:null,
	body:null,
	btn:null,
	row:null,
	data:null,
	async init(parentObj,data){
		this.parentObj = parentObj;
		this.data = data;
		this.createMain();
		$('body').append(this.main);


		this.bindData(this.data);
		await this.addEvent();
		this.delPage();
	},
	createMain(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			title = $('<div></div>'),
			body = $('<div></div>'),
			row = $('<div class="box_hcc"></div>'),
			left = $('<div></div>'),
			center = $('<div></div>'),
			right = $('<div></div>'),
			btn = $(res.backBtn);

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		title.css({
			width:'100%',
			height:r2p(60)+'px',
			background:'url('+res.indexListTitle.src+') no-repeat center top',
			'background-size':r2p(res.indexListTitle.width)+'px '+r2p(res.indexListTitle.height)+'px',
			'-webkit-background-size':r2p(res.indexListTitle.width)+'px '+r2p(res.indexListTitle.height)+'px',
			'margin-bottom':r2p(40)+'px'
		});
		body.css({
			width:r2p(600)+'px',
			height:r2p(590)+'px',
			background:'rgba(255,255,255,0.15)',
			'border-radius':r2p(10)+'px',
			'padding':r2p(40)+'px 0'
		});
		btn.css({
			display:'block',
			width:r2p(res.backBtn.width)+'px',
			height:r2p(res.backBtn.height)+'px',
			'margin-top':r2p(50)+'px'
		});
		row.css({
			width:'100%',
			height:r2p(50)+'px',
			'line-height':r2p(50)+'px',
			'font-size':r2p(26)+'px'
		});
		left.css({
			'text-align':'right',
			width:r2p(70)+'px',
			'padding-right':r2p(40)+'px',
			height:r2p(50)+'px'
		});
		center.css({
			'text-align':'left',
			width:r2p(240)+'px',
			height:r2p(50)+'px'
		});
		right.css({
			'text-align':'right',
			width:r2p(200)+'px',
			height:r2p(50)+'px'
		});

		main.append(title).append(body).append(btn);
		row.append(left).append(center).append(right);

		this.main = main;
		this.body = body;
		this.btn = btn;
		this.row = row;
	},
	delPage(){
		$$(this.btn).unbind('click');
		this.main.remove();
	},
	addEvent(){
		let _this = this;
		return new Promise(success=>{
			$$(_this.btn).myclickok(function(){
				success();
			})
		})
	},
	bindData(data){
		let body = this.body,
			row = this.row;

		data.map((rs,i)=>{
			let thisRow = row.clone(),
				n = i+1;
			thisRow.find('div').eq(0).text(rs.index+'.');
			thisRow.find('div').eq(1).text(rs.nickName);
			thisRow.find('div').eq(2).text(rs.value);
			body.append(thisRow);
		})
	}
};