// Javascript to expand the categories section on the top right of the page
//Fade in element
$(document).ready(function(){
  $('.n-d-categories').mouseover(function(){
    $('.section').css('display', 'inline-block');
  });
  $('.n-d-categories').mouseout(function(){
    $('.section').css('display', 'none');
  });

// Script to make the body fade in on load

$(function(){
  $('.content').animate({"margin-top": '120px', "opacity": 1}, 600);
});

// Script for triggering the home icon hover animation
var timer = 0;
$('.n-d-homelink').mouseover(function(){
  // Creating a variable for the new position the animation moves to
  var whichImage = $(this).attr('style');
  var starting;
  if(timer === 0){
    starting = whichImage.charAt(22);
  }
  if(timer != 0) {
    starting = whichImage.charAt(25);
  }
  timer = timer+1;
  var newPosition = Math.round(Math.random() * 4);
  while(starting == newPosition){
    newPosition = Math.round(Math.random() * 4);
  }
  if(newPosition === 0) {
   if(starting != 1){
     newPosition = 1;
   }
   else {
     newPosition = 4;
   }
  }
  var newBackground = starting+"-"+newPosition+".gif";
$(this).css('background-image', 'url('+newBackground+')');
  var testing = $(this).attr('style');
});

// Script for making the nav menu appear and disappear on hover
$('.n-d-categories').mouseover(function(){
  $(this).css('background-image','none');
});
$('.n-d-categories').mouseout(function(){
  $(this).css('background-image','url(menu_background.png)');
});


// Script to make the other project nav bar fade in and out on scroll
$(window).scroll(function(){
  var pageHeight = $("body").scrollTop();
  if(pageHeight > 100) {
    $("#otherproj").fadeIn(function(){
      $(this).attr('class','other-projects-on');
    });
    $('.n-d-categories').mouseover(function(){
      $("#otherproj").fadeOut(function(){
        $(this).attr('class','other-projects');
      });
    });
    /*
    $('.n-d-categories').mouseout(function(){
      $("#otherproj").fadeIn(function(){
        $(this).attr('class','other-projects-on');
      });
    });
    */
  }
  else {
    $("#otherproj").fadeOut(function(){
      $(this).attr('class','other-projects');
    });
  }
});
});
