let device = require('../lib/device'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	},
	$$ = require('../lib/event/$$'),
	{ajax,api} = require('./ajax'),
	localData = require('../lib/h5/localData');

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

		this.getUserInfoFromCatch();

		this.addEvent();


	},
	createPage(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			title = $(res.login_title),
			btn = $(res.goBtn),
			form = $('<div class="box_scc"></div>'),
			row = $('<div class="box_hcc"></div>'),
			left = $('<div></div>'),
			right = $('<div class="box_hcc boxflex1"></div>'),
			homeBtn = $(res.home_btn),
			input = $('<input type="text">');

		main.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});
		homeBtn.css({
			display:'block',
			width:r2p(res.home_btn.width)+'px',
			height:r2p(res.home_btn.height)+'px'
		});
		btn.css({
			display:'block',
			width:r2p(res.goBtn.width)+'px',
			height:r2p(res.goBtn.height)+'px',
			'margin-top':r2p(50)+'px',
			'margin-bottom':r2p(30)+'px'
		});
		form.css3({
			width:r2p(490)+'px',
			height:r2p(485)+'px',
			background:'rgba(255,255,255,0.15)',
			'border-radius':r2p(10)+'px',
			'margin-bottom':r2p(200)+'px',
			border:'1px solid rgba(255,255,255,0.3)'
		});
		title.css({
			display:'block',
			width:r2p(res.login_title.width)+'px',
			height:r2p(res.login_title.height)+'px',
			margin:r2p(30)+'px 0'
		});
		row.css({
			width:r2p(370)+'px',
			height:r2p(50)+'px',
			'margin-top':r2p(30)+'px',
			border:'1px solid rgba(255,255,255,0.5)',
			'border-radius':r2p(10)+'px',
			overflow:'hidden'
		});
		left.css({
			width:r2p(80)+'px',
			height:r2p(50)+'px',
			'line-height':r2p(50)+'px',
			'font-size':r2p(26)+'px',
			color:'#ccc',
			'text-align':'center'
		});
		right.css({
			height:r2p(50)+'px',
			background:'rgba(255,255,255,0.3)',
			'overflow':'hidden',
		});
		input.css({
			margin:'a auto',
			display:'block',
			width:'94%',
			height:r2p(50)+'px',
			background:'rgba(0,0,0,0)',
			position:'relative',
			'z-index':'100',
			color:'#fff'
		});

		form.append(title);

		let row1 = row.clone(),
			left1 = left.clone().text('账号'),
			right1 = right.clone(),
			input1 = input.clone().attr({placeholder:'请输入手机号',id:'phone',type:'tel'});
		right1.append(input1);
		row1.append(left1).append(right1);
		form.append(row1);

		let row2 = row.clone(),
			left2 = left.clone().text('昵称'),
			right2 = right.clone(),
			input2 = input.clone().attr({placeholder:'请输入昵称',id:'nickname'});
		right2.append(input2);
		row2.append(left2).append(right2);
		form.append(row2);

		form.append(btn);
		main.append(form).append(homeBtn);

		this.main = main;
		this.btn = btn;
		this.homeBtn = homeBtn;
	},
	addEvent(){
		let _this = this;
		$$(this.btn).myclickok(function(){
			let phone = $.trim($('#phone').val()),
				nickname = $.trim($('#nickname').val());
			if(_this.checkForm(phone,nickname)){

				_this.parentObj.loading.show('loading');
				_this.getToken(phone,nickname).then(rs=>{
					_this.parentObj.loading.hide();
					_this.parentObj.token = rs.token;
					_this.parentObj.phone = phone;
					_this.parentObj.nickname = nickname;
					_this.saveUserInfoToCatch(phone,nickname);
					_this.removePage();
					_this.parentObj.firstPlay();
				}).catch(rs=>{
					_this.parentObj.loading.hide();
					_this.parentObj.info.show(rs);
				});

			}else{
				_this.parentObj.info.show('请输入正确的信息');
			}

		});

		$$(this.homeBtn).myclickok(function(){
			_this.removePage();
			_this.parentObj.game.show(_this.parentObj.loadScene);
		});
	},
	checkForm(phone,nickname){
		let phoneReg = /^\d{11,11}$/,
			nicknameReg = /^[\u4e00-\u9fa5a-zA-Z0-9_]{1,10}$/;

		return (phoneReg.test(phone) && (nicknameReg.test(nickname) || nickname==''));
	},
	async getToken(phone,nickname){
		let data = await ajax.send([
			api.getToken({
				phoneNo:phone,
				nikeName:nickname
			})
		]);

		return data[0];
	},
	removePage(){
		$$(this.homeBtn).unbind(true);
		$$(this.btn).unbind(true);
		this.main.remove();
	},
	getUserInfoFromCatch(){
		let phone = localData.getItem('phone'),
			nickname = localData.getItem('nickname');

		if(phone){
			$('#phone').val(phone);
		}
		if(nickname){
			$('#nickname').val(nickname);
		}
	},
	saveUserInfoToCatch(phone,nickname){
		localData.setItem('phone',phone);
		localData.setItem('nickname',nickname);
	}
};