var nom = ["m","a","r","c","e","l"," ","r","o","i","g",8];

console.log("partim del nom "+'"'+nom.join('')+'"');

for (let i = 0; i < nom.length; i++) {
    const lletra = nom[i];
    if (lletra=="a" || lletra=="e" || lletra=="i" || lletra=="o" || lletra=="u") {
        console.log("he trobat la vocal: "+lletra);
    }
    else if(typeof lletra === "number") {
        console.log("els noms de persones no contenen el numero: "+lletra);
    }
    else {
        console.log("he trobat la consonant: "+lletra);
    }
}