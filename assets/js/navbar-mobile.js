// Navbar mobile fix
$(document).ready(function() {
  // Ensure navbar toggler works on mobile
  $('.navbar-toggler').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('data-target');
    const $target = $(target);
    
    if ($target.hasClass('show')) {
      $target.removeClass('show');
      $(this).attr('aria-expanded', 'false').addClass('collapsed');
    } else {
      $target.addClass('show');
      $(this).attr('aria-expanded', 'true').removeClass('collapsed');
    }
  });
  
  // Close mobile menu when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').attr('aria-expanded', 'false').addClass('collapsed');
    }
  });
  
  // Close mobile menu when clicking on menu items
  $('.navbar-nav .nav-link').on('click', function() {
    if (window.innerWidth < 576) {
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').attr('aria-expanded', 'false').addClass('collapsed');
    }
  });
});
