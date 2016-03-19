//

var screen_height;
var screen_width;
var cal_height;
var map_size = 0.8;
var iOS = false;

//window.onload = init;
$(document).ready(init);

// jQuery for page scrolling feature - requires jQuery Easing plugin
function init(){
    // Determine if it's an iPhone
    iOS = /iPad|iPhone|iPod/.test(navigator.platform);

    screen_height = $(window).height()
    screen_width = $(window).width()

    // Get the em size
    var em_width = screen_width / parseFloat($("body").css("font-size"));
    console.log(em_width);

    // Create the carousel bindings
    // Bumping this value up because iPhone 6 is too big in landscape view
    if(em_width <= 70.0){
      console.log('MOBILE INIT');
      mobileInit();
    }

    // Bind smooth scrolling
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

}

function mobileInit(){

  window.onresize = function(event) {
    screen_width = $(window).width()
    screen_height = $(window).height();
    // Perform iPhoneHack if the device is an iPhone
    if(iOS){
      iPhoneHack(screen_height,screen_width);
    }
  };

  // Create Carousel
  $('#menu').slick({
      autoplay:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows:false
    });
}



function resizeEvents(screen_height){
  // $(document).height()
  cal_height =  0.9 * screen_height;
  $(".events-holder").height(0.9 * screen_height);
  $("#calendar").height(0.75 * screen_height);
}


// The calendar doens't size correctly on iPhone 6.  No idea why.
// At this point I've tried everything so I'm setting this specific little
// hack for iPhone 6.
function iPhoneHack(screen_height,screen_width){
  // Only do this for portrait view
  //if(screen_height > screen_width){
      $("#events-holder").width(screen_width * 0.8);
      $("#calendar").width(screen_width * 0.8);
  //}
}
