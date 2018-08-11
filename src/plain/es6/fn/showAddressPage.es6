let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$');

require('../lib/jq/extend');


module.exports = {
	parentObj:null,
	main:null,
	btn:null,
	homeBtn:null,
	init(parentObj){
		this.parentObj = parentObj;
		this.createPage();

		$('body').append(this.main);

		this.addEvent();



	},
	createPage(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			btn = $(res.addressSubmitBtn),
			homeBtn = $(res.home_btn),
			form = $('<div class="box_scc"></div>'),
			formText = $('<div>请填写真实的姓名、电话、地址，核实信息后会尽快寄出奖品。</div>'),
			row = $('<div class="box_hcc"></div>'),
			left = $('<div></div>'),
			right = $('<div class="box_hcc"></div>'),
			input = $('<input type="text">');

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		btn.css({
			display:'block',
			width:r2p(res.addressSubmitBtn.width)+'px',
			height:r2p(res.addressSubmitBtn.height)+'px',
			'margin-bottom':r2p(135)+'px'
		});
		homeBtn.css({
			display:'block',
			width:r2p(res.home_btn.width)+'px',
			height:r2p(res.home_btn.height)+'px'
		});
		form.css3({
			position:'relative',
			width:r2p(614)+'px',
			height:r2p(345)+'px',
			background:'rgba(255,255,255,0.25)',
			'border-radius':r2p(10)+'px',
			'margin-bottom':r2p(70)+'px'
		});
		formText.css({
			position:'absolute',
			left:r2p(-20)+'px',bottom:r2p(32)+'px',
			width:'120%',
			'font-size':r2p(24)+'px',
			color:'#fff',
			transform: 'scale(0.75)',
			'-webkit-transform':'scale(0.75)'
		});
		row.css({
			width:'100%',
			height:r2p(50)+'px',
			'margin-bottom':r2p(10)+'px'
		});
		left.css({
			width:r2p(160)+'px',
			height:r2p(50)+'px',
			'line-height':r2p(50)+'px',
			'font-size':r2p(34)+'px',
			color:'#fff',
			'text-align':'center'
		});
		right.css({
			width:r2p(360)+'px',
			height:r2p(50)+'px',
			background:'rgba(255,255,255,0.5)',
			'border-radius':r2p(25)+'px',
			'overflow':'hidden'
		});
		input.css({
			width:r2p(300)+'px',
			height:r2p(50)+'px',
			background:'rgba(0,0,0,0)',
			position:'relative',
			'z-index':'100',
			color:'#fff'
		});

		let row1 = row.clone(),
			left1 = left.clone().text('姓名'),
			right1 = right.clone(),
			input1 = input.clone().attr({placeholder:'请输入姓名',id:'name',type:'text'});
		right1.append(input1);
		row1.append(left1).append(right1);
		form.append(row1);

		let row2 = row.clone(),
			left2 = left.clone().text('手机'),
			right2 = right.clone(),
			input2 = input.clone().attr({placeholder:'请输入手机号码',id:'phone'});
		right2.append(input2);
		row2.append(left2).append(right2);
		form.append(row2);

		let row3 = row.clone(),
			left3 = left.clone().text('地址'),
			right3 = right.clone(),
			input3 = input.clone().attr({placeholder:'请输入收件地址',id:'address'});
		right3.append(input3);
		row3.append(left3).append(right3);
		form.append(row3);

		form.append(formText);

		main.append(form).append(btn).append(homeBtn);

		this.main = main;
		this.btn = btn;
		this.homeBtn = homeBtn;
	},
	addEvent(){
		let _this = this;
		$$(this.btn).myclickok(async function(){
			let phone = $.trim($('#phone').val()),
				name = $.trim($('#name').val()),
				address = $.trim($('#address').val());

			if(_this.checkForm(phone,name,address)){

				_this.parentObj.loading.show('loading');
				_this.submit(phone,name,address).then(rs=>{
					_this.parentObj.loading.hide();
					//提交成功
					alert('数据提交成功');
					_this.goHome();
				}).catch(rs=>{
					_this.parentObj.loading.hide();
					_this.parentObj.info.show(rs);
				})
			}
		});

		$$(this.homeBtn).myclickok(function(){
			_this.goHome();

		});

	},
	//TODO
	checkForm(phone,name,address){


		return true;
	},
	//TODO
	submit(phone,name,address){
		return new Promise((success,error)=>{
			setTimeout(function(){
				success();
				// error({a:1})
			},1000)
		})
	},
	goHome(){
		this.removePage();
		this.parentObj.game.show(this.parentObj.loadScene);
	},

	removePage(){
		$$(this.btn).unbind(true);
		$$(this.homeBtn).unbind(true);
		this.main.remove();
	}
};