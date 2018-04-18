

$.fn.randomShowSpan = function(){
	let spans = $(this).find('span'),
		ll = spans.length,
		time = 0,
		obj = [];

	//生成数组
	for(let i=0,l=ll;i<l;i++){
		obj.push(i);
	}


	for(let i=0,l=ll;i<l;i++){
		let r = parseInt(Math.random()*ll);
		r = obj.splice(r,1);
		ll--;

		let span = spans.eq(r);

		setTimeout(function(){
			span.cssAnimate({
				opacity:1
			},500)
		},time);

		time += 30;
	}


};


module.exports = null;