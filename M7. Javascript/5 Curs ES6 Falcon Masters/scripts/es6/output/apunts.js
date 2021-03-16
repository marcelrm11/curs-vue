"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// recorda fer el git Bash i npm run build

/* DIFERENCIES let const var
let es una variable de tota la vida
const es una que no es pot modificar
les dues tenen proteccio de bloc (e.g. si les faig dins d'un if, no es llegiran fora)
var ja no es fa servir*/

/* TEMPLATE STRINGS
amb es6 es poden escriure les variables dins del text de manera facil 
s'han de fer servir els accents oberts enlloc de cometes*/
var nom1 = "Marcel";
var edat1 = 30;
var pais1 = "Catalunya";
console.log("El ".concat(nom1, " t\xE9 ").concat(edat1, " anys i \xE9s de ").concat(pais1, "."));
/* FUNCIONES FLECHA 
es una forma de optimizar funciones. si es una funcion anonima y de un solo parametro, se pueden omitir algunos simbolos para hacerla con menos lineas de codigo, como se ve en el ejemplo a continuacion, usando el metodo map para un array:*/

var ej1 = array.map(function (parametro) {
  return "".concat(parametro, " tiene una longitud de ").concat(parametro.length);
});
var ej2 = array.map(function (parametro) {
  return "".concat(parametro, " tiene una longitud de ").concat(parametro.length);
});
/* VALORES POR DEFECTO
en els arrays, es poden especificar default values per evitar que surti undefined si no s'envia la info. aquest valor s'especifica quan declares l'objecte tipo aixi (pais te per defecte Catalunya):*/

var info = [nom2, edat2, pais2 = "Catalunya", ofici2];
/* DESTRUCTURAR ARRAYS
es una forma de acceder a los parametros de un array dandoles un nombre y guardandolos en una variable. ejemplo: */

var persona = ["Marcel", 30, "Catalunya", "Buscavidas"]; // array normal

var nom3 = persona[0],
    edat3 = persona[1],
    pais3 = persona[2],
    ofici3 = persona[3]; // guardar en variables els parametres de l'array
// puc guardar-ne nomes alguns, els altres els deixo en blanc:

var a = persona[0],
    b = persona[1],
    d = persona[3]; //ejemplo en una funcion de una sola linea:

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 3),
      nombre = _ref2[0],
      pais = _ref2[2];

  return console.log(nombre, pais);
};

mostrarInfo(persona);
/* DESTRUCTURAR OBJETOS
el mismo concepto pero con objetos: aixo serveix per si jo vull accedir al nom, enlloc de fer usuario.nom, faig directament aixo*/

var usuario = {
  // aixo es un objecte i s'escriu aixi
  nom4: "Marcel",
  edat4: 30,
  ciutat4: "Barcelona",
  ofici4: "Sorpresa"
};
var nom5 = usuario.nom5,
    ciutat5 = usuario.ciutat5; // aqui destructuro l'objecte, accedint amb els mateixos noms claus que té l'objecte. no cal deixar res en blanc perque ja els identifica pel nom, no per la posicio

var mostrarInfo2 = function mostrarInfo2(_ref3) {
  var nom5 = _ref3.nom5,
      ofici5 = _ref3.ofici5;
  return console.log("".concat(nom5, " es ").concat(ofici5));
}; // per cridar alguns parametres des d'una funcio ja no cal posar '=usuario' com es faria amb un array, perque ja li passes l'objecte i ho identifica


mostrarInfo(usuario);
/* CLASSES Y HERENCIA 
es como hacer una template de una estructura similar a un objeto*/

