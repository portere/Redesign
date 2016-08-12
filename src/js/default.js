
// Default JavaScript Functions and Initiations

    // $(document).ready(function() {

    // Wait for whole document load
    $(window).load(function(){

// Start AOS
AOS.init({
  offset: 0,
  duration: 1000,
  easing: 'ease-in-out',
  delay: 0,

});


/* Header Animation */

(function () {
    $(window).scroll(function () {
        var Num = $(window).scrollTop() / 400;
        var Num2 = $(window).scrollTop() * .0004; // higher number for larger scaling bg
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .05;
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
        $(".bg, .bgHero").css({"transform":"scale(" + Num2mod + ")"});
    });
}.call(this));

/* Background Fixed + Cover fix. to stay relative to element and not viewport */
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.heroWrap').css('background-position', 'center ' + ((scrolledY)) + 'px');
});

/* Sticky Nav */

var navOffset = 1;
$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= navOffset) {
        $(".header, .line, .lineDown, .icons").addClass("scrolled");
    } else {
        $(".header, .line, .lineDown, .icons").removeClass("scrolled");
    }
});


// One Page Navigation

$('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 1000);
    event.preventDefault();
});

function getTargetTop(elem){
    var id = elem.attr("href");
    var offset = 60;
    return $(id).offset().top - offset;
}


$(window).scroll(function(e){
    isSelected($(window).scrollTop())
});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo){

    var threshold = 100;
    var i;

    for (i = 0; i < sections.length; i++) {
        var section = $(sections[i]);
        var target = getTargetTop(section);

        if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
            sections.removeClass("active");
            section.addClass("active");
        }

    };
}

});
// end document ready



$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 200) + 50;
    traY = ((4 * mouseY) / 200) + 50;
    console.log(traX);
    $("span.mask").css({"background-position": traX + "%" + traY + "%"});
  });
});


// Inertia Scroll

$(document).ready(function() {

    $(window).scroll(function(){
        var $st = $(window).width();
        if($st > 1000)
            windowScroll()
    });

    function windowScroll(){
        var st = $(window).scrollTop();

        if(st >= ($('.section').offset().top - $(window).height())){
            $(".img-1").css({"top": 1100 - ((st - $('.section').offset().top) * 0.3) + "px"});
            $(".img-2").css({"top": 1200 - ((st - $('.section').offset().top) * 0.4) + "px"});
            $(".img-3").css({"top": 1300 - ((st - $('.section').offset().top) * 0.2) + "px"});
            $(".img-4").css({"top": 1400 - ((st - $('.section').offset().top) * 0.6) + "px"});
            $(".img-5").css({"top": 1500 - ((st - $('.section').offset().top) * 0.25) + "px"});
            $(".img-6").css({"top": 1600 - ((st - $('.section').offset().top) * 0.6) + "px"});
        }
    }

});