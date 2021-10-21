/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ "./app/js/modules/sliders.js");
/* harmony import */ var _modules_wattbike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/wattbike */ "./app/js/modules/wattbike.js");
/* harmony import */ var _modules_psychologist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/psychologist */ "./app/js/modules/psychologist.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./app/js/modules/tabs.js");
/* harmony import */ var _modules_kinezio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/kinezio */ "./app/js/modules/kinezio.js");
/* harmony import */ var _modules_insoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/insoles */ "./app/js/modules/insoles.js");
/* harmony import */ var _modules_velo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/velo */ "./app/js/modules/velo.js");
/* harmony import */ var _modules_mysport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mysport */ "./app/js/modules/mysport.js");
/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/reviews */ "./app/js/modules/reviews.js");
/* harmony import */ var _modules_mse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/mse */ "./app/js/modules/mse.js");










window.addEventListener('DOMContentLoaded', function () {
  //run
  try {
    if (document.querySelector('#run-buttons-container')) {
      Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('.run__tabs', 'problems__text--active', '#run-buttons-container', '.problems__point', 'problems__point--active');
    }

    Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (document.querySelector('.mysport')) {
      Object(_modules_mysport__WEBPACK_IMPORTED_MODULE_7__["default"])();
    }

    if (document.querySelector('.reviews__wrapper-content-btn')) {
      Object(_modules_reviews__WEBPACK_IMPORTED_MODULE_8__["default"])();
    } // mse


    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#run-report-mse');
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#run-company-mse');
  } catch (e) {
    console.log(e);
  } //wattbike


  try {
    Object(_modules_wattbike__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#wattbike-report-mse');
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#wattbike-trener-mse');
  } catch (e) {
    console.log(e);
  } //psychologist


  try {
    Object(_modules_psychologist__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#psy-person-mse');
  } catch (e) {
    console.log(e);
  } //kinezio


  try {
    Object(_modules_kinezio__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#kinezio-center-mse');
  } catch (e) {
    console.log(e);
  } //insoles


  try {
    Object(_modules_insoles__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#insoles-mistakes-mse');
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#insoles-company-mse');
  } catch (e) {
    console.log(e);
  } //velo


  try {
    if (document.querySelector('#velo-buttons-container')) {
      Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('.veloproblems__inner-tabs', 'veloproblems__inner-tabs--active', '#velo-buttons-container', '.veloproblems__point', 'veloproblems__point--big');
    }

    Object(_modules_velo__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#velo-mistakes-mse');
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#velo-specialist-mse');
    Object(_modules_mse__WEBPACK_IMPORTED_MODULE_9__["default"])('#velo-bikes-mse');
  } catch (e) {
    console.log(e);
  }
});

/***/ }),

/***/ "./app/js/modules/insoles.js":
/*!***********************************!*\
  !*** ./app/js/modules/insoles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var insoles = function insoles() {
  $('.insoles-choose__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev insoles-choose__slider-prev"><img class="insoles-choose__slider-arrow" src="./images/insoles/slider-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next insoles-choose__slider-next"><img class="insoles-choose__slider-arrow" src="./images/insoles/slider-right.svg"></button>',
    dots: true,
    infinite: false,
    dotsClass: "insoles-choose__inner-points"
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.making__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: false
      });
    }
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.kinds__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: true
      });
    }
  });

  var calcStroke = function calcStroke() {
    var path = document.querySelector('#path-three');
    var len = Math.round(path.getTotalLength());
    alert("Длина пути - " + len);
  };

  var animateNumbers = function animateNumbers() {
    var one = document.querySelector('.path-one');
    var two = document.querySelector('.path-two');
    var three = document.querySelector('.path-three');

    var removeAnimation = function removeAnimation(elem, animatedClass) {
      elem.classList.remove(animatedClass);
    };

    var addAnimation = function addAnimation(elem, animatedClass) {
      elem.classList.add(animatedClass);
    };

    var garantySection = document.querySelector('.garanty');
    var observer = new IntersectionObserver(function (element) {
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

/* harmony default export */ __webpack_exports__["default"] = (insoles);

/***/ }),

/***/ "./app/js/modules/kinezio.js":
/*!***********************************!*\
  !*** ./app/js/modules/kinezio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var kinezio = function kinezio() {
  $('.small-video__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/arrow-right.svg"></button>',
    responsive: [{
      breakpoint: 1064,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.kinezio-center__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-right.svg"></button>'
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.kinezio-choose__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev small-video__slider-prev"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next small-video__slider-next"><img class="small-video__slider-arrow" src="./images/kinezio/kinezio-center__slider-right.svg"></button>'
      });
    }
  });

  var kinezioTabs = function kinezioTabs() {
    var titles = document.querySelectorAll('.kinezio-tabs__items-title');
    var lists = document.querySelectorAll('.kinezio-tabs__items-list');
    lists.forEach(function (list) {
      return list.style.display = 'none';
    });
    titles.forEach(function (title) {
      title.addEventListener('mouseover', function (e) {
        lists.forEach(function (list) {
          return list.style.display = 'none';
        });

        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.style.display = 'block';
        }
      });
    });
    titles.forEach(function (title) {
      title.addEventListener('mouseout', function (e) {
        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.style.display = 'none';
        }
      });
    });
  };

  kinezioTabs();
};

/* harmony default export */ __webpack_exports__["default"] = (kinezio);

/***/ }),

