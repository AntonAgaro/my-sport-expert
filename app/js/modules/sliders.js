const sliders = () => {
  $(document).ready(function(){
    $('.bio__slider').slick({
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev bio__slider-prev"><img class="bio__slider-arrow" src="./images/run/bio/bio-slider/prev.svg"></button>',
      nextArrow: '<button type="button" class="slick-next bio__slider-next"><img class="bio__slider-arrow" src="./images/run/bio/bio-slider/next.svg"></button>',
    });
  });
  
  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.help__content').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev help__slider-prev"><img class="help__slider-arrow" src="./images/run/help/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next help__slider-next"><img class="help__slider-arrow" src="./images/run/help/next.svg"></button>',
      });
    } 
  });
  
  $('.clients__wrapper').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev clients__slider-prev"><img class="clients__slider-arrow" src="./images/run/clients/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next clients__slider-next"><img class="clients__slider-arrow" src="./images/run/clients/right.svg"></button>',
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  
  $('.partners__slider-items-wrapper').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev partners__slider-prev"><img class="partners__slider-arrow" src="./images/run/partners/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next partners__slider-next"><img class="partners__slider-arrow" src="./images/run/partners/right.svg"></button>',
    responsive: [
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
    ]
  });
  
  $('.reviews__wrapper').slick({
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}

export default sliders;