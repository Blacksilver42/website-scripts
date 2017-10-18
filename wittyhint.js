var hints = [
  "Nervous energy",
  "Gravitas free zone",
  "Quietly confident",
  "Mistake Not...",
  "Mistake Not My Current State Of Joshing Gentle Peevishness For The Awesome And Terrible Majesty Of The Towering Seas Of Ire That Are Themselves The Mere Milquetoast Shallows Fringing My Vast Oceans Of Wrath", 
  "Xyzzy!",
  "Wait, what?",
  "For SCIENCE!",
  "404 Hint not found",
  "&lt;span id=\"witty-hint\"&gt;&lt;/span&gt;",
  "I see no practical use for this... Time well spent.",
  "hints[Math.floor(Math.random()*hints.length)]",
  "Making witty loading hints...",
  "Studing for semi-major axis exam...",
  "<202e>", 
  "Undefined",
  "s/game/nuclear raptor/gi"
];

function newhint(){

  $("#witty-hint").html(hints[Math.floor(Math.random()*hints.length)])
}

$(document).ready(newhint);


$(document).keypress(function(e){
	if (e.key == 'h'){
		newhint();
	}
})
