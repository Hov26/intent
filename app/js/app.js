$(document).ready(function () {

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 10) {
  //     $(".header").addClass("with-bg");
  //   } else {
  //     $(".header").removeClass("with-bg");
  //   }
  // });

  // if ($(window).scrollTop() > 1) {
  //   $(".header").addClass("with-bg");
  // } else {
  //   $(".header").removeClass("with-bg");
  // }

  $('.hero').mousemove(function(event){
    var moveX = (($(window).width() / 2) - event.pageX) * 0.01;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.01;
    $('.hero-bg').css('margin-left', moveX + 'px');
    $('.hero-bg').css('margin-top', moveY + 'px');
  });

  // get menu dropdown height
  var dropdownHeight = $('ul.dropdown').outerHeight()
  $('ul.dropdown').css('bottom', ('-' + dropdownHeight + 'px'))

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

});
