$(function () {
  
  $('a[href^="#"]').click(function () {
    let elmHash = $(this).attr('href');
    let pos = $(elmHash).offset().top - 110;
    $("body,html").animate({ scrollTop: pos }, 500);
    return false;
  });
  
  $(window).scroll(function () {
    $(".title, .read-more, .concept-text, .left, .center, .right, .interview-left p, .interview-photo1, .interview-photo2, .contact-right p").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200 ) {
        $(this).addClass("slide");
      }
    });
  });

  $(window).scroll(function () {
    $(".interview-photo3").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).addClass("slide-photo3");
      }
    });
  });

  $(window).scroll(function () {
    $(".contact-left img").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("zoomin");
      }
    });
  });

$(".slide-photos").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          centerPadding: "5px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "5px",
          slidesToShow: 2,
        },
      },
      
    ],
  });
});
