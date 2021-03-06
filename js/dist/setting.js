"use strict";

jQuery(document).ready(function ($) {
  var headerHeight = $('#main-header').outerHeight();
  var stickyHeight = $('#main-sticky').outerHeight(); // Header bar - Positioning

  $('.main-content').css({
    'margin-top': headerHeight
  });
  $('#main-footer').css({
    'margin-bottom': stickyHeight
  }); // Everything with class '.h-line' will be rendered in same height

  $('html').imagesLoaded(function () {
    $('.h-line').matchHeight();
  }); // Smooth scroll - Add class = "smooth-scroll" to <a>

  $('a.smooth-scroll[href^="#"]').click(function (e) {
    e.preventDefault();
    var speed = 400;
    var href = jQuery(this).attr('href');
    var target = jQuery(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body, html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  }); // Back to top button - Set display on scroll amount

  var scrollWindows = 200;
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > scrollWindows) {
      $('#back-to-top').addClass('display');
    } else {
      $('#back-to-top').removeClass('display');
    }
  }); // Show main visual modal

  var mainVisualModal = $('#modal-main-visual');
  $('.main-visual-action .toggle-modal-on').on('click', function () {
    mainVisualModal.fadeIn(300);
    $('body, html').css({
      'overflow': 'hidden'
    });
  });
  $('#modal-main-visual .toggle-modal-off').on('click', function () {
    mainVisualModal.fadeOut(300);
    $('body, html').css({
      'overflow': 'auto'
    });
  }); // Menu SP button

  $('#menu-sp-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-clicked');
    var menuBar = $('#main-header nav');
    menuBar.slideToggle(200);
  }); // Dropdown on menu

  $('.nav-item.dropdown .nav-link').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle(200);
  });
});
//# sourceMappingURL=setting.js.map
