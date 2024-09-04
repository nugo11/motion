(function (_0x2e79x1) {
  ("use strict");
  function _0x2e79x2() {
    var _0x2e79x3 = _0x2e79x1(".navigation-holder");
    var _0x2e79x4 = _0x2e79x1(".navbar-header .open-btn");
    var _0x2e79x5 = _0x2e79x1(".navigation-holder .close-navbar");
    var _0x2e79x6 = _0x2e79x1(".page-wrapper");

    _0x2e79x4.on("click", function () {
      if (!_0x2e79x3.hasClass("slideInn")) {
        _0x2e79x3.addClass("slideInn");
        _0x2e79x6.addClass("body-overlay");
      }
      return false;
    });

    function closeNavbar() {
      if (_0x2e79x3.hasClass("slideInn")) {
        _0x2e79x3.removeClass("slideInn");
        _0x2e79x6.removeClass("body-overlay");
      }
    }

    _0x2e79x5.on("click", function () {
      closeNavbar();
      return false;
    });

    _0x2e79x3.find("li").on("click", function (event) {
      closeNavbar();
      event.stopPropagation();
    });

    _0x2e79x3.find("a").on("click", function () {
      closeNavbar();
    });
  }

  _0x2e79x2();
  function _0x2e79x7() {
    var _0x2e79x8 = window.innerWidth;
    var _0x2e79x9 = _0x2e79x1("#navbar > ul");
    if (_0x2e79x8 <= 991) {
      _0x2e79x9.addClass("small-nav");
    } else {
      _0x2e79x9.removeClass("small-nav");
    }
  }
  _0x2e79x7();
  function _0x2e79xa() {
    var _0x2e79x8 = window.innerWidth;
    var _0x2e79x9 = _0x2e79x1(".navigation-holder");
    var _0x2e79xb = _0x2e79x1(".navigation-holder > .small-nav");
    var _0x2e79xc = _0x2e79xb.find(".sub-menu");
    var _0x2e79xd = _0x2e79xb.find(".mega-menu");
    var _0x2e79xe = _0x2e79xb.find(".menu-item-has-children > a");
    if (_0x2e79x8 <= 991) {
      _0x2e79xc.hide();
      _0x2e79xd.hide();
      _0x2e79xe.on("click", function (_0x2e79xf) {
        var _0x2e79x10 = _0x2e79x1(this);
        _0x2e79x10.siblings().slideToggle();
        _0x2e79xf.preventDefault();
        _0x2e79xf.stopImmediatePropagation();
      });
    } else {
      if (_0x2e79x8 > 991) {
        _0x2e79x9.find(".sub-menu").show();
        _0x2e79x9.find(".mega-menu").show();
      }
    }
  }
  _0x2e79xa();
  function _0x2e79x11() {
    if (_0x2e79x1(".parallax").length) {
      _0x2e79x1(".parallax").each(function () {
        var _0x2e79x12 = _0x2e79x1(this).position().top;
        var _0x2e79x13 = _0x2e79x12 - _0x2e79x1(window).scrollTop();
        var _0x2e79x14 = -(_0x2e79x13 / 5);
        var _0x2e79x15 = _0x2e79x14 + "px";
        var _0x2e79x16 = _0x2e79x1(this).data("bg-image");
        _0x2e79x1(this).css({
          backgroundImage: "url(" + _0x2e79x16 + ")",
          backgroundPosition: "50%" + _0x2e79x15,
          backgroundSize: "cover",
        });
      });
    }
  }
  var _0x2e79x17 = [];
  jQuery(".swiper-slide").each(function (_0x2e79x18) {
    _0x2e79x17.push(jQuery(this).find(".slide-inner").attr("data-text"));
  });
  var _0x2e79x19 = 0.5;
  var _0x2e79x1a = {
    loop: true,
    speed: 1e3,
    parallax: true,
    autoplay: { delay: 6500, disableOnInteraction: false },
    watchSlidesProgress: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      progress: function () {
        var _0x2e79x1b = this;
        for (
          var _0x2e79x1c = 0;
          _0x2e79x1c < _0x2e79x1b.slides.length;
          _0x2e79x1c++
        ) {
          var _0x2e79x1d = _0x2e79x1b.slides[_0x2e79x1c].progress;
          var _0x2e79x1e = _0x2e79x1b.width * _0x2e79x19;
          var _0x2e79x1f = _0x2e79x1d * _0x2e79x1e;
          _0x2e79x1b.slides[_0x2e79x1c].querySelector(
            ".slide-inner"
          ).style.transform = "translate3d(" + _0x2e79x1f + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var _0x2e79x1b = this;
        for (
          var _0x2e79x1c = 0;
          _0x2e79x1c < _0x2e79x1b.slides.length;
          _0x2e79x1c++
        ) {
          _0x2e79x1b.slides[_0x2e79x1c].style.transition = "";
        }
      },
      setTransition: function (_0x2e79x20) {
        var _0x2e79x1b = this;
        for (
          var _0x2e79x1c = 0;
          _0x2e79x1c < _0x2e79x1b.slides.length;
          _0x2e79x1c++
        ) {
          _0x2e79x1b.slides[_0x2e79x1c].style.transition = _0x2e79x20 + "ms";
          _0x2e79x1b.slides[_0x2e79x1c].querySelector(
            ".slide-inner"
          ).style.transition = _0x2e79x20 + "ms";
        }
      },
    },
  };
  var _0x2e79x1b = new Swiper(".swiper-container", _0x2e79x1a);
  var _0x2e79x21 = _0x2e79x1(".slide-bg-image");
  _0x2e79x21.each(function (_0x2e79x22) {
    if (_0x2e79x1(this).attr("data-background")) {
      _0x2e79x1(this).css(
        "background-image",
        "url(" + _0x2e79x1(this).data("background") + ")"
      );
    }
  });
  function _0x2e79x23() {
    if (_0x2e79x1(".preloader").length) {
      _0x2e79x1(".preloader")
        .delay(100)
        .fadeOut(500, function () {
          _0x2e79x24.init();
        });
    }
  }
  var _0x2e79x24 = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  if (_0x2e79x1(".fancybox").length) {
    _0x2e79x1(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style",
    });
  }
  if (_0x2e79x1(".video-btn").length) {
    _0x2e79x1(".video-btn").on("click", function () {
      _0x2e79x1.fancybox({
        href: this.href,
        type: _0x2e79x1(this).data("type"),
        title: this.title,
        helpers: { title: { type: "inside" }, media: {} },
        beforeShow: function () {
          _0x2e79x1(".fancybox-wrap").addClass("gallery-fancybox");
        },
      });
      return false;
    });
  }
  if (_0x2e79x1(".popup-gallery").length) {
    _0x2e79x1(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: { enabled: true },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function (_0x2e79x25) {
          return _0x2e79x25.is("img") ? _0x2e79x25 : _0x2e79x25.find("img");
        },
      },
    });
  }
  function _0x2e79x26() {
    if (_0x2e79x1(".sortable-gallery .gallery-filters").length) {
      var _0x2e79x27 = _0x2e79x1(".gallery-container");
      _0x2e79x27.isotope({
        filter: "*",
        animationOptions: { duration: 750, easing: "linear", queue: false },
      });
      _0x2e79x1(".gallery-filters li a").on("click", function () {
        _0x2e79x1(".gallery-filters li .current").removeClass("current");
        _0x2e79x1(this).addClass("current");
        var _0x2e79x28 = _0x2e79x1(this).attr("data-filter");
        _0x2e79x27.isotope({
          filter: _0x2e79x28,
          animationOptions: { duration: 750, easing: "linear", queue: false },
        });
        return false;
      });
    }
  }
  _0x2e79x26();
  function _0x2e79x29() {
    if (_0x2e79x1(".masonry-gallery").length) {
      var _0x2e79x2a = _0x2e79x1(".masonry-gallery").masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-item",
        percentPosition: true,
      });
      _0x2e79x2a.imagesLoaded().progress(function () {
        _0x2e79x2a.masonry("layout");
      });
    }
  }
  function _0x2e79x2b(_0x2e79x2c, _0x2e79x2d) {
    _0x2e79x2c
      .addClass("original")
      .clone()
      .insertAfter(_0x2e79x2c)
      .addClass(_0x2e79x2d)
      .removeClass("original");
  }
  if (_0x2e79x1(".site-header .navigation").length) {
    _0x2e79x2b(_0x2e79x1(".site-header .navigation"), "sticky-header");
  }
  var _0x2e79x2e = "";
  function _0x2e79x2f(_0x2e79x30, _0x2e79x31) {
    var _0x2e79x32 = _0x2e79x1(window).scrollTop();
    var _0x2e79x33 = _0x2e79x1(".site-header .navigation");
    if (_0x2e79x1(window).scrollTop() > 1e3) {
      if (_0x2e79x32 > _0x2e79x2e) {
        _0x2e79x30.addClass(_0x2e79x31);
      }
    } else {
      _0x2e79x30.removeClass(_0x2e79x31);
    }
    _0x2e79x2e = _0x2e79x32;
  }
  if (_0x2e79x1(".header-search-area").length) {
    var _0x2e79x34 = _0x2e79x1(".header-search-area .header-search-form");
    var _0x2e79x35 = _0x2e79x1(".header-search-area .open-btn");
    _0x2e79x1(document.body).append(_0x2e79x34);
    _0x2e79x34.hide();
    _0x2e79x35.on("click", function (_0x2e79xf) {
      _0x2e79x34.fadeIn();
      return false;
    });
    _0x2e79x34
      .on("click", function () {
        _0x2e79x34.fadeOut();
        return false;
      })
      .find(".form")
      .on("click", function (_0x2e79xf) {
        _0x2e79xf.stopPropagation();
      });
  }
  if (_0x2e79x1(".testimonial-slider").length) {
    _0x2e79x1(".testimonial-slider").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 500,
    });
  }
  function _0x2e79x36() {
    if (_0x2e79x1(".move-rocket").length) {
      var _0x2e79x37 = _0x2e79x1(".move-rocket"),
        _0x2e79x38 = _0x2e79x1(window),
        _0x2e79x39 = _0x2e79x37.offset().top,
        _0x2e79x3a = _0x2e79x38.scrollTop() / -2;
      _0x2e79x37.css("transform", "translateY(" + _0x2e79x3a + "px)");
    }
  }
  if (_0x2e79x1(".case-study-slider").length) {
    _0x2e79x1(".case-study-slider").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 0,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        768: { items: 3 },
        1200: { items: 4 },
        1400: { items: 5 },
      },
    });
  }
  if (_0x2e79x1(".testimonial-slider-s2").length) {
    _0x2e79x1(".testimonial-slider-s2").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 0,
      loop: true,
      autoplayHoverPause: true,
      margin: 70,
      stagePadding: 35,
      responsive: {
        0: { items: 1, margin: 0, stagePadding: 0 },
        450: { items: 1, margin: 0, stagePadding: 0 },
        992: { items: 2 },
      },
    });
  }
  if (_0x2e79x1("#piechart").length) {
    var _0x2e79x3b = _0x2e79x1("#piechart");
    _0x2e79x3b.appear();
    _0x2e79x1(document.body).on("appear", "#piechart", function () {
      var _0x2e79x3c = _0x2e79x1(this);
      if (!_0x2e79x3c.hasClass("appeared")) {
        _0x2e79x3c.addClass("appeared");
        var _0x2e79x3d = document.getElementById("piechart");
        var _0x2e79x3e = new Chart(_0x2e79x3d, {
          type: "doughnut",
          data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
              },
            ],
          },
          options: { legendPosition: "left" },
        });
      }
    });
  }
  if (_0x2e79x1("#bchart").length) {
    var _0x2e79x3b = _0x2e79x1("#bchart");
    _0x2e79x3b.appear();
    _0x2e79x1(document.body).on("appear", "#bchart", function () {
      var _0x2e79x3c = _0x2e79x1(this);
      if (!_0x2e79x3c.hasClass("appeared")) {
        _0x2e79x3c.addClass("appeared");
        var _0x2e79x3d = document.getElementById("bchart");
        var _0x2e79x3f = new Chart(_0x2e79x3d, {
          type: "bar",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } },
        });
      }
    });
  }
  if (_0x2e79x1(".thaia-stk-sidebar").length) {
    _0x2e79x1(".leftSidebar, .content").theiaStickySidebar({
      additionalMarginTop: 30,
    });
  }
  if (_0x2e79x1(".post-slider".length)) {
    _0x2e79x1(".post-slider").owlCarousel({
      mouseDrag: false,
      smartSpeed: 500,
      margin: 30,
      loop: true,
      nav: true,
      navText: [
        '<i class="fi flaticon-back"></i>',
        '<i class="fi flaticon-next"></i>',
      ],
      dots: false,
      items: 1,
    });
  }
  if (_0x2e79x1(".shop-single-slider").length) {
    _0x2e79x1(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    _0x2e79x1(".slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      focusOnSelect: true,
      prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>',
      nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>',
      responsive: [
        { breakpoint: 500, settings: { slidesToShow: 3, infinite: true } },
        { breakpoint: 400, settings: { slidesToShow: 2 } },
      ],
    });
  }
  if (_0x2e79x1("input[name='product-count']").length) {
    _0x2e79x1("input[name='product-count']").TouchSpin({
      verticalbuttons: true,
    });
  }
  if (_0x2e79x1("#contact-form-main").length) {
    _0x2e79x1("#contact-form-main").validate({
      rules: {
        name: { required: true, minlength: 2 },
        email: "required",
        phone: "required",
        subject: { required: true },
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter your email address",
        phone: "Please enter your phone number",
        subject: "Please select your contact subject",
      },
      submitHandler: function (_0x2e79x40) {
        _0x2e79x1.ajax({
          type: "POST",
          url: "mail-contact.php",
          data: _0x2e79x1(_0x2e79x40).serialize(),
          success: function () {
            _0x2e79x1("#loader").hide();
            _0x2e79x1("#success").slideDown("slow");
            setTimeout(function () {
              _0x2e79x1("#success").slideUp("slow");
            }, 3e3);
            _0x2e79x40.reset();
          },
          error: function () {
            _0x2e79x1("#loader").hide();
            _0x2e79x1("#error").slideDown("slow");
            setTimeout(function () {
              _0x2e79x1("#error").slideUp("slow");
            }, 3e3);
          },
        });
        return false;
      },
    });
  }
  if (_0x2e79x1("#particles-js").length) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 18, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 6.6,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
  _0x2e79x1("body").append(
    "<a href='#' class='back-to-top'><i class='fa-solid fa-arrow-right'></i></a>"
  );
  function _0x2e79x41() {
    var _0x2e79x42 = 1e3;
    if (_0x2e79x1(window).scrollTop() > _0x2e79x42) {
      _0x2e79x1("a.back-to-top").fadeIn("slow");
    } else {
      _0x2e79x1("a.back-to-top").fadeOut("slow");
    }
  }
  _0x2e79x1(".back-to-top").on("click", function () {
    _0x2e79x1("html,body").animate({ scrollTop: 0 }, 700);
    return false;
  });
  if (_0x2e79x1("#scene").length) {
    var _0x2e79x43 = document.getElementById("scene");
    var _0x2e79x44 = new Parallax(_0x2e79x43);
  }
  _0x2e79x1(window).on("load", function () {
    _0x2e79x23();
    _0x2e79x2();
    _0x2e79xa();
    _0x2e79x26();
  });
  _0x2e79x1(window).on("scroll", function () {
    if (_0x2e79x1(".site-header").length) {
      _0x2e79x2f(_0x2e79x1(".site-header .navigation"), "sticky-on");
    }
    _0x2e79x36();
    _0x2e79x41();
  });
  _0x2e79x1(window).on("resize", function () {
    _0x2e79x7();
    clearTimeout(_0x2e79x1.data(this, "resizeTimer"));
    _0x2e79x1.data(
      this,
      "resizeTimer",
      setTimeout(function () {
        _0x2e79xa();
      }, 200)
    );
  });
})(window.jQuery);
