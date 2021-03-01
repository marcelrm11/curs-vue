/* 
YEAH - boto +/- multiplica per (-1)
YEAH - boto % divideix per 100
YEAH - el boto coma
- si segueixo apretant el boto igual... mirar què ha de fer
- error si divideixo per 0
- si clico dos operacions seguides, que faci la ultima clicada
- limitar el numero de decimals
*/

var cifra = "";
var acumulado = 0;
var primera_op = true;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var resultado=false;
var comma=false;

function display_numero(numero) {
    // document.getElementById("display").value=cifra+numero;
    display.value=cifra+numero;
    cifra = document.getElementById("display").value;
}

function coma() {
    if (comma==false){
        if (document.getElementById("display").value==cifra){
            document.getElementById("display").value=cifra+".";
            cifra = document.getElementById("display").value;
        }
        else {
            cifra=0;
            document.getElementById("display").value=cifra+".";
            cifra = document.getElementById("display").value;
        }
    }
    comma=true;
}

function operacionPrevia(operacion) {
    if(sumar){
        acumulado += parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    else if(restar){
        acumulado -= parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    else if (multiplicar){
        acumulado *= parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    else if (dividir) {
        acumulado /= parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    else if(resultado) {
        acumulado=parseFloat(document.getElementById("display").value);
    }
    cifra = ""; 
    sumar=false;
    restar=false;
    multiplicar=false;
    dividir=false;
    primera_op=false;
    resultado=false;
    comma=false;
    operacion=true;
}

function reset() {
    cifra = 0;
    acumulado = 0;
    document.getElementById("display").value=acumulado;
    primera_op=true;
    sumar=false;
    restar=false;
    multiplicar=false;
    dividir=false;
    resultado=false;
    comma=false;
}

function signo() {
    cifra=document.getElementById("display").value;
    cifra=parseFloat(cifra)*(-1);
    document.getElementById("display").value=parseFloat(cifra);
}

function percent() {
    cifra=document.getElementById("display").value;
    cifra=parseFloat(cifra)/100;
    document.getElementById("display").value=parseFloat(cifra);
}

function igual() {
    if(sumar){
        document.getElementById("display").value=acumulado+parseFloat(cifra);
    }
    else if (restar) {
        document.getElementById("display").value=acumulado-parseFloat(cifra);
    }
    else if (multiplicar) {
        document.getElementById("display").value=acumulado*parseFloat(cifra);
    }
    else if (dividir) {
        document.getElementById("display").value=Math.round(acumulado/parseFloat(cifra));
    }
    sumar=false;
    restar=false;
    multiplicar=false;
    dividir=false;
    resultado=true;
    comma=false;
}

function suma() {
    sumar=true;
    operacionPrevia(sumar);
}

function resta() {
    if (primera_op==false) {
        restar=true;
        operacionPrevia(restar);
    }
    else {
        acumulado=parseFloat(cifra);
        document.getElementById("display").value=acumulado;
        cifra="";
        restar=true;
        primera_op=false;
        comma=false;
    }
}

function multiplicacion() {
    if (primera_op==false){
        multiplicar=true;
        operacionPrevia(multiplicar);
    }
    else {
        acumulado=parseFloat(cifra);
        document.getElementById("display").value=acumulado;
        cifra="";
        multiplicar=true;
        primera_op=false;
        comma=false;
    }
}

function division() {
    if (primera_op==false) {
        dividir=true;
        operacionPrevia(dividir);
    }
    else {
        acumulado=parseFloat(cifra);
        document.getElementById("display").value=Math.round(acumulado);
        cifra="";
        dividir=true;
        primera_op=false;
        comma=false;
    }
}
