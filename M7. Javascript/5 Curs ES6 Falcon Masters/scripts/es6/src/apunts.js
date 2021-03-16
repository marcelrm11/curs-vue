// recorda fer el git Bash i npm run build

/* DIFERENCIES let const var
let es una variable de tota la vida
const es una que no es pot modificar
les dues tenen proteccio de bloc (e.g. si les faig dins d'un if, no es llegiran fora)
var ja no es fa servir*/

/* TEMPLATE STRINGS
amb es6 es poden escriure les variables dins del text de manera facil 
s'han de fer servir els accents oberts enlloc de cometes*/
const nom1 = "Marcel";
const edat1 = 30;
const pais1 = "Catalunya";
console.log(`El ${nom1} té ${edat1} anys i és de ${pais1}.`)

/* FUNCIONES FLECHA 
es una forma de optimizar funciones. si es una funcion anonima y de un solo parametro, se pueden omitir algunos simbolos para hacerla con menos lineas de codigo, como se ve en el ejemplo a continuacion, usando el metodo map para un array:*/
const ej1 = array.map(function(parametro){
                return `${parametro} tiene una longitud de ${parametro.length}`;
            }); 
const ej2 = array.map(parametro => `${parametro} tiene una longitud de ${parametro.length}`);

/* VALORES POR DEFECTO
en els arrays, es poden especificar default values per evitar que surti undefined si no s'envia la info. aquest valor s'especifica quan declares l'objecte tipo aixi (pais te per defecte Catalunya):*/
const info = [nom2, edat2, pais2 = "Catalunya", ofici2];

/* DESTRUCTURAR ARRAYS
es una forma de acceder a los parametros de un array dandoles un nombre y guardandolos en una variable. ejemplo: */
const persona = ["Marcel", 30, "Catalunya", "Buscavidas"]; // array normal
const [nom3, edat3, pais3, ofici3] = persona; // guardar en variables els parametres de l'array
// puc guardar-ne nomes alguns, els altres els deixo en blanc:
const [a, b, , d] = persona;
//ejemplo en una funcion de una sola linea:
const mostrarInfo = ([nombre, , pais] = persona) => console.log(nombre,pais);
mostrarInfo(persona);

/* DESTRUCTURAR OBJETOS
el mismo concepto pero con objetos: aixo serveix per si jo vull accedir al nom, enlloc de fer usuario.nom, faig directament aixo*/
const usuario = {   // aixo es un objecte i s'escriu aixi
    nom4: "Marcel",
    edat4: 30,
    ciutat4: "Barcelona",
    ofici4: "Sorpresa"
}
const {nom5,ciutat5} = usuario; // aqui destructuro l'objecte, accedint amb els mateixos noms claus que té l'objecte. no cal deixar res en blanc perque ja els identifica pel nom, no per la posicio
const mostrarInfo2 = ( { nom5, ofici5 } ) => console.log(`${nom5} es ${ofici5}`);    // per cridar alguns parametres des d'una funcio ja no cal posar '=usuario' com es faria amb un array, perque ja li passes l'objecte i ho identifica
mostrarInfo(usuario); 

/* CLASSES Y HERENCIA 
es como hacer una template de una estructura similar a un objeto*/
class usuario6 {
    constructor(nom6, edat6){
        this.nom6 = nom6;
        this.edat6 = edat6;

        alert("Hola");  // todo el código que se añada aquí, se ejecutará en cada nueva instancia
    }
    mostrarSaludo(mensaje){
        return mensaje;  // dentro de una clase tambien se pueden agregar funciones o métodos, que pueden ser llamados de la misma forma que las propiedades
    }
    mostrarInfo3(){
        return `
            nom7: ${this.nom6} <br></br>
            edat7: ${this.edat6} <br></br>`;
    }
}           // esta clase tiene 2 propiedades que las recibe como parametros (tambien pueden ser fijas)
/* despues, puedo hacer instancias de esa clase asi: */
const marcel6 = new usuario6 ("Marcel Roig", 30);
console.log(marcel.nom6);       //mostrar propiedad de una instancia
console.log(marcel.mostrarSaludo("Hola crack"))   //mostrar método de esta instancia
console.log(marcel.mostrarInfo3());
/* una nueva clase puede heredar todas las propiedades y métodos de otra clase, y añadirle de nuevas: */
class estudiante extends usuario6 {
    constructor(nom6,edat6,carrera){    //rep com a parametres els que volem heredar dels antics i els nous. carrera es el que volem afegir
        super(nom6,edat6);  //aquests son els que heredem
        this.carrera = carrera; //i aquest es el nou
    }
    mostrarInfo3(){     //si volem modificar un mètode, l'hem de reescriure tot
        return `
            nom7: ${this.nom6} <br></br>
            edat7: ${this.edat6} <br></br>
            carrera: ${this.carrera} <br></br>`;
    }
}
const pepe = new estudiante ("Pepe, 30, aeronautica");
console.log(pepe.mostrarInfo3());

/*hay un par de formas de simplificar la sintaxis de los objetos:
1. si la clave y el valor (parametro) coinciden, se puede omitir la clave.
2. si hay una funcion dentro del objeto, se puede solo poner el nombre de la funcion y luego abrir llaves directamente*/

/* se pueden recibir muchos parametros de forma simplificada y ordenarlos en un array, si no hay necesidad de asociarlos a un par clave-valor */
const mostrarDatos = (...datos) => {
    console.log(datos);     //ha rebut tots els parametres i els ha posat en un array anomenat 'datos'
}
mostrarDatos("Marcel",30,"Bcn","i tots els parametres que vulgui");
/* tambien se puede hacer lo mismo para pasarle los parametros */
const mostrarDatos2 = (...datos) =>{
    console.log(datos);
}
const arrayDatos = ["Marcel",30,"Bcn","etc"];
mostrarDatos2(...arrayDatos);   //aixo li passa els parametres de l'array de forma individualitzada, enlloc de passar-ho com a array

/* PROMESAS
parece algo como para validar funciones...? */
const promesa = new Promise((resolve,reject)=>{
    if (true) { 
        resolve("mensaje de exito");
    }                           //codigo a ejecutar
    else if (false) {
        reject("mensaje de fracaso");
    }
});
promesa.then((mensaje)=>{
    alert(mensaje);     //codigo a ejecutar si resolve
});
promesa.catch((mensaje)=>{
    alert(mensaje);     //codigo a ejecutar si reject
});

/* IMPORT EXPORT
en l'arxiu principal s'han d'importar petites parts de codi JS creades en arxius separats. 
import {cosa_a_importar} from 'path de l'arxiu'

en l'arxiu on crees la cosa (e.g.funcio) s'ha de posar 'export' davant de la definicio de la fucio (sense cometes). una altra manera d'exportar es al final de l'arxiu posar 'export {blabla}'
tambe es pot fer export default que vol dir que aquell arxiu nomes te una cosa. aixo permet canviar-li el nom a l'hora d'importar-lo
*/