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

eval("// recorda fer el git Bash i npm run build\n$(document).ready(function () {\n  $(\"#joke\").click(function (e) {\n    e.preventDefault();\n    $.getJSON(\"http://api.icndb.com/jokes/random\", function (data) {\n      console.log(data);\n      $(\"#jokesList\").html(\"\\n                \".concat(data.value.joke, \"\\n                \"));\n    });\n  });\n  var lista = [];\n  fetch('http://api.icndb.com/jokes').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var x = data.value;\n\n    for (var i = 0; i < x.length; i++) {\n      lista.push(x[i].joke);\n    }\n  });\n  $(\"#searchbtn\").click(function (e) {\n    e.preventDefault();\n    $(\"#jokesResult\").html(\"10 Best Joke results\");\n    var search = document.getElementById(\"searchcontent\").value.toLowerCase();\n    var count = 0;\n\n    for (var i = 0; i < lista.length; i++) {\n      var pos = lista[i].toLowerCase().search(search);\n\n      if (count == 10) {\n        break;\n      } else if (pos !== -1) {\n        $(\"#jokesResult\").html($(\"#jokesResult\").html() + \"\\n                <li> \".concat(lista[i], \" </li>\"));\n        count++;\n      }\n    }\n\n    if (count == 0) {\n      $(\"#jokesResult\").html(\"\\n                No results <i class=\\\"far fa-sad-tear\\\"></i> Try again with other words\");\n    }\n  });\n  $(\"#clearbtn\").click(function (e) {\n    e.preventDefault();\n    $(\"#jokesResult\").html(\"10 Best Joke results\");\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

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