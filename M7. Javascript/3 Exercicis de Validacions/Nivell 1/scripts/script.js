function limpiar(inp) {
    inp.setCustomValidity("");
    inp.reportValidity();
    inp.classList.remove("is-invalid");
}

function validateSearch() {
    var x = document.forms["searchForm"]["search"].value;
    if (x.length<3) {
        search.classList.add("is-invalid");
        search.setCustomValidity("Introduce al menos 3 caracteres. Dale caña al mono, que es de goma ;)");
        search.reportValidity();
        return false;
    }
}

function validateLogin() {
    var x = document.forms["loginForm"]["email"].value;
    // var y = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
    var y = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}/;
    if (y.test(x)){
        var z = document.forms["loginForm"]["password"].value;
        if(z==""){
            password.classList.add("is-invalid");
            password.setCustomValidity("No lo puedes dejar vacío!");
            password.reportValidity();
            return (false);
        }
        else {
            return (true);
        }
    } 
    else if (y.test(x)==false) {
        email.classList.add("is-invalid");
        email.setCustomValidity("Introduce una dirección válida, ¡tú puedes!");
        email.reportValidity();
        return (false);
    }
}

function validateEmail(inp) {
    var x = inp.value;
    // var y = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
    var y = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}/;
    if (y.test(x)){
        return (true);
    } 
    else if (y.test(x)==false) {
        inp.classList.add("is-invalid");
        inp.setCustomValidity("Introduce una dirección válida, ¡tú puedes!");
        inp.reportValidity();
        return (false);
    }
}

function checkPassword(inp) {
    var x = document.forms["signinForm"]["password2"].value;
    var y = inp.value;
    if (y!=x) {
        inp.classList.add("is-invalid");
        inp.setCustomValidity("Las constraseñas no coinciden");
        inp.reportValidity();
        return (false);
    }
    else if (x=="") {
        password2.classList.add("is-invalid");
        password2.setCustomValidity("Crea una contraseña");
        password2.reportValidity();
        return (false);
    }
}

function checkProvince(inp) {
    if (inp.value=="none") {
        inp.classList.add("is-invalid");
        inp.setCustomValidity("Selecciona una");
        inp.reportValidity();
        return (false);
    }
}
