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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dice = [];\nvar Die = /** @class */ (function () {\n    function Die(holder, index) {\n        var _this = this;\n        this.holder = holder;\n        this.index = index;\n        this.holder = holder;\n        this.div = document.createElement('div');\n        this.div.classList.add('die');\n        this.holder.appendChild(this.div);\n        this.div.addEventListener('click', function () { return _this.roll(); });\n        this.value = -1;\n        this.roll();\n        this.div.addEventListener('dblclick', function () {\n            _this.div.remove();\n            dice.splice(dice.findIndex(function (die) { return die.value === _this.value; }), 1);\n        });\n    }\n    Die.prototype.roll = function () {\n        this.value = Math.floor(Math.random() * 6) + 1;\n        this.div.textContent = this.value.toString();\n    };\n    return Die;\n}());\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var addDieBtn = document.getElementById('AddDie');\n    if (addDieBtn) {\n        addDieBtn.addEventListener('click', function () {\n            var dieHolder = document.getElementById('dieholder');\n            if (dieHolder) {\n                var die = new Die(dieHolder, dice.length);\n                dice.push(die);\n            }\n        });\n    }\n    var rerollBtn = document.getElementById('Reroll');\n    if (rerollBtn) {\n        rerollBtn.addEventListener('click', function () {\n            dice.forEach(function (die) { return die.roll(); });\n        });\n    }\n    var sumBtn = document.getElementById('SumAll');\n    if (sumBtn) {\n        sumBtn.addEventListener('click', function () {\n            var sum = dice.reduce(function (acc, curr) { return acc + curr.value; }, 0);\n            alert(sum);\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ })

/******/ });