/***/ "./app/js/modules/mse.js":
/*!*******************************!*\
  !*** ./app/js/modules/mse.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var mse = function mse(svg) {
  var svgContainer = document.querySelector(svg);
  var parts = svgContainer.querySelectorAll('.mse-part');
  var count = 0;

  var hideParts = function hideParts() {
    parts.forEach(function (part) {
      part.classList.remove('cls-1');
      part.classList.add('cls-3');
    });
  };

  hideParts();

  var showPart = function showPart(n) {
    hideParts();
    parts.forEach(function (part, index) {
      if (index === n) {
        part.classList.remove('cls-3');
        part.classList.add('cls-1');
      }
    });
  };

  var interval = setInterval(function () {
    if (count === parts.length - 1) {
      count = 0;
    } else {
      count++;
    }

    showPart(count);
  }, 1000);
};

/* harmony default export */ __webpack_exports__["default"] = (mse);

/***/ }),

/***/ "./app/js/modules/mysport.js":
/*!***********************************!*\
  !*** ./app/js/modules/mysport.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var mysport = function mysport() {
  var loop = function loop() {
    var texts = document.querySelectorAll('.mysport > p');
    texts.forEach(function (n) {
      n.style.opacity = '0';
    });
    texts.forEach(function (n, i) {
      setTimeout(function () {
        n.style.opacity = "1";
      }, i * 500);
    });
  };

  function autoNext() {
    loop();
    setTimeout(autoNext, 6000);
  }

  setTimeout(autoNext, 1000);
};

/* harmony default export */ __webpack_exports__["default"] = (mysport);

/***/ }),

/***/ "./app/js/modules/psychologist.js":
/*!****************************************!*\
  !*** ./app/js/modules/psychologist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var psychologist = function psychologist() {
  $(window).on('load resize', function () {
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
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.psy-person__slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>',
        infinite: false
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (psychologist);

/***/ }),

/***/ "./app/js/modules/reviews.js":
/*!***********************************!*\
  !*** ./app/js/modules/reviews.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var reviews = function reviews() {
  var buttons = document.querySelectorAll('.reviews__wrapper-content-btn');
  var reviesContainer = document.querySelector('.reviews__wrapper');
  var redBlock = document.querySelector('.reviews__redblock');
  var redBlockTriangle = document.querySelector('.reviews__redblock-triangle');
  redBlock.style.display = 'none';
  redBlockTriangle.style.display = 'none';
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      redBlock.style.display = 'flex';
      redBlockTriangle.style.display = 'block';

      if (redBlock.classList.contains('reviews__redblock--reverse')) {
        console.log(12312);
        reviesContainer.style.transform = 'translateX(200px)';
      } else {
        reviesContainer.style.transform = 'translateX(-200px)';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reviews);

/***/ }),

