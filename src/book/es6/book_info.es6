let viewport = require('./lib/ui/setViewport');
viewport(750);

$(document).ready(function(){
	$('#bookinfo_info_more').click(function(){
		$(this).parent().removeClass('bookinfo_info_show_zz');
		$(this).parent().find('p').css({
			height:'auto',
			overflow:'auto'
		});
		$(this).parent().css({
			'padding-bottom':0
		});
		$(this).remove();

	});
});