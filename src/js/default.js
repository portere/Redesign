
// Default JavaScript Functions and Initiations

// $(document).ready(function() {

// $(window).on('focus', function() {


// Wait for whole document load
$(window).load(function(){

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 0);



    // AOS.init({
    //   offset: 200,
    //   duration: 600,
    //   easing: 'ease-in-sine',
    //   delay: 100,
    // });



    /* Nav */

    var $li = $('.headerNav > ul > li'),
    $navBar = $('.navBar');
    $li.on('mouseenter', function(){
        var i = $(this).index(),
        $this = $(this),
        liLeft = $li.width() * i;
        $navBar.stop().animate({ left: liLeft });
        // $navBar.stop().animate( { left: liLeft }, { duration: 'slow', easing: 'easeOutBack' });
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

    $(document).ready(function(){
        $(".inR, .inL, .inF").addClass("activate");
        $(".lineDiag").addClass("activate2");
    });



});
// end document ready



/*===============================
=            Masking            =
===============================*/

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
        $("h1.mask, .bar").css({"background-position": traX + "%" + traY + "%"});
    });
});

/*=====  End of Masking  ======*/




$(document).ready(function() {

    $(window).scroll(function(){
        var $st = $(window).width();
        if($st > 1000)
            windowScroll()
    });

    function windowScroll(){
        var st = $(window).scrollTop();

        if(st >= ($('.section').offset().top - $(window).height())){
            // $(".test4").css({"top": 270 - ((st - $('body').offset().top) * 0.5) + "px"});

            $(".img-1").css({"top": 1100 - ((st - $('body').offset().top) * 0.2) + "px"});
            $(".img-2").css({"top": 1200 - ((st - $('body').offset().top) * 0.3) + "px"});
            $(".img-3").css({"top": 1300 - ((st - $('body').offset().top) * 0.45) + "px"});
            $(".img-4").css({"top": 1400 - ((st - $('body').offset().top) * 0.35) + "px"});
            $(".img-5").css({"top": 1500 - ((st - $('body').offset().top) * 0.4) + "px"});
            $(".img-6").css({"top": 1400 - ((st - $('body').offset().top) * 0.22) + "px"});
        }
    }
});






/*=================================
=            Tag Cloud            =
=================================*/

if(!$('#myCanvas').tagcanvas({
  textColour: '#333',
  activeCursor: 'default',
  outlineColour: '#666',
  outlineMethod: 'none',
  reverse: true,
  shape: "",
  lock: "y",
  depth: 0.8,
  initial: [-0.100, 0.010],
  maxSpeed: 0.05,
  textFont: null,
  textColour: null,
  weightMode:'both',
  weight: true,
  weightGradient: {
  0:    '#333', // red
  // 0.33: '#ff0', // yellow
  // 0.66: '#0f0', // green
  1:    '#ddd'  // blue
}
},'tags')) {
  // something went wrong, hide the canvas container
  $('#myCanvasContainer').hide();
}

/*=====  End of Tag Cloud  ======*/




// Add .scrolled to body after 1px of scroll

$(window).scroll(function(){
    var navOffset = 1;
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= navOffset) {
        $(".header, .line, .lineDown, .socialIcons, .titleDate, body").addClass("scrolled");
        $(".scrollFade").addClass("activateFade");
    } else {
        $(".header, .line, .lineDown, .socialIcons, .titleDate, body").removeClass("scrolled");
        $(".scrollFadeOut").removeClass("activateFadeOut");
    }
});




/*========================================================
=            Animate on Scroll enter viewport            =
========================================================*/
$(document).ready(function() {
    var winHeight = $(window).height(),
// Distance from top to remove class, a -1 toggles it after it's offscreen
topLimit = winHeight * -1,
// Distance from Bottom to add class,
bottomLimit = winHeight * 1.5;
// These distances are relative to the bottom of an element

$(window).on('scroll', function() {
    $('.scroll-animate').each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        if (thisTop >= topLimit && (thisTop + $(this).height()) <= bottomLimit) {
            $(this).addClass('intoPosition')
        }
        else{
            $(this).removeClass('intoPosition')
        }
    });
});
});


/*=====  End of Animate on Scroll enter viewport  ======*/


/*============================
=            GSAP            =
============================*/

// var $box = $('.tweenBox'),
//     mainTl = new TimelineMax({repeat: -1, repeatDelay: 0});

// $box.each(function(index, element){

//     var $boxSmall = $(this).find('.tweenBoxSmall'),
//       $box = $(this),
//       delay = getRandom(1, 1.7),
//       boxTl = new TimelineMax({delay: delay});

//     // Add tweens to the box timeline
//     boxTl
//     .from($box, 0.2, {autoAlpha: 0, y: '-=80', ease:Bounce.easeOut})
//         .fromTo($boxSmall, 1, {y:'-=80'}, {y: '0', ease:Bounce.easeOut})
//     .to($box, .3, {rotation: '45',ease:Power4.easeInOut})
//     .to($boxSmall, .3, {x: '0', ease:Bounce.easeOut}, '-=0.2')
//     .to($box, .3, {rotation: '-45',ease:Power4.easeInOut})
//     .to($boxSmall, .3, {x: '-100%', ease:Bounce.easeOut}, '-=0.2')
//     .to($boxSmall, 0.3, {scale: 2, transformOrigin: 'bottom left', autoAlpha: 0.5, ease:Power0.easeNone})
//     .to($box, 0.5, {rotation: 720, autoAlpha: 0, scale: 2.3,ease:Power4.easeIn}, '+=0.2');

//     mainTl.add(boxTl, '0');

// });

// function getRandom(min, max) {
//   return min + Math.random() * (max - min);
// }

/*=====  End of GSAP  ======*/



/*======================================
=     Inertia Scroll uses GSAP         =
======================================*/

// $(function(){
//     var $window = $(window);        //Window object
//     var scrollTime = 2;           //Scroll time
//     var scrollDistance = 500;       //Distance. Use smaller value for shorter scroll and greater value for longer scroll
//     $window.on("mousewheel DOMMouseScroll", function(event){
//         event.preventDefault();
//         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//         var scrollTop = $window.scrollTop();
//         var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//         TweenMax.to($window, scrollTime, {
//             scrollTo : { y: finalScroll, autoKill:true },
//             ease: Expo.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
//             autoKill: true,
//             overwrite: 5
//         });
//     });
// });

/*=====  End of Inertia Scroll  ======*/
