function calculadora(operador, valor1, valor2) {
    if (operador == "suma" || operador == "+") {
        var resultat = parseFloat(valor1) + parseFloat(valor2);
    }
    else if (operador == "resta" || operador == "-") {
        var resultat = parseFloat(valor1) - parseFloat(valor2);
    }
    else if (operador == "multiplicacion" || operador == "*" || operador == "x") {
        var resultat = parseFloat(valor1) * parseFloat(valor2);
    }
    else if (operador == "division" || operador == "/") {
        if (valor2 == 0) {
            resultat = "error, no puedes dividir por 0"
        }
        else {
        var resultat = parseFloat(valor1) / parseFloat(valor2);}
    }
    return resultat;
}

// alert("Empecemos! Para terminar, escribe 'salir' en la operacion.");
// var acumulado = parseFloat(prompt("Introduce el primer numero"));
// var operacion = "";

// while (operacion !== "salir") {

//     if (typeof(acumulado)  !== "number") {
//         acumulado = parseFloat(prompt("Volvamos a empezar, escribe el primer numero"));
//     }

//     var operacion = prompt("operacion").toLowerCase();
    
//     if (operacion == "salir") {
//         break;
//     }
//     else if (operacion == "reset") {
//         acumulado = "string";
//     }
//     else {
//         var numero = parseFloat(prompt("numero"));
//         var acumulado = calculadora(operacion, acumulado, numero);
//         alert("Resultado: "+acumulado);
//     }
// } ;

// alert("Adios!");


