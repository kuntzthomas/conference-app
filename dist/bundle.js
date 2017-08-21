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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_talk_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_index_js__ = __webpack_require__(2);
//alert("Conférence App démarré !");



let talkService = new __WEBPACK_IMPORTED_MODULE_0__common_talk_service__["a" /* default */]();
let layout = new __WEBPACK_IMPORTED_MODULE_1__layout_index_js__["a" /* default */]();

talkService.findAllSpeakers().then(speakers => {
  speakers.map(speaker => speaker.firstname).forEach(speakerName => {
    console.log(speakerName);
  });
});

layout.render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TalkService {
  findAllSpeakers() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", "http://localhost:3000/speakers", true);
      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200) resolve(JSON.parse(req.responseText));
          else console.log("Erreur peandant le chargement de la page");
        }
      };
      req.send("null");
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TalkService;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_html__);


class Layout {
  render() {
    document.querySelector("body").innerHTML = __WEBPACK_IMPORTED_MODULE_0__layout_html___default.a;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<header>Ici Bientôt un logo</header>\r\n<nav>Ici bientôt un menu</nav>\r\n<section id=main-view>\r\n    Ici le contenu principal en attente de chargement\r\n</section>\r\n<footer>Ici bientôt un pied de page</footer>";

/***/ })
/******/ ]);