$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // Enhanced navigation functionality for both desktop and mobile
  $('.navbar-toggler').on('click touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
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

  // Ensure proper touch events for mobile
  $('.navbar-toggler').css({
    'touch-action': 'manipulation',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    'user-select': 'none'
  });
});
