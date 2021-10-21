const kinezio = () => {
  $('.small-video__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  $('.kinezio-center__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-right.svg"></button>',
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 764) {
      $('.kinezio-choose__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-right.svg"></button>',
      });
    } 
  });

  const kinezioTabs = () => {
    const titles = document.querySelectorAll('.kinezio-tabs__items-title');
    const lists = document.querySelectorAll('.kinezio-tabs__items-list');
    lists.forEach(list => list.style.display = 'none');

    titles.forEach(title => {
      title.addEventListener('mouseover', (e) => {
        lists.forEach(list => list.style.display = 'none');
        if(e.target.nextElementSibling) {
          e.target.nextElementSibling.style.display = 'block';
        }
      });
    });

    titles.forEach(title => {
      title.addEventListener('mouseout', (e) => {
        if(e.target.nextElementSibling) {
          e.target.nextElementSibling.style.display = 'none';
        }
        
      });
    });
  };

  kinezioTabs();
};

export default kinezio;