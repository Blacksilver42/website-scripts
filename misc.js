$(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("Mobile");
		$("b.mobile-small").css('font-weight', 'normal');
		$("#top img").hide();
	} else {
		console.log("Desktop");
	}
});

$(document).keypress(function(e){
	if(e.key == 'e')
		window.open("/THESYSTEM", target="_self");
});
