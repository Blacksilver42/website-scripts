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
  "<p id=\"witty-hint\"></p>",
  "I see no practical use for this... Time well spent.",
  "hints[Math.floor(Math.random()*hints.length)]",
  "Making witty loading hints...",
  "Studing for semi-major axis exam..."
  "<202e>", 
  "Undefined",
  "If fighting is sure to result in victory, then you must fight! Sun Tzu said that, and I think he knows a little more about fighting than you do pal, because he invented it! and then he perfected it so that no living man could best him in the ring of honour. And then he used his fight-money to buy two of every animal on earth, then he herded them all onto a boat, and then he beat the c*** out of every single one. And from that day forward, anytime a bunch of animals are together in one place, it's called a ZOO!<br>UNLESS IT'S A FARM!"
];

$(document).ready(function(){
  $("#witty-hint").html("<i>"+hints[Math.floor(Math.random()*hints.length)]+"</i>")
});
