const wattbike = () => {
  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.choose__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
      });
    } 
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.men__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
      });
    } 
  });

  //accordeon

  const wattbikeAccordeons = (accordeonHeads, headActive = 'veloproblems__inner-title--red', contentActive = 'wattbike__accordeon-content--active', paddings = 40) => {
    const heads = document.querySelectorAll(accordeonHeads);
    const points = document.querySelectorAll('.wattbike__point');
    heads.forEach(head => {
      const content = head.nextElementSibling;
      head.addEventListener('click', () => {
        head.classList.toggle(headActive);
        content.classList.toggle(contentActive);
        points.forEach(point => {
          if (head.dataset.acc === point.dataset.acc) {
            point.classList.toggle('wattbike__point--big');
          }
        });
  
        if (head.classList.contains(headActive)) {
          content.style.maxHeight = content.scrollHeight + paddings + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      });
    });
  };

  wattbikeAccordeons('.wattbike__accordeon-title');

  const pointsHandler = (paddings = 40) => {
    const points = document.querySelectorAll('.wattbike__point');
    const heads = document.querySelectorAll('.wattbike__accordeon-title');

    points.forEach(item => {
      item.classList.remove('wattbike__point--big');
      item.addEventListener('click', () => {
        heads.forEach(head => {
          if (head.dataset.acc === item.dataset.acc) {
            const content = head.nextElementSibling;
            item.classList.toggle('wattbike__point--big');
            head.classList.toggle('veloproblems__inner-title--red');
            content.classList.toggle('wattbike__accordeon-content--active');
            if (head.classList.contains('veloproblems__inner-title--red')) {
              content.style.maxHeight = content.scrollHeight + paddings + "px";
            } else {
              content.style.maxHeight = "0px";
            }
          }
        });
      });
    });
  };

  pointsHandler();

    const catchLines = () => {
    //Lines
    const firstLine = document.querySelector('.path-line');
    const secondLine = document.querySelector('.line-2-path-line');
    const thirdLine = document.querySelector('.line3-path-line');
    const thirdLinePart2 = document.querySelector('.line3-path-line3');

    //Points
    const firstLinePoint1 = document.querySelector('.path-line2');
    const firstLinePoint2 = document.querySelector('.path-line3');
    const secondLinePoint1 = document.querySelector('.line-2-path-line2');
    const secondLinePoint2 = document.querySelector('.line-2-path-line3');
    const thirdLinePoint1 = document.querySelector('.line3-path-line2');
    const thirdLinePoint2 = document.querySelector('.line3-path-line4');

    const removeAnimatiomFromLines = (line, animatedClass) => {
      line.classList.remove(animatedClass);
    };

    const addAnimatiomToLines = (line, animatedClass) => {
      line.classList.add(animatedClass);
    };

    const trackSection = document.querySelector('.track');
    const observer = new IntersectionObserver(element => {
      //Remove line animation
      removeAnimatiomFromLines(firstLine, 'animated-move');
      removeAnimatiomFromLines(secondLine, 'animated-move2');
      removeAnimatiomFromLines(thirdLine, 'animated-move2');
      removeAnimatiomFromLines(thirdLinePart2, 'animated-move2');

      //Remove Points Animation
      removeAnimatiomFromLines(firstLinePoint1, 'animated-points');
      removeAnimatiomFromLines(firstLinePoint2, 'animated-points');
      removeAnimatiomFromLines(secondLinePoint1, 'animated-points');
      removeAnimatiomFromLines(secondLinePoint2, 'animated-points');
      removeAnimatiomFromLines(thirdLinePoint1, 'animated-points');
      removeAnimatiomFromLines(thirdLinePoint2, 'animated-points');

      if (element[0].isIntersecting) {
         //Add line animation
          addAnimatiomToLines(firstLine, 'animated-move');
          addAnimatiomToLines(secondLine, 'animated-move2');
          addAnimatiomToLines(thirdLine, 'animated-move2');
          addAnimatiomToLines(thirdLinePart2, 'animated-move2');

          //Add Points Animation
          addAnimatiomToLines(firstLinePoint1, 'animated-points');
          addAnimatiomToLines(firstLinePoint2, 'animated-points');
          addAnimatiomToLines(secondLinePoint1, 'animated-points');
          addAnimatiomToLines(secondLinePoint2, 'animated-points');
          addAnimatiomToLines(thirdLinePoint1, 'animated-points');
          addAnimatiomToLines(thirdLinePoint2, 'animated-points');
      }
    });

    observer.observe(trackSection);
  };

  catchLines();
}

export default wattbike;