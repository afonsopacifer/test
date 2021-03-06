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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var movementsLimit = function movementsLimit(states, btnBack, btnNext) {

  var isFirstSlide = states.move === 0;

  if (isFirstSlide) {
    states.permission.back = false;
    btnBack.disabled = true;
  } else {
    states.permission.back = true;
    btnBack.disabled = false;
  }

  var isLastSlide = states.move === (states.totalSlides - 1) * -100;

  if (isLastSlide) {
    states.permission.next = false;
    btnNext.disabled = true;
  } else {
    states.permission.next = true;
    btnNext.disabled = false;
  }
};

exports.default = movementsLimit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bulletsStatus = function bulletsStatus(allBullets, currentPosition) {

  allBullets.forEach(function (bullet, index) {
    index === currentPosition ? bullet.classList.add('bullet--active') : bullet.classList.remove('bullet--active');
  });
};

exports.default = bulletsStatus;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addKeyboardEventListener = __webpack_require__(3);

var _addKeyboardEventListener2 = _interopRequireDefault(_addKeyboardEventListener);

var _movementsLimit = __webpack_require__(0);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(1);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

var _createBullets = __webpack_require__(4);

var _createBullets2 = _interopRequireDefault(_createBullets);

var _moveToSpecificPosition = __webpack_require__(5);

var _moveToSpecificPosition2 = _interopRequireDefault(_moveToSpecificPosition);

var _movePositions = __webpack_require__(6);

var _movePositions2 = _interopRequireDefault(_movePositions);

var _createSlides = __webpack_require__(7);

var _createSlides2 = _interopRequireDefault(_createSlides);

var _slides = __webpack_require__(8);

var _slides2 = _interopRequireDefault(_slides);

var _videoTracker = __webpack_require__(9);

var _videoTracker2 = _interopRequireDefault(_videoTracker);

var _newSynthesis = __webpack_require__(10);

