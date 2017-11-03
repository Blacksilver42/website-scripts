/* generic functions for mobile versions of pages */

var menu = false;

function togglenav(){
  if(!menu){
    $("#nav").show();
    menu = true;
  } else {
    $("#nav").hide()
    menu = false;
  }
}

$(document).ready(function(){
  $(".hamburger").click(togglenav);
})
