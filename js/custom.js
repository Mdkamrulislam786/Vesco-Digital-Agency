//service section
$(function () {
  new WOW().init();
});

$(document).ready(function() {
  $('#Work').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
});

$(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        // breakpoint from 480 up
        480: {
          items: 2,
        },
        // breakpoint from 768 up
        768: {
          items: 3,
        }
    }
  });
});

$(function () {
  $("#customer-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
  });
});

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

$(function () {
  $("#clients-wrap").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
      },
      // breakpoint from 480 up
      480: {
        items: 3,
      },
      // breakpoint from 768 up
      768: {
        items: 4,
      }
    }
  });
});

$("body").scrollspy({
  target: "#vesco-menu",
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy("refresh");
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-nav");
      // $(".back-to-top").fadeOut()
    } else {
      $("nav").addClass("vesco-nav");
      // $(".back-to-top").fadeIn()
    }
  });
});

$(function () {
  $("#vesco-menu a").on("click touch", function () {
    $(".navbar-toggler").click();
  });
});
