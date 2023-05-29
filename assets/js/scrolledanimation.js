$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollToTop').fadeIn();
      } else {
        $('#scrollToTop').fadeOut();
      }
    });
  
    $('#scrollToTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  