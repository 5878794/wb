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
			div = $('<div class="box_scc"></div>'),
			img = $(res.prize_rule_text),
			btn = $(res.home_btn);

		div.append(img).append(btn);

		img.css3({
			display:'block',
			width:r2p(res.prize_rule_text.width)+'px',
			height:r2p(res.prize_rule_text.height)+'px',
			'margin-bottom':r2p(100)+'px',
			transform:'scale(1.2)'
		});
		btn.css({
			display:'block',
			width:r2p(res.home_btn.width)+'px',
			height:r2p(res.home_btn.height)+'px'
		});
		div.css({
			position:'absolute',
			left:0,top:0,right:0,bottom:0,
			'z-index':100
		});

		this.main = div;
		this.btn = btn;

	},
	addEvent(){
		return new Promise(success=>{
			$$(this.btn).myclickok(function(){
				success();
			});
		})
	},
	removePage(){
		$$(this.btn).unbind(true);
		this.main.remove();
	}
};