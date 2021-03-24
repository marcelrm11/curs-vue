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

eval("// recorda fer el git Bash i npm run build\nvar app = new Vue({\n  el: '#app',\n  data: {\n    titulo: 'Hola mundo con Vue',\n    frutas: ['Manzana', 'Pera', 'Platano'],\n    verduras: [{\n      nombre: 'Judias',\n      cantidad: 8\n    }, {\n      nombre: 'Acelgas',\n      cantidad: 5\n    }, {\n      nombre: 'Puerros',\n      cantidad: 3\n    }],\n    nuevaVerdura: ''\n  },\n  methods: {\n    agregarVerdura: function agregarVerdura() {\n      console.log(\"diste click\");\n      this.verduras.push({\n        nombre: this.nuevaVerdura,\n        cantidad: 0\n      });\n    },\n    otroMetodo: function otroMetodo() {}\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

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