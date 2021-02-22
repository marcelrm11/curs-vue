var frase1="Tens un cotxe de color ";

alert("Las frases salen en la consola :)")

var color1=prompt("De quin color és el teu cotxe?");
frase1+=color1;
console.log(frase1);

var color2=prompt("Digues un altre color");

var frase2=frase1.slice(0,frase1.search(color1))+color2;
console.log(frase2);

var nuevaVocal=prompt("Per quina vocal vols substituir les o's?");
var fraseLoca=frase2.replace(/o/gi,nuevaVocal);
console.log(fraseLoca);


