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
  "If fighting is sure to result in victory, then you must fight! Sun Tzu said that, and I think he knows a little more about fighting than you do pal, because HE INVENTED IT! And then he perfected it so that no living man could best him in the ring of honour. And then he used his fight-money to buy two of every animal on earth, then he herded them all onto a boat, and then he beat the c*** out of every single one! And from that day forward, anytime a bunch of animals are together in one place, it's called a ZOO!<br>UNLESS IT'S A FARM!"	
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
