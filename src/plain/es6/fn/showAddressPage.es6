let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	{ajax,api} = require('./ajax'),
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
			title = $(res.login_title),
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
		formText.css({
			width:'120%',
			'font-size':r2p(24)+'px',
			color:'#ccc',
			transform: 'scale(0.75)',
			'-webkit-transform':'scale(0.75)'
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
			width:r2p(614)+'px',
			// height:r2p(345)+'px',
			background:'rgba(255,255,255,0.15)',
			'border-radius':r2p(10)+'px',
			'margin-bottom':r2p(300)+'px',
			border:'1px solid rgba(255,255,255,0.3)'
		});
		title.css({
			display:'block',
			width:r2p(res.login_title.width)+'px',
			height:r2p(res.login_title.height)+'px',
			margin:r2p(30)+'px 0'
		});
		row.css({
			width:r2p(450)+'px',
			height:r2p(50)+'px',
			'margin-bottom':r2p(10)+'px',
			border:'1px solid rgba(255,255,255,0.5)',
			'border-radius':r2p(10)+'px',
			overflow:'hidden'
		});
		left.css({
			width:r2p(100)+'px',
			height:r2p(50)+'px',
			'line-height':r2p(50)+'px',
			'font-size':r2p(26)+'px',
			color:'#ccc',
			'text-align':'center'
		});
		right.css({
			width:r2p(350)+'px',
			height:r2p(50)+'px',
			background:'rgba(255,255,255,0.3)',
			'overflow':'hidden',
		});
		input.css({
			width:r2p(320)+'px',
			height:r2p(50)+'px',
			background:'rgba(0,0,0,0)',
			position:'relative',
			'z-index':'100',
			color:'#fff'
		});

		form.append(title);

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

		form.append(btn);
		form.append(formText);

		main.append(form).append(homeBtn);

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
					alert('奖品邮寄信息提交成功');
					_this.goHome();
				}).catch(rs=>{
					_this.parentObj.loading.hide();
					_this.parentObj.info.show(rs);
				})
			}else{
				_this.parentObj.info.show('输入的信息不合法');
			}
		});

		$$(this.homeBtn).myclickok(function(){
			_this.goHome();

		});

	},
	checkForm(phone,name,address){
		let phoneReg = /^\d{11,11}$/,
			nameReg = /^[\u4e00-\u9fa5a-zA-Z]{1,10}$/,
			addressReg = /^[\u4e00-\u9fa5a-zA-Z0-9-_#]{1,10}$/;

		return (phoneReg.test(phone) && nameReg.test(name) && addressReg.test(address));

	},
	async submit(phone,name,address){
		let _this = this.parentObj
		let data = await ajax.send([
			api.saveMyInfo({
				name:name,
				mobiePhone:phone,
				address:address,
				token:_this.token
			})
		]);

		return data[0];
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