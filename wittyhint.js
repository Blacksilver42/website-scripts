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
  "Undefined"
];

$(document).ready(function(){
  $("#witty-hint").html("<i>"+hints[Math.floor(Math.random()*hints.length)]+"</i>")
});
