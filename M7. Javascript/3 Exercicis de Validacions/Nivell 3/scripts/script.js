var busqueda, mail1, psw1, mail2, psw2, prov;

function saveSearch(inp) {
    busqueda=inp.value;
}
function saveLogin(mail,psw) {
    mail1=mail.value; 
    psw1=psw.value;
}
function saveSignin(mail,psw,prv) {
    mail2=mail.value; 
    psw2=psw.value; 
    prov=prv.value;
}

function showValidations() {
    field0.textContent = busqueda;
    field1.textContent = mail1;
    field2.textContent = psw1;
    field3.textContent = mail2;
    field4.textContent = psw2;
    field5.textContent = prov;
}

function limpiar(inp) {
    inp.setCustomValidity("");
    inp.reportValidity();
    inp.classList.remove("is-invalid");
}

function valid(element) {
    element.classList.add("is-valid");
}

function invalid(element,message) {
    element.classList.add("is-invalid");
    element.setCustomValidity(message);
    element.reportValidity();
}

function validateSearch() {
    var x = document.forms["searchForm"]["search"].value;
    var msg = "Introduce al menos 3 caracteres. Dale caña al mono, que es de goma ;)";
    if (x.length<3) {
        invalid(search,msg);
        // return false;
    }
    else {valid(search);}
    return false;
}

function validateLogin() {
    var x = document.forms["loginForm"]["email"].value;
    // var y = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
    var y = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}/;
    if (y.test(x)){
        var z = document.forms["loginForm"]["password"].value;
        var msg1 = "No lo puedes dejar vacío!";
        if(z==""){
            invalid(password,msg1);
            // return false;
        }
        // else {
        //     return (true);
        // }
    } 
    else if (y.test(x)==false) {
        var msg2 = "Introduce una dirección válida, ¡tú puedes!";
        invalid(email,msg2);
        // return false;
    }
    return false;
}

function validateEmail(inp) {
    var x = inp.value;
    // var y = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
    var y = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}/;
    // if (y.test(x)){
    //     // return (true);
    // } 
    /* else */ if (y.test(x)==false) {
        var msg = "Introduce una dirección válida, ¡tú puedes!";
        invalid(inp,msg);
        // return false;
    }
    return false;
}

function comparePasswords(inp1,inp2) {
    var x = inp2.value;
    var y = inp1.value;
    if (y!=x) {
        var msg1 = "Las constraseñas no coinciden";
        invalid(inp1, msg1);
        // return false;
    }
    else if (x=="") {
        var msg2 = "Crea una contraseña";
        invalid(inp2, msg2);
        // return false;
    }
    else {valid(email2); valid(password2); valid(password3); valid(province);}
    return false;
}

function checkProvince(inp) {
    if (inp.value=="none") {
        var msg = "Selecciona una";
        invalid(inp, msg);
        // return false;
    }
    return false;
}

function securePassword(inp) {
    var x = inp.value;
    var mayuscula = /[A-Z]/;
    var msg1 = "Debe contener al menos una mayúscula";
    var minuscula = /[a-z]/;
    var msg2 = "Debe contener al menos una minúscula";
    var min_caracteres = 8;
    var msg3 = "Debe tener un mínimo de 8 caracteres";
    if (x.length>=min_caracteres) {
        if (minuscula.test(x)) {
            if (mayuscula.test(x)) {
                // return true;
                valid(email);
                valid(password);
                return false;
            } else {
                invalid(inp,msg1);
                return false;
            }
        } else {
            invalid(inp,msg2);
            return false;
        }
    }
    else {
        invalid(inp,msg3);
        return false;
    }
}