var usuario6 = /*#__PURE__*/function () {
  function usuario6(nom6, edat6) {
    _classCallCheck(this, usuario6);

    this.nom6 = nom6;
    this.edat6 = edat6;
    alert("Hola"); // todo el código que se añada aquí, se ejecutará en cada nueva instancia
  }

  _createClass(usuario6, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo(mensaje) {
      return mensaje; // dentro de una clase tambien se pueden agregar funciones o métodos, que pueden ser llamados de la misma forma que las propiedades
    }
  }, {
    key: "mostrarInfo3",
    value: function mostrarInfo3() {
      return "\n            nom7: ".concat(this.nom6, " <br></br>\n            edat7: ").concat(this.edat6, " <br></br>");
    }
  }]);

  return usuario6;
}(); // esta clase tiene 2 propiedades que las recibe como parametros (tambien pueden ser fijas)

/* despues, puedo hacer instancias de esa clase asi: */


var marcel6 = new usuario6("Marcel Roig", 30);
console.log(marcel.nom6); //mostrar propiedad de una instancia

console.log(marcel.mostrarSaludo("Hola crack")); //mostrar método de esta instancia

console.log(marcel.mostrarInfo3());
/* una nueva clase puede heredar todas las propiedades y métodos de otra clase, y añadirle de nuevas: */

var estudiante = /*#__PURE__*/function (_usuario) {
  _inherits(estudiante, _usuario);

  var _super = _createSuper(estudiante);

  function estudiante(nom6, edat6, carrera) {
    var _this;

    _classCallCheck(this, estudiante);

    //rep com a parametres els que volem heredar dels antics i els nous. carrera es el que volem afegir
    _this = _super.call(this, nom6, edat6); //aquests son els que heredem

    _this.carrera = carrera; //i aquest es el nou

    return _this;
  }

  _createClass(estudiante, [{
    key: "mostrarInfo3",
    value: function mostrarInfo3() {
      //si volem modificar un mètode, l'hem de reescriure tot
      return "\n            nom7: ".concat(this.nom6, " <br></br>\n            edat7: ").concat(this.edat6, " <br></br>\n            carrera: ").concat(this.carrera, " <br></br>");
    }
  }]);

  return estudiante;
}(usuario6);

var pepe = new estudiante("Pepe, 30, aeronautica");
console.log(pepe.mostrarInfo3());
/*hay un par de formas de simplificar la sintaxis de los objetos:
1. si la clave y el valor (parametro) coinciden, se puede omitir la clave.
2. si hay una funcion dentro del objeto, se puede solo poner el nombre de la funcion y luego abrir llaves directamente*/

/* se pueden recibir muchos parametros de forma simplificada y ordenarlos en un array, si no hay necesidad de asociarlos a un par clave-valor */

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos); //ha rebut tots els parametres i els ha posat en un array anomenat 'datos'
};

mostrarDatos("Marcel", 30, "Bcn", "i tots els parametres que vulgui");
/* tambien se puede hacer lo mismo para pasarle los parametros */

var mostrarDatos2 = function mostrarDatos2() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log(datos);
};

var arrayDatos = ["Marcel", 30, "Bcn", "etc"];
mostrarDatos2.apply(void 0, arrayDatos); //aixo li passa els parametres de l'array de forma individualitzada, enlloc de passar-ho com a array

/* PROMESAS
parece algo como para validar funciones...? */

var promesa = new Promise(function (resolve, reject) {
  if (true) {
    resolve("mensaje de exito");
  } //codigo a ejecutar
  else if (false) {
      reject("mensaje de fracaso");
    }
});
promesa.then(function (mensaje) {
  alert(mensaje); //codigo a ejecutar si resolve
});
promesa["catch"](function (mensaje) {
  alert(mensaje); //codigo a ejecutar si reject
});
/* IMPORT EXPORT
en l'arxiu principal s'han d'importar petites parts de codi JS creades en arxius separats. 
import {cosa_a_importar} from 'path de l'arxiu'

en l'arxiu on crees la cosa (e.g.funcio) s'ha de posar 'export' davant de la definicio de la fucio (sense cometes). una altra manera d'exportar es al final de l'arxiu posar 'export {blabla}'
tambe es pot fer export default que vol dir que aquell arxiu nomes te una cosa. aixo permet canviar-li el nom a l'hora d'importar-lo
*/