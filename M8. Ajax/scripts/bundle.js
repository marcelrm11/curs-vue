/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// recorda fer el git Bash i npm run build\n$(document).ready(function () {\n  $(\"#joke\").click(function (e) {\n    e.preventDefault();\n    $.getJSON(\"http://api.icndb.com/jokes/random\", function (data) {\n      console.log(data);\n      $(\"#jokesList\").html(\"\\n                \".concat(data.value.joke, \"\\n                \"));\n    });\n  }); // s'ha de fer amb el metode fetch (post?)\n\n  var chistes;\n  $.getJSON(\"http://api.icndb.com/jokes\", function (data) {\n    chistes = data.value;\n    $(\"#searchbtn\").click(function (e) {\n      e.preventDefault();\n      var chiste = $(this.joke);\n      console.log(chistes);\n      $.each(chistes, function (i, item) {\n        if (item.joke.indexOf(joke) !== -1) {}\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;