/***/ "./app/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./app/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sliders = function sliders() {
  $(document).ready(function () {
    $('.bio__slider').slick({
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev bio__slider-prev"><img class="bio__slider-arrow" src="./images/run/bio/bio-slider/prev.svg"></button>',
      nextArrow: '<button type="button" class="slick-next bio__slider-next"><img class="bio__slider-arrow" src="./images/run/bio/bio-slider/next.svg"></button>'
    });
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.help__content').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev help__slider-prev"><img class="help__slider-arrow" src="./images/run/help/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next help__slider-next"><img class="help__slider-arrow" src="./images/run/help/next.svg"></button>'
      });
    }
  });
  $('.clients__wrapper').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev clients__slider-prev"><img class="clients__slider-arrow" src="./images/run/clients/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next clients__slider-next"><img class="clients__slider-arrow" src="./images/run/clients/right.svg"></button>',
    responsive: [{
      breakpoint: 1064,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.partners__slider-items-wrapper').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev partners__slider-prev"><img class="partners__slider-arrow" src="./images/run/partners/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next partners__slider-next"><img class="partners__slider-arrow" src="./images/run/partners/right.svg"></button>',
    responsive: [{
      breakpoint: 764,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }]
  });
  $('.reviews__wrapper').slick({
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./app/js/modules/tabs.js":
/*!********************************!*\
  !*** ./app/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var tabs = function tabs(tabsSelector, tabActiveClass, buttonsContainerSelector, buttonSelector, buttonActiveClass) {
  var tabs = document.querySelectorAll(tabsSelector);
  var buttonsContainer = document.querySelector(buttonsContainerSelector);
  var buttons = document.querySelectorAll(buttonSelector);

  var hideElements = function hideElements(elements, activeClass) {
    elements.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  };

  buttonsContainer.addEventListener('click', function (e) {
    buttons.forEach(function (item) {
      if (item === e.target) {
        hideElements(tabs, tabActiveClass);
        hideElements(buttons, buttonActiveClass);
        item.classList.add(buttonActiveClass);
      }
    });
    tabs.forEach(function (item) {
      if (e.target.dataset.pain === item.dataset.pain) {
        item.classList.add(tabActiveClass);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./app/js/modules/velo.js":
/*!********************************!*\
  !*** ./app/js/modules/velo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var velo = function velo() {
  var time = 1000;
  var step = 1;

  var outNum = function outNum(num, elem) {
    // const element = document.querySelector(elem);
    var n = 0;
    var t = Math.round(time / (num / step));
    var interval = setInterval(function () {
      n = n + step;

      if (n === num) {
        clearInterval(interval);
      }

      elem.innerHTML = n;
    }, t);
  };

  var veloChecks = function veloChecks() {
    var lists = document.querySelectorAll('.indicators__list');
    var checks = document.querySelectorAll('.indicators__checks-input');

    var hideLists = function hideLists() {
      lists.forEach(function (item) {
        return item.style.display = 'none';
      });
    };

    hideLists();
    checks.forEach(function (item) {
      item.addEventListener('click', function (e) {
        checks.forEach(function (item) {
          item.checked = false;
          e.target.checked = true;
          lists.forEach(function (item) {
            if (item.dataset.check === e.target.dataset.check) {
              hideLists();
              item.style.display = 'flex';
              var numbers = item.querySelectorAll('.indicators__list-number > span');
              numbers.forEach(function (item) {
                outNum(+item.innerHTML, item);
              });
            }
          });
        });
      });
    });
  };

  veloChecks();

  var veloTabs = function veloTabs() {
    var tabs = document.querySelectorAll('.custom__list-item');
    var tabsAboutLists = document.querySelectorAll('.custom__main-list');
    var tabsResume = document.querySelectorAll('.custom__tab-resume');

    var hideTabsAboutLists = function hideTabsAboutLists() {
      tabsAboutLists.forEach(function (item) {
        return item.classList.remove('custom__main-list--active');
      });
      tabsResume.forEach(function (item) {
        return item.classList.remove('custom__tab-resume--active');
      });
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (tab) {
          return tab.classList.remove('custom__list-item--active');
        });
        hideTabsAboutLists();
        tabsAboutLists.forEach(function (list) {
          if (tab.dataset.custom === list.dataset.custom) {
            list.classList.add('custom__main-list--active');
            tab.classList.add('custom__list-item--active');
          }
        });
        tabsResume.forEach(function (resume) {
          if (tab.dataset.custom === resume.dataset.custom) {
            resume.classList.add('custom__tab-resume--active');
          }
        });
      });
    });
  };

  veloTabs();
};

/* harmony default export */ __webpack_exports__["default"] = (velo);

/***/ }),

