(function($) {
  'use strict';

  var $toggle = $('.navbar-toggle');
  var collapse = $('.navbar-collapse')[0];

  // Toggle if navbar menu is open or closed
  $toggle.on('click', function() {
    collapse.classList.toggle('collapse');
  }, false);
})($);
