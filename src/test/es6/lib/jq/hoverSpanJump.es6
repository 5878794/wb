//dom在hover后，里面的span顺序不停的调换效果

// $('a').hoverSpanJump();

let getN = function(length){
	return parseInt(Math.random()*length);
};


$.fn.hoverSpanJump = function(){
	let winSize = (DATA && DATA.winSize)? DATA.winSize : 800;

	$(this).each(function(){
		let text = $(this).text();
		$(this).data({text:text});
		let intervalFn = null;

		$(this).hover(function(){
			let l = $(this).data('text').length,
				dom = $(this),
				span = dom.find('span');

			intervalFn = setInterval(function(){
				if(window.innerWidth>winSize){
					dom.prepend(span.eq(getN(l)));
				}
			},50)

		},function(){
			clearInterval(intervalFn);
			let span = $(this).find('span');
			if(window.innerWidth>winSize){
				for(let i=0,l=text.length;i<l;i++){
					let val = (text[i] == '')? '$nbsp;' : text[i];
					span.eq(i).html(val);
				}
			}
		})
	});
};