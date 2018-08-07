let resLoader = require('../lib/resLoader/resLoader').image,
	game = require('../lib/canvas/canvas'),
	device = require('../lib/device'),
	r2p = function(val){
		return device.rem2Px(750,val)
	};

let load = {
	scene:null,
	layer:null,
	init(scene,res){
		this.scene = scene;
		this.res = res;
		return new Promise(async success=>{
			this.createLayer();
			this.createLogo();
			this.createBtn();

			success();
		});
	},
	createLayer(){
		this.layer = new game.layer({
			width:this.scene.width,
			height:this.scene.height,
			zIndex:1
		});
	},
	createLogo(){

	},
	createBtn(){

	}

};



module.exports = load;