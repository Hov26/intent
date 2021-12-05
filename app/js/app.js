$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $(".header").addClass("with-bg");
    } else {
      $(".header").removeClass("with-bg");
    }
  });

  //bondo
  $(".job-card").click(function () {
    if ($(this).hasClass("opened")) {
      $(this).removeClass("opened");
    } else {
      $(this).addClass("opened");
    }
  });



  if ($(window).scrollTop() > 1) {
    $(".header").addClass("with-bg");
  } else {
    $(".header").removeClass("with-bg");
  }

  $(".home-carousel").owlCarousel({
    dots: true,
    nav: false,
    navElement: "div",
    items: 3,
    margin: 0,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        margin: 24,
      },
      700: {
        items: 2,
        margin: 30,
      },
      1000: {
        items: 3,
        margin: 60,
      },
      1400: {
        margin: 128,
      },
      1920: {
        margin: 160,
      },
    },
  });

  var arrows = $(".owl-nav");

  $(".for-arrows").append(arrows);

  $(".hero").mousemove(function (event) {
    var moveX = ($(window).width() / 2 - event.pageX) * 0.01;
    var moveY = ($(window).height() / 2 - event.pageY) * 0.01;
    $(".hero-bg").css("margin-left", moveX + "px");
    $(".hero-bg").css("margin-top", moveY + "px");
  });

  // get menu dropdown height
  var dropdownHeight = $("ul.dropdown").outerHeight();
  $("ul.dropdown").css("bottom", "-" + dropdownHeight + "px");

  $(window).resize(function () {
    $("ul.dropdown").css("bottom", "-" + dropdownHeight + "px");
  });

  // Open mobile menu
  $(".burger").click(function () {
    $(".nav").addClass("opened");
    $(".burger").addClass("hide");
    $(".close-menu-btn").removeClass("hide");
    $("body").addClass("scroll-off");
  });

  // Close mobile menu
  $(".close-menu-btn").click(function () {
    $(".nav").removeClass("opened");
    $(".burger").removeClass("hide");
    $(".close-menu-btn").addClass("hide");
    $("body").removeClass("scroll-off");
  });

  if ($(window).width() < 992) {
    $(".dropdown-title").click(function () {
      if ($(".dropdown").hasClass("opened")) {
        $(".dropdown").removeClass("opened");
      } else {
        $(".dropdown").addClass("opened");
      }
    });
  }
});
