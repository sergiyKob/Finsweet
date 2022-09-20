$(function () {

  //--------------------------burger menu------------------------------//


  $('.burger').on('click', function () {
    $('.burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu__list a').on('click', function () {
    $('.burger,.menu__list').removeClass('active');
    $('body').removeClass('lock');
  }); 




});