/***/ "./app/js/modules/wattbike.js":
/*!************************************!*\
  !*** ./app/js/modules/wattbike.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var wattbike = function wattbike() {
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.choose__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>'
      });
    }
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 764) {
      $('.men__inner').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev choose__slider-prev"><img class="choose__slider-arrow" src="./images/wattbike/slider/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next choose__slider-next"><img class="choose__slider-arrow" src="./images/wattbike/slider/next.svg"></button>'
      });
    }
  }); //accordeon

  var wattbikeAccordeons = function wattbikeAccordeons(accordeonHeads) {
    var headActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'veloproblems__inner-title--red';
    var contentActive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'wattbike__accordeon-content--active';
    var paddings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;
    var heads = document.querySelectorAll(accordeonHeads);
    var points = document.querySelectorAll('.wattbike__point');
    heads.forEach(function (head) {
      var content = head.nextElementSibling;
      head.addEventListener('click', function () {
        head.classList.toggle(headActive);
        content.classList.toggle(contentActive);
        points.forEach(function (point) {
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

  var pointsHandler = function pointsHandler() {
    var paddings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
    var points = document.querySelectorAll('.wattbike__point');
    var heads = document.querySelectorAll('.wattbike__accordeon-title');
    points.forEach(function (item) {
      item.classList.remove('wattbike__point--big');
      item.addEventListener('click', function () {
        heads.forEach(function (head) {
          if (head.dataset.acc === item.dataset.acc) {
            var content = head.nextElementSibling;
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

  var catchLines = function catchLines() {
    //Lines
    var firstLine = document.querySelector('.path-line');
    var secondLine = document.querySelector('.line-2-path-line');
    var thirdLine = document.querySelector('.line3-path-line');
    var thirdLinePart2 = document.querySelector('.line3-path-line3'); //Points

    var firstLinePoint1 = document.querySelector('.path-line2');
    var firstLinePoint2 = document.querySelector('.path-line3');
    var secondLinePoint1 = document.querySelector('.line-2-path-line2');
    var secondLinePoint2 = document.querySelector('.line-2-path-line3');
    var thirdLinePoint1 = document.querySelector('.line3-path-line2');
    var thirdLinePoint2 = document.querySelector('.line3-path-line4');

    var removeAnimatiomFromLines = function removeAnimatiomFromLines(line, animatedClass) {
      line.classList.remove(animatedClass);
    };

    var addAnimatiomToLines = function addAnimatiomToLines(line, animatedClass) {
      line.classList.add(animatedClass);
    };

    var trackSection = document.querySelector('.track');
    var observer = new IntersectionObserver(function (element) {
      //Remove line animation
      removeAnimatiomFromLines(firstLine, 'animated-move');
      removeAnimatiomFromLines(secondLine, 'animated-move2');
      removeAnimatiomFromLines(thirdLine, 'animated-move2');
      removeAnimatiomFromLines(thirdLinePart2, 'animated-move2'); //Remove Points Animation

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
        addAnimatiomToLines(thirdLinePart2, 'animated-move2'); //Add Points Animation

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
};

/* harmony default export */ __webpack_exports__["default"] = (wattbike);

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=script.js.map