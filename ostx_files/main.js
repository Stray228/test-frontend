$(function () {
  $('.menu-icon').on('click', function () {
    $('.top-menu').toggleClass('active-menu');
    $('.center-container').toggleClass('remove-scroll');
  });

  $('.menu-search').on('touch, click', function (e) {
    e.preventDefault();
    $('body,html').animate(
      {
        scrollTop: $('#order_form').offset().top - 50,
      },
      200,
    );
  });
  $('.logo').on('touch, click', function (e) {
    e.preventDefault();
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      200,
    );
  });
});
