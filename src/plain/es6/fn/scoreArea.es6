let device = require('../lib/device'),
	game = require('../lib/canvas/canvas'),
	r2p = function(val){
		val = val/100;
		return device.rem2Px(750,val)
	};



module.exports = function(scene,layer,obj){
	let x = r2p(40),
		y = r2p(40),
		width = scene.width-x,
		height = r2p(80),
		fontSize = r2p(40);


	let textArea = new game.text({
		x:x,
		y:y,
		width:width,
		height:height,
		text:'得分:0',
		fontSize:fontSize,
		color:'#fff',
		beforeRenderFn:function(){
			console.log(obj.score)
			this.text = '得分:'+obj.score;
			this.refresh();
		}
	});
	layer.append(textArea);


	return textArea;
};