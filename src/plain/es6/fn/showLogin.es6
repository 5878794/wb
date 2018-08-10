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
	async init(parentObj){
		this.parentObj = parentObj;
		this.createPage();

		$('body').append(this.main);

		await this.addEvent();

		this.removePage();

		return true;

	},
	createPage(){
		let res = this.parentObj.res,
			main = $('<div class="box_scc"></div>'),
			btn = $(res.goBtn),
			form = $('<div class="box_scc"></div>'),
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
			width:r2p(res.goBtn.width)+'px',
			height:r2p(res.goBtn.height)+'px'
		});
		form.css3({
			width:r2p(614)+'px',
			height:r2p(345)+'px',
			background:'rgba(255,255,255,0.25)',
			'border-radius':r2p(10)+'px',
			'margin-bottom':r2p(300)+'px'
		});
		row.css({
			width:r2p(450)+'px',
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
			width:r2p(280)+'px',
			height:r2p(50)+'px',
			background:'rgba(255,255,255,0.5)',
			'border-radius':r2p(25)+'px',
			'overflow':'hidden'
		});
		input.css({
			width:r2p(200)+'px',
			height:r2p(50)+'px',
			background:'rgba(0,0,0,0)',
			position:'relative',
			'z-index':'100',
			color:'#fff'
		});

		let row1 = row.clone(),
			left1 = left.clone().text('创建账号'),
			right1 = right.clone(),
			input1 = input.clone().attr({placeholder:'请输入手机号',id:'phone',type:'tel'});
		right1.append(input1);
		row1.append(left1).append(right1);
		form.append(row1);

		let row2 = row.clone(),
			left2 = left.clone().text('昵 称'),
			right2 = right.clone(),
			input2 = input.clone().attr({placeholder:'请输入昵称',id:'nickname'});
		right2.append(input2);
		row2.append(left2).append(right2);
		form.append(row2);

		main.append(form).append(btn);

		this.main = main;
		this.btn = btn;
	},
	addEvent(){
		let _this = this;
		return new Promise(success=>{
			$$(this.btn).myclickok(async function(){
				let phone = $.trim($('#phone').val()),
					nickname = $.trim($('#nickname').val());
				if(_this.checkForm(phone,nickname)){

					_this.parentObj.loading.show('loading');
					await _this.getToken(phone,nickname).then(rs=>{
						_this.parentObj.loading.hide();
						success(rs);
					}).catch(rs=>{
						_this.parentObj.loading.hide();
						_this.parentObj.info.show(rs);
					});

				}

			});
		})
	},
	//TODO
	checkForm(phone,nickname){


		return true;
	},
	//TODO
	getToken(phone,nickname){
		return new Promise((success,error)=>{
			setTimeout(function(){
				success({token:'123123'});
				// error({a:1})
			},1000)
		})
	},
	removePage(){
		$$(this.btn).unbind(true);
		this.main.remove();
	}
};