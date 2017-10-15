var hints = [
  "Blacksilver's wobsite", 
  "Nervous energy",
  "Gravitas free zone",
  "Quietly confident",
  "Mistake Not...",
  "Mistake Not My Current State Of Joshing Gentle Peevishness For The Awesome And Terrible Majesty Of The Towering Seas Of Ire That Are Themselves The Mere Milquetoast Shallows Fringing My Vast Oceans Of Wrath", 
  "Xyzzy!",
  "Wait, what?",
  "For SCIENCE!",
  "404 Hint not found",
  "I see no practical use for this... Time well spent.",
  "hints[Math.floor(Math.random()*hints.length)]",
  "Making witty loading hints...",
  "<202e>", 
  "Undefined"
];

$(document).ready(function(){
  $("#witty-hint").html("<i>"+hints[Math.floor(Math.random()*hints.length)]+"</i>")
});
