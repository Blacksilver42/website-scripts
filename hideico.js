$(document).ready(function(){
	setInterval(function(){
		if($(document).width() < 650){
			$("#top img").fadeOut(1000);
		} else {
			$("#top img").fadeIn(1000);
		}

	},1000);
})
