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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// recorda fer el git Bash i npm run build\nvar app = new Vue({\n  el: '#app',\n  data: {\n    titulo: 'Hola mundo con Vue',\n    message: 'SORPRESA!',\n    frutas: ['Manzana', 'Pera', 'Platano'],\n    verduras: [{\n      nombre: 'Judias',\n      cantidad: 8\n    }, {\n      nombre: 'Acelgas',\n      cantidad: 5\n    }, {\n      nombre: 'Puerros',\n      cantidad: 3\n    }],\n    nuevaVerdura: '',\n    total: 0,\n    fondo: 'bg-dark',\n    color: true\n  },\n  methods: {\n    agregarVerdura: function agregarVerdura() {\n      console.log(\"diste click\");\n      this.verduras.push({\n        nombre: this.nuevaVerdura,\n        cantidad: 0\n      });\n      this.nuevaVerdura = '';\n      localStorage.setItem('dbName', JSON.stringify(this.verduras));\n    },\n    otroMetodo: function otroMetodo() {}\n  },\n  computed: {\n    sumarVerduras: function sumarVerduras() {\n      this.total = 0;\n\n      var _iterator = _createForOfIteratorHelper(this.verduras),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          verdura = _step.value;\n          this.total = this.total + verdura.cantidad;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return \"TOTAL: \" + this.total;\n    }\n  },\n  created: function created() {\n    var datosDB = JSON.parse(localStorage.getItem('dbName'));\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

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