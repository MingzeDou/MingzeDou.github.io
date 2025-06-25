// Enhanced mobile navbar fix
$(document).ready(function() {
  console.log('Mobile navbar script loaded');
  
  // Force navbar toggler to work on mobile
  $('.navbar-toggler').off('click').on('click touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Navbar toggler clicked');
    
    const $toggler = $(this);
    const target = $toggler.attr('data-target') || '#navbarNav';
    const $collapse = $(target);
    
    // Toggle the collapse
    if ($collapse.hasClass('show')) {
      $collapse.removeClass('show').addClass('collapse');
      $toggler.addClass('collapsed').attr('aria-expanded', 'false');
    } else {
      $collapse.addClass('show').removeClass('collapse');
      $toggler.removeClass('collapsed').attr('aria-expanded', 'true');
    }
  });
  
  // Close menu when clicking menu items on mobile
  $('.navbar-nav .nav-link').on('click', function() {
    if ($(window).width() < 768) {
      const $collapse = $('.navbar-collapse');
      const $toggler = $('.navbar-toggler');
      
      $collapse.removeClass('show').addClass('collapse');
      $toggler.addClass('collapsed').attr('aria-expanded', 'false');
    }
  });
  
  // Close menu when clicking outside
  $(document).on('click touchstart', function(e) {
    if (!$(e.target).closest('.navbar').length) {
      const $collapse = $('.navbar-collapse');
      const $toggler = $('.navbar-toggler');
      
      if ($collapse.hasClass('show')) {
        $collapse.removeClass('show').addClass('collapse');
        $toggler.addClass('collapsed').attr('aria-expanded', 'false');
      }
    }
  });
  
  // Ensure proper touch events
  $('.navbar-toggler').css({
    'touch-action': 'manipulation',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    'user-select': 'none'
  });
});
