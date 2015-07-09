(function($, window) {
  'use strict';

  var $toggle = $('.navbar-toggle');
  var collapse = $('.navbar-collapse')[0];

  // Toggle if navbar menu is open or closed
  function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
  }

  $toggle.on('click', toggleMenu, false);
})($, window);


