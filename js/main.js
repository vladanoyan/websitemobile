/*SCROLL PAGE*/
var $root = $('html, body'); 
var speed = 400; //animation time in ms
var animation = 'linear'; //animation style 'linear'

//main function
$('.a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, speed, animation);
    return false;
});
/*SCROLL PAGE*/

$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 200);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});