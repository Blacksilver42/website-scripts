/* generic functions for mobile versions of pages */

var menu = false;

function togglenav(){
  if(menu){
    $("#m-nav").show();
    menu = true;
  } else {
    $("#m-nav").hide()
    menu = false;
  }
}

$(document).ready(function(){
  $(".hamburger").click(togglenav);
})
