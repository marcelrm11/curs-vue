function calculadora(operador, valor1, valor2) {
    if (operador == "suma") {
        var resultat = parseFloat(valor1) + parseFloat(valor2);
    }
    else if (operador == "resta") {
        var resultat = parseFloat(valor1) - parseFloat(valor2);
    }
    else if (operador == "multiplicacio") {
        var resultat = parseFloat(valor1) * parseFloat(valor2);
    }
    else if (operador == "divisio") {
        var resultat = parseFloat(valor1) / parseFloat(valor2);
    }
    return resultat;
}

alert("Aixo es una calculadora senzilla");
var num1 = prompt("Introdueix el primer valor");
var op = prompt("Escriu l'operacio a realitzar (suma, resta, multiplicacio, divisio)");
var num2 = prompt("Introdueix el segon valor");
var result = calculadora(op, num1, num2);
alert("El resultat de la teva operacio es "+result);
