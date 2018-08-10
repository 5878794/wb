let app = require("./app"),
	scene = require("./scene"),
	layer = require("./layer"),
	sprite = require("./spriteAnimate"),
	text = require("./textAnimate"),
	group = require("./spriteGroup"),
	device = require('../device'),
	param = (device.passiveSupported)? {passive:false} : false,
	//阻止窗口滚动
	preventScroll = ()=> {
		// window.addEventListener(device.START_EV, (e) => {
		// 	e.preventDefault();
		// }, param);
		window.addEventListener(device.MOVE_EV, (e) => {
			e.preventDefault();
		}, param);
	};



module.exports = {
	app,
	scene,
	layer,
	sprite,
	text,
	group,
	preventScroll
};


