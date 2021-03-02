var nom = ["m","a","r","c","e","l"," ","r","o","i","g",8];
var obj = new Map();

console.log("partim del nom "+'"'+nom.join('')+'"');


for (let i = 0; i < nom.length; i++) {
    const lletra = nom[i];
    
    // obj[lletra] = (isNaN(obj[lletra]) ? 1 : obj[lletra] + 1);

    if(isNaN(obj[lletra])){
        obj[lletra]=1;
    }
    else { 
        obj[lletra]=obj[lletra]+1;
    }
}
console.log(obj);
