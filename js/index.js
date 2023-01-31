$(document).ready (function () {
  $('header nav .header_menu .nav_title .make_icon').on('click', function () {
    if (window.innerWidth <= 992) {
      $('header nav .small_menu').fadeToggle(500);
      $('header').toggleClass('active');
      console.log("the widow is less than 992px");
    }
  });

  $(window).scroll( function() {
    if ($('html,body').scrollTop() >= 30) {
      $('header').addClass('fixed');
      $('header').removeClass('static');
    } else {
      $('header').addClass('static');
      $('header').removeClass('fixed');
    }
  });
});