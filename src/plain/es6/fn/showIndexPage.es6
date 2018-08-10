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
	async init(parentObj){
		this.parentObj = parentObj;
		this.createMain();
		$('body').append(this.main);

		this.parentObj.loading.show('loading...');
		await this.getData().catch(rs=>{
			this.parentObj.loading.hide();
			this.parentObj.info.show(rs);
		}).then(rs=>{
			this.parentObj.loading.hide();

			rs = [
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'},
				{phone:'1231231312',score:'12312312'}
			];
			this.bindData(rs);
		});

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
			height:r2p(80)+'px',
			background:'url('+res.indexListTitle.src+') no-repeat center top',
			'background-size':r2p(res.indexListTitle.width)+'px '+r2p(res.indexListTitle.height)+'px',
			'-webkit-background-size':r2p(res.indexListTitle.width)+'px '+r2p(res.indexListTitle.height)+'px',
			'margin-bottom':r2p(40)+'px'
		});
		body.css({
			width:r2p(600)+'px',
			height:r2p(590)+'px',
			background:'rgba(255,255,255,0.3)',
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
	//TODO
	getData(){
		return new Promise((success,error)=>{
			setTimeout(function(){
				success();
			},1000)
		})
	},
	bindData(data){
		let body = this.body,
			row = this.row;

		data.map((rs,i)=>{
			let thisRow = row.clone(),
				n = i+1;
			thisRow.find('div').eq(0).text(n+'.');
			thisRow.find('div').eq(1).text(rs.phone);
			thisRow.find('div').eq(2).text(rs.score);
			body.append(thisRow);
		})
	}
};