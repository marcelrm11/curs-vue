function getName() {
    var nom = document.getElementById("nom").value.toLocaleUpperCase();
    var cognom = document.getElementById("cognom").value.toLocaleUpperCase();
    document.getElementById("titol").innerHTML = "Partim del nom: " +nom+" "+cognom;
    var fullName = nom.concat(" ",cognom);
    return fullName;
}

// 1. LLETRES NOM
function lletres() {
    var nom = document.getElementById("nom").value.toLocaleUpperCase();
    var nomArray = [];
    for (let i = 0; i < nom.length; i++) {
        nomArray[i] = nom.charAt(i); 
    }
    document.getElementById("titol").innerHTML = "Aquestes son les lletres del nom:"
    document.getElementById("cos").innerHTML = nomArray.join("<br>");
}

// 2. TIPUS LLETRES
function tipusLletres() {
    var fullName = getName();
    var tipus = [];

    for (let i = 0; i < fullName.length; i++) {
        const lletra = fullName[i];
        const vocal = /[aeiou]/i;
        const numero = /[0-9]/;
        
        if (vocal.test(lletra)) {
            tipus.push("he trobat la vocal: "+lletra);
        }
        else if(numero.test(lletra)) {
            tipus.push("els noms de persones no contenen el numero: "+lletra);
        }
        else {
            tipus.push("he trobat la consonant: "+lletra);
        }
    }
    document.getElementById("cos").innerHTML = tipus.join("<br>");
}

// 3. FREQ. LLETRES
function freqLletres() {
    var fullName = getName();
    var obj = {};

    for (let i = 0; i < fullName.length; i++) {
        const lletra = fullName[i];

        if(isNaN(obj[lletra])){
            obj[lletra]=1;
        }
        else { 
            obj[lletra]=obj[lletra]+1;
        }
    }
    // const lletres = Object.keys(obj);
    // const freq = Object.values(obj);
    const output = Object.entries(obj);
    document.getElementById("cos").innerHTML = "Les lletres surten amb la freqüència següent:<br>"+output.join("<br>");
}

// 4. NOM I COGNOM
function fullName() {
    var fullName = getName();
    document.getElementById("cos").innerHTML = fullName;
}

// 5. EMAILS
function emails() {
    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

    var mail = /[A-Za-z0-9\-]+@[A-Za-z0-9\-ñ]+\.[A-Za-z]+/g;
    var n = str.match(mail);
    var mails = new Set(n);

    document.getElementById("titol").innerHTML = "S'han trobat aquests mails:";
    document.getElementById("cos").innerHTML = Array.from(mails).join("<br>");
}
