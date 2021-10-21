const psychologist = () => {
  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.psy-about__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        dots: true,
        infinite: false,
        dotsClass: "psy-about__pagination"
      });
    } 
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.psy-person__slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: false,
      });
    } 
  });
};

export default psychologist;