var _newSynthesis2 = _interopRequireDefault(_newSynthesis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------
// Slides DOM Elements
// ----------------------------------------------------------

// ----------------
// Video Tracking
// ----------------

// ----------------------------------------------------------
// Modules
// ----------------------------------------------------------

// ----------------
// Helpers
// ----------------

var carousel = document.getElementById('carousel');

// ----------------
// Speech Synthesis
// ----------------

// ----------------
// Slides
// ----------------

var btnNext = document.getElementById('btnNext');
var btnBack = document.getElementById('btnBack');
var carouselBullets = document.getElementById('carouselBullets');

// -----------------------------
// Create Slides
// -----------------------------

// createSlides(slides, carousel);

var allSlides = document.querySelectorAll('.carousel__slide');

// -----------------------------
// States
// -----------------------------

var state = {
  move: 0,
  totalSlides: allSlides.length,
  permission: {
    back: false,
    next: true
  }

  // -----------------------------
  // Create Bullets
  // -----------------------------

};(0, _createBullets2.default)(allSlides);

var allBullets = document.querySelectorAll('.bullet');

allBullets.forEach(function (bullet, index) {
  bullet.addEventListener('click', function () {
    (0, _moveToSpecificPosition2.default)(index, state, allSlides, allBullets, btnBack, btnNext);
  });
});

// -----------------------------
// Controls
// -----------------------------

var nextSlide = function nextSlide() {
  (0, _movePositions2.default)(1, state, allSlides, allBullets, btnBack, btnNext);
};

var backSlide = function backSlide() {
  (0, _movePositions2.default)(-1, state, allSlides, allBullets, btnBack, btnNext);
};

// -----------------------------
// Buttons
// -----------------------------

btnNext.addEventListener('click', function () {
  return nextSlide();
});
btnBack.addEventListener('click', function () {
  return backSlide();
});

// -----------------------------
// Keyboard
// -----------------------------

(0, _addKeyboardEventListener2.default)(33, nextSlide);
(0, _addKeyboardEventListener2.default)(39, nextSlide);
(0, _addKeyboardEventListener2.default)(40, nextSlide);

(0, _addKeyboardEventListener2.default)(34, backSlide);
(0, _addKeyboardEventListener2.default)(37, backSlide);
(0, _addKeyboardEventListener2.default)(38, backSlide);

// ----------------------------------------------------------
// Video DOM Elements
// ----------------------------------------------------------

var camera = document.getElementById('camera');

// -----------------------------
// Control video Tracker
// -----------------------------

var videoTracking = (0, _videoTracker2.default)('#camera', nextSlide, backSlide);

var startVideoTracker = function startVideoTracker() {
  videoTracking.run();
  camera.classList.add('camera--on');
};

var stopVideoTracker = function stopVideoTracker() {
  videoTracking.stop();
  camera.classList.remove('camera--on');
};

// ----------------------------------------------------------
// Audio DOM Elements
// ----------------------------------------------------------

var result = document.getElementById('micRes');
var mic = document.getElementById('mic');

// -----------------------------
// Speech Recognition
// -----------------------------

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition({ lang: 'pt-BR' });

// -----------------------------
// Enable Recognition
// -----------------------------

var enableRecognition = function enableRecognition() {
  recognition.start();
  result.style = 'display: block;';
  mic.classList.add('mic--on');
  beep.play();
};

var disableRecognition = function disableRecognition() {
  recognition.stop();
  result.style = 'display: none;';
  mic.classList.remove('mic--on');
  beep.play();
};

var recognitionState = void 0;

var toggleRecognition = function toggleRecognition() {
  if (!recognitionState) {
    enableRecognition();
    recognitionState = true;
  } else {
    disableRecognition();
    recognitionState = false;
  }
};

mic.addEventListener('click', toggleRecognition);

// -----------------------------
// Recognition Commands
// -----------------------------

recognition.onresult = function (e) {
  var input = e.results[0][0].transcript;

  if (input == "Abrir câmera") startVideoTracker();
  if (input == "Fechar câmera") stopVideoTracker();
  if (input == "avançar") nextSlide();
  if (input == "voltar") backSlide();
  if (input == "sexta-feira") synthesis.speak(hello);
  if (input == "dinossauro") window.open('https://chromedino.com/', '_blank');
  if (input == "trilha sonora") ironMan.play();
  if (input == "Nativo") synthesis.speak(nativo);
  if (input == "híbrido") synthesis.speak(hibrido);
  if (input == "fala com o pessoal") synthesis.speak(welcome);
  if (input == "piada") synthesis.speak(piada);

  result.textContent = input;
  mic.classList.remove('mic--on');
};

// -----------------------------
// Speech Synthesis
// -----------------------------

var synthesis = window.speechSynthesis;

// -----------------------------
// Synthesis Speak
// -----------------------------

var hello = (0, _newSynthesis2.default)('Olá Afonso, em que posso ajudar?');
var nativo = (0, _newSynthesis2.default)('Não roda em nenhum computador, apenas em algumas versões de Android ou I O S');
var hibrido = (0, _newSynthesis2.default)('Você está de sacanagem comigo?');
var welcome = (0, _newSynthesis2.default)('Bem Vindos ao Dev Fest XP!');
var piada = (0, _newSynthesis2.default)('O b\xEAbado atravessa a rua com o farol fechado\ne um carro passa e buzina "BIBI"...\nO b\xEAbado olha para o carro e diz:\n"EU TAMB\xC9M BIBI E MUITO..."');

// -----------------------------
// Audio
// -----------------------------

var beep = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
var ironMan = new Audio('./assets/sounds/ACDC.mp3');

// -----------------------------
// Gamepad
// -----------------------------

var gamepad = new Gamepad();

gamepad.on('connect', function (e) {
  console.log('controller ' + e.index + ' connected!');
  beep.play();
});

gamepad.on('press', 'button_3', function () {
  return startVideoTracker();
});
gamepad.on('press', 'button_2', function () {
  return stopVideoTracker();
});
gamepad.on('press', 'button_4', function () {
  return backSlide();
});
gamepad.on('press', 'button_1', function () {
  return nextSlide();
});
gamepad.on('press', 'shoulder_top_left', function () {
  return enableRecognition();
});
gamepad.on('press', 'shoulder_top_right', function () {
  return disableRecognition();
});
gamepad.on('press', 'start', function () {
  return window.open('https://chromedino.com/', '_blank');
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addKeyboardEventListener = function addKeyboardEventListener(btnCode, cb) {

  window.addEventListener('keydown', function (e) {
    var pressButton = e.which == btnCode || e.keyCode == btnCode;
    if (pressButton) cb();
  });
};

exports.default = addKeyboardEventListener;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createBullets = function createBullets(allSlides) {
  allSlides.forEach(function (el, i) {
    var li = document.createElement('li');
    li.classList.add("bullet");

    if (i === 0) li.classList.add('bullet--active');

    li.innerHTML = '\n      <button class="bullet__button">\n        <svg  class="bullet__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <title>Avan\xE7ar para o ' + (i + 1) + '\xB0 slide</title>\n          <circle cx="12" cy="12" r="12"/>\n        </svg>\n      </button>\n    ';

    carouselBullets.appendChild(li);
  });
};

exports.default = createBullets;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementsLimit = __webpack_require__(0);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(1);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveToSpecificPosition = function moveToSpecificPosition(value, states, allSlides, allBullets, btnBack, btnNext) {

  var movePercent = value * 100 * -1;

  allSlides.forEach(function (slide) {
    slide.style.transform = 'translateX(' + movePercent + '%)';
  });

  states.move = movePercent;

  (0, _movementsLimit2.default)(states, btnBack, btnNext);
  (0, _bulletsStatus2.default)(allBullets, value);
};

exports.default = moveToSpecificPosition;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementsLimit = __webpack_require__(0);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(1);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movePositions = function movePositions(value, state, allSlides, allBullets, btnBack, btnNext) {

  var isBackMovement = value < 0;
  var isNextMovement = value > 0;

  var movePercent = value * 100 * -1;

  if (isBackMovement && state.permission.back) {

    allSlides.forEach(function (slide) {
      slide.style.transform = 'translateX(' + (movePercent + state.move) + '%)';
    });

    // Update State
    state.move += movePercent;

    (0, _movementsLimit2.default)(state, btnBack, btnNext);

    var currentPosition = state.move / 100 * -1;

    (0, _bulletsStatus2.default)(allBullets, currentPosition);
  }

  if (isNextMovement && state.permission.next) {

    allSlides.forEach(function (slide) {
      slide.style.transform = 'translateX(' + (movePercent + state.move) + '%)';
    });

    state.move += movePercent;

    (0, _movementsLimit2.default)(state, btnBack, btnNext);

    var _currentPosition = state.move / 100 * -1;

    (0, _bulletsStatus2.default)(allBullets, _currentPosition);
  }
};
exports.default = movePositions;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createSlides = function createSlides(slides, carousel) {

  slides.forEach(function (slide) {

    var article = document.createElement('article');
    article.classList.add('carousel__slide');

    switch (slide.type) {
      case 'list':
        article.classList.add('carousel__slide--list');
        break;
      case 'left':
        article.classList.add('carousel__slide--left');
        break;
      case 'right':
        article.classList.add('carousel__slide--right');
        break;
      case 'bottom':
        article.classList.add('carousel__slide--bottom');
        break;
    }

    if (slide.heading1) {
      var h1 = document.createElement('h1');
      h1.classList.add('heading-1');
      h1.innerHTML = slide.heading1;
      article.appendChild(h1);
    }

    if (slide.heading2) {
      var h2 = document.createElement('h2');
      h2.classList.add('heading-2');
      h2.innerHTML = slide.heading2;
      article.appendChild(h2);
    }

    if (slide.gif) {
      var gif = document.createElement('img');
      gif.classList.add('gif');
      gif.src = slide.gif;
      article.appendChild(gif);
    }

    if (slide.imgRight) {
      var img = document.createElement('img');
      img.classList.add('img-right');
      img.src = slide.imgRight;
      article.appendChild(img);
    }

    if (slide.imgLeft) {
      var _img = document.createElement('img');
      _img.classList.add('img-left');
      _img.src = slide.imgLeft;
      article.appendChild(_img);
    }

    if (slide.img) {
      var _img2 = document.createElement('img');
      _img2.classList.add('img');
      _img2.src = slide.img;
      article.appendChild(_img2);
    }

    if (slide.list) {
      var ul = document.createElement('ul');
      ul.classList.add('list');

      slide.list.forEach(function (item) {
        var li = document.createElement('li');
        li.classList.add('list__item');
        li.innerHTML = item;

        ul.appendChild(li);
      });

      article.appendChild(ul);
    }

    if (slide.bgColor) {
      article.style.setProperty('--bg-color', slide.bgColor);
    }

    if (slide.primaryColor) {
      article.style.setProperty('--primary-text-color', slide.primaryColor);
    }

    if (slide.secondaryColor) {
      article.style.setProperty('--secondary-text-color', slide.secondaryColor);
    }

    carousel.appendChild(article);
  });
};

exports.default = createSlides;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var slides = [{
  type: '',
  heading1: '',
  heading2: '',
  img: 'assets/imgs/chrome.png',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#000',
  primaryColor: '#ff005c',
  secondaryColor: '#dddddd'
}, {
  type: 'left',
  heading1: 'Afonso Pacifer',
  heading2: 'Web Evangelist & Consultant',
  gif: '',
  imgRight: 'assets/imgs/me.png',
  img: 'assets/imgs/afonso.png',
  list: ['', '', ''],
  bgColor: '#1e1e1e',
  primaryColor: '#76f5a8',
  secondaryColor: '#dddddd'
},
// {
//   type: '',
//   heading1: 'Google Chrome',
//   heading2: 'As a platform',
//   gif: '',
//   imgRight: '',
//   imgLeft: '',
//   list: ['', '', ''],
//   bgColor: '#002054',
//   primaryColor: '#ff005c',
//   secondaryColor: '#dddddd'
// },
{
  type: '',
  heading1: 'Conversa',
  heading2: 'Sobre Browsers',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#ff005c',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Diferentes versões',
  heading2: 'disponíveis',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#ff005c',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: '',
  heading2: '',
  img: 'assets/imgs/allChrome.png',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#ff005c',
  secondaryColor: '#dddddd'
}, {
  type: 'left',
  heading1: 'Chromium',
  heading2: 'Open Source',
  img: 'assets/imgs/chromium.png',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'O que muda?',
  heading2: 'Além do número',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#ff005c',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Blink',
  heading2: 'Motor de renderização',
  gif: '',
  imgRight: 'assets/imgs/css3.png',
  imgLeft: 'assets/imgs/html5.png',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#ff5200',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'V8',
  heading2: 'Interpretador',
  gif: '',
  imgRight: 'assets/imgs/js.png',
  imgLeft: 'assets/imgs/nodejs.png',
  list: ['', '', ''],
  bgColor: '#002054',
  primaryColor: '#f2e02a',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Porque é importate?',
  heading2: 'Eu quero criar aplicações!',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fafafa',
  primaryColor: '#ff0063',
  secondaryColor: '#c0c0c0'
}, {
  type: 'left',
  heading1: 'Market Share',
  heading2: 'Desktop',
  img: 'assets/imgs/market-share.png',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fafafa',
  primaryColor: '#ff0063',
  secondaryColor: '#c0c0c0'
}, {
  type: '',
  heading1: 'Sistema Operacional',
  heading2: 'Mais usado no mundo?',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fafafa',
  primaryColor: '#ff0063',
  secondaryColor: '#c0c0c0'
}, {
  type: '',
  heading1: '',
  heading2: '',
  img: 'assets/imgs/so.png',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fafafa',
  primaryColor: '#ff0063',
  secondaryColor: '#c0c0c0'
}, {
  type: '',
  heading1: '',
  heading2: '',
  img: 'assets/imgs/so-chrome.png',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fafafa',
  primaryColor: '#ff0063',
  secondaryColor: '#c0c0c0'
}, {
  type: '',
  heading1: 'Plataforma',
  heading2: 'Para Desenvolvedores',
  gif: '',
  imgRight: 'assets/imgs/tech.png',
  imgLeft: 'assets/imgs/chrome-side.png',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Front-End Developer',
  heading2: 'ou.. Dev Descolado',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'DevTools',
  heading2: 'Debugging',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Plataforma',
  heading2: 'Para Aplicações',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Nativo X Híbrido',
  heading2: '',
  gif: '',
  imgRight: 'assets/imgs/hibrido.png',
  imgLeft: 'assets/imgs/native.png',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: 'list',
  heading1: 'Nativo',
  heading2: '',
  gif: '',
  imgRight: 'assets/imgs/native.png',
  imgLeft: '',
  list: ['Programa em 3 linguagens', 'O usuário vai na loja e baixa', 'Espera instalar', 'Não usa no Desktop ou mobile', '*Depende de internet', 'E… desinstala'],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: 'list',
  heading1: 'Híbrido',
  heading2: '',
  gif: '',
  imgRight: 'assets/imgs/hibrido.png',
  imgLeft: '',
  list: ['Programa no estilo Front-End', 'O usuário vai na loja e baixa', 'Espera instalar', 'Abre uma WebView', 'APPs diferentes p Desktop e mobile', '*Depende de internet', 'E… desinstala'],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web APP',
  heading2: 'ou Progressive Web APP (PWA)',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web APP',
  heading2: '',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['Programa no estilo Front-End', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: 'left',
  heading1: 'Offline First',
  heading2: 'Com Service Workers',
  img: 'assets/imgs/offline.gif',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web APP',
  heading2: '',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['Programa no estilo Front-End', 'Já é offline', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: 'left',
  heading1: 'Instalável',
  heading2: 'Com Web App Manifest',
  gif: '',
  img: 'assets/imgs/manifest.gif',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web APP',
  heading2: '',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['Programa no estilo Front-End', 'Já é offline', 'O usuário Installa se quiser'],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: 'left',
  heading1: 'Plataforma',
  heading2: 'Desktop + Mobile',
  gif: '',
  img: 'assets/imgs/so-chrome.png',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web APP',
  heading2: '',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['Programa no estilo Front-End', 'Já é offline', 'O usuário Installa se quiser', 'Onde quiser'],
  bgColor: '#3f3333',
  primaryColor: '#ff9800',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'O que dá para fazer?',
  heading2: 'Com apenas* HTML, CSS e JS',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'GetUserMedia API',
  heading2: 'Acesso a câmera',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web Speech API',
  heading2: 'Assistente virtual',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Ambient Light API',
  heading2: 'Evento luz',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Gamepad API',
  heading2: 'Joystick direto no Browser',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Web VR',
  heading2: 'Realidade Virtual',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Mais…',
  heading2: 'Muito mais',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#2a0d3f',
  primaryColor: '#88fd00',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Extensões para Chrome',
  heading2: 'Adicionando features a WEB',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#fcbdff',
  primaryColor: '#12a0c5',
  secondaryColor: '#4b4b4b'
}, {
  type: '',
  heading1: 'T-Rex Gamepad',
  heading2: 'Para gamers do momento sem internet',
  gif: '',
  imgRight: 'assets/imgs/t-rex.png',
  imgLeft: 'assets/imgs/joypad.png',
  list: ['', '', ''],
  bgColor: '#fcbdff',
  primaryColor: '#12a0c5',
  secondaryColor: '#4b4b4b'
}, {
  type: '',
  heading1: 'Onde estudar?',
  heading2: 'Chrome Developers',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#440006',
  primaryColor: '#00bdff',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: '',
  heading2: '',
  img: 'assets/imgs/castshow.png',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#440006',
  primaryColor: '#00bdff',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Follow me',
  heading2: '@afonsopacifer',
  gif: '',
  imgRight: 'assets/imgs/octocat.png',
  imgLeft: 'assets/imgs/twitter.png',
  list: ['', '', ''],
  bgColor: '#440006',
  primaryColor: '#00bdff',
  secondaryColor: '#dddddd'
}, {
  type: '',
  heading1: 'Obrigado!',
  heading2: 'Vá além com a WEB',
  gif: '',
  imgRight: '',
  imgLeft: '',
  list: ['', '', ''],
  bgColor: '#440006',
  primaryColor: '#00bdff',
  secondaryColor: '#dddddd'
}];

exports.default = slides;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoTracker = function videoTracker(videoElementId, cb1, cb2) {
  var controlTracker = new tracking.ColorTracker(['magenta', 'yellow']);

  var move = void 0;

  controlTracker.on('track', function (e) {

    if (e.data.length === 0) {
      move = true;
    } else {
      if (move) {
        if (e.data[0].color === 'magenta') cb1();
        if (e.data[0].color === 'yellow') cb2();
      }
      move = false;
    }
  });

  return tracking.track(videoElementId, controlTracker, { camera: true });
};

exports.default = videoTracker;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var newSynthesis = function newSynthesis(text) {

  var msg = new SpeechSynthesisUtterance();

  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = text;
  msg.lang = 'pt-BR';

  return msg;
};

exports.default = newSynthesis;

/***/ })
/******/ ]);