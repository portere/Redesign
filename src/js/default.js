
// Default JavaScript Functions and Initiations

    $(document).ready(function() {

// Wait for whole document load
// $(window).load(function(){

  setTimeout(function() {
    $('body').addClass('loaded');
  }, 3000);



  //
  // Nav
  //

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

/* Background Fixed + Cover fix. to stay relative to element and not viewport */
// $(window).scroll(function() {
//     var scrolledY = $(window).scrollTop();
//     $('.heroWrap').css('background-position', 'center ' + ((scrolledY)) + 'px');
// });



$(document).ready(function(){
    $(".inR, .inL, .inF").addClass("activate");
    $(".lineDiag").addClass("activate2");
});

// One Page Navigation

// $('a[href^="#"]').click(function(event) {
//     var id = $(this).attr("href");
//     var target = $(id).offset().top;
//     $('html, body').animate({scrollTop:target}, 2000);
//     event.preventDefault();
// });

// function getTargetTop(elem){
//     var id = elem.attr("href");
//     var offset = 60;
//     return $(id).offset().top - offset;
// }


// $(window).scroll(function(e){
//     isSelected($(window).scrollTop())
// });

// var sections = $('a[href^="#"]');

// function isSelected(scrolledTo){

//     var threshold = 100;
//     var i;

//     for (i = 0; i < sections.length; i++) {
//         var section = $(sections[i]);
//         var target = getTargetTop(section);

//         if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
//             sections.removeClass("active");
//             section.addClass("active");
//         }

//     };
// }


});  // end document ready



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




/*======================================
=            Inertia Scroll            =
======================================*/

jQuery(function($) {

"use strict";

var win = $(window)
    , target = $('body')
    , wrapper = target.find('article')
    , easing = "cubic-bezier(0.19, 1, 0.22, 1)" //css easing
    , duration = "1.2s" //duration ms(millisecond) or s(second)
    , top = 0
    , kineticScroll = {
        _init: function() {
            if( wrapper.length == 1 ) {
                target.height(wrapper.height());
                wrapper.css({
                    transition: 'transform ' + duration + ' ' + easing,
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    padding: '0',
                    zIndex: '-1'
                });
                win.on({
                    scroll: function () {
                        kineticScroll._scroll();
                    }
                    , resize: function() {
                        target.height(wrapper.outerHeight());
                    }
                });
                kineticScroll._scroll();
            }
        },
        _scroll: function() {
            top = win.scrollTop();
            wrapper.css('transform', 'translateY(-' + top + 'px)');
        }
    };
if (typeof window.ontouchstart == 'undefined') {
    kineticScroll._init();
}
});

/*=====  End of Inertia Scroll  ======*/




/* Sticky Nav */

var navOffset = 1;
$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= navOffset) {
        $(".header, .line, .lineDown, .socialIcons, .titleDate, body").addClass("scrolled");
        $(".scrollFade").addClass("activateFade");
    } else {
        $(".header, .line, .lineDown, .socialIcons, .titleDate, body").removeClass("scrolled");
        $(".scrollFadeOut").removeClass("activateFadeOut");
    }
});




/**
 * jQuery Momentum Scroll
 * This will transform the native scroll of the browser into a very smooth scroll with momentum effect
 * https://github.com/iahnn/jQuery-Momentum-Scroll
 * licensed under MIT
 * version 1.0.2
 */
// jQuery(function($) {

//     "use strict";

//     var win = $(window)
//         , target = $('body')
//         , wrapper = target.find('> div')
//         , easing = "cubic-bezier(0.19, 1, 0.22, 1)" //css easing
//         , duration = "1.1s" //duration ms(millisecond) or s(second)
//         , top = 0
//         , resizeTimeout
//         , jmScroll = {
//             _init: function() {
//                 if( wrapper.length == 1 ) {
//                     target.css({
//                         margin: '0',
//                         padding: '0',
//                         width: '100%',
//                         height: wrapper.height() + 'px'
//                     });

//                     wrapper.css({
//                         transition: 'transform ' + duration + ' ' + easing,
//                         position: 'fixed',
//                         top: '0',
//                         left: '0',
//                         width: '100%',
//                         padding: '0',
//                         zIndex: '-1',
//                         display: 'block',
//                         backfaceVisibility: 'hidden'
//                     });

//                     jmScroll._reFlow(function() {
//                         jmScroll._scroll();
//                     });
//                 }
//             },

//             _scroll: function() {
//                 top = win.scrollTop();
//                 wrapper.css('transform', 'translateY(-' + top + 'px)');
//             },

//             _reFlow: function(callback) {
//                 clearTimeout(resizeTimeout);
//                 resizeTimeout = setTimeout(function() {
//                     target.height(wrapper.height());

//                     var getType = {};
//                     var isCallback = callback && getType.toString.call(callback) === '[object Function]';

//                     if(isCallback) {
//                         callback();
//                     }
//                 }, 200);
//             }
//         };

//     if (typeof window.ontouchstart == 'undefined') {
//         win.on({
//             scroll: function () {
//                 jmScroll._scroll();
//             }
//             , resize: function() {
//                 jmScroll._reFlow();
//             }
//             , load: function() {
//                 jmScroll._init();
//             }
//         });
//     }
// });


