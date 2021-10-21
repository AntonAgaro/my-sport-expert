const insoles = () => {
  $('.insoles-choose__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev insoles-choose__slider-prev"><img class="insoles-choose__slider-arrow" src="./images/insoles/slider-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next insoles-choose__slider-next"><img class="insoles-choose__slider-arrow" src="./images/insoles/slider-right.svg"></button>',
    dots: true,
    infinite: false,
    dotsClass: "insoles-choose__inner-points"
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.making__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: false,
      });
    } 
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.kinds__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: true,
      });
    } 
  });

  const calcStroke = () => {
        const path = document.querySelector('#path-three');
        const len = Math.round(path.getTotalLength() );
        alert("Длина пути - " + len);
  };

  const animateNumbers = () => {
    const one = document.querySelector('.path-one');
    const two = document.querySelector('.path-two');
    const three = document.querySelector('.path-three');

    const removeAnimation = (elem, animatedClass) => {
      elem.classList.remove(animatedClass);
    };

    const addAnimation = (elem, animatedClass) => {
      elem.classList.add(animatedClass);
    };

    const garantySection = document.querySelector('.garanty');

    const observer = new IntersectionObserver(element => {
      removeAnimation(one, 'animated-num-one');
      removeAnimation(two, 'animated-num-two');
      removeAnimation(three, 'animated-num-three');

      if (element[0].isIntersecting) {
        addAnimation(one, 'animated-num-one');
        addAnimation(two, 'animated-num-two');
        addAnimation(three, 'animated-num-three');
      }
    });

    observer.observe(garantySection);
  };

  animateNumbers();
};

export default insoles;