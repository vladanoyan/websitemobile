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

