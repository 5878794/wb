


$.fn.text2Span = function(){
	let list = $(this).children();
	list.each(function(){
		let text = $(this).text().split('');
		$(this).text('');
		text.map(t=>{
			t = (t)? t : '$nbsp;';
			$(this).append('<span style="opacity: 0;">'+t+'</span>');
		});
	});
};

module.exports = null;