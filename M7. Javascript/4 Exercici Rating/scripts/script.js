var divs, iconos, caritas=[], rating=-1, pos;

document.addEventListener("DOMContentLoaded",function () {

    divs = document.querySelectorAll(".icon-container");
    iconos = document.querySelectorAll("i");

    for (let i = 0; i < divs.length; i++) {
        caritas.push(divs[i].id);
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click",cambiar,false);
        divs[i].addEventListener("mouseover",pintar,false);
        divs[i].addEventListener("mouseout",despintar,false);
    }

    document.getElementById("gran-container").addEventListener("click",reset,false);
});
    
function cambiar(e) {
    rating = caritas.indexOf(e.currentTarget.id);

    for (let i = rating+1; i < divs.length; i++) {
        var x = divs[i].children;
        var caraVacia = x[0].id;
        var caraLlena = x[1].id;
        document.getElementById(caraVacia).classList.remove("hidden");
        document.getElementById(caraLlena).classList.add("hidden");        
    }

    for (let i = rating; i >= 0; i--){
        var x = divs[i].children;
        var caraVacia = x[0].id;
        var caraLlena = x[1].id;
        document.getElementById(caraVacia).classList.add("hidden");
        document.getElementById(caraLlena).classList.remove("hidden");
    }

    e.stopPropagation();
}

function pintar(e) {
    pos = caritas.indexOf(e.currentTarget.id);

    for (let i = pos; i >= rating; i--){
        var x = divs[i].children;
        var caraVacia = x[0].id;
        var caraLlena = x[1].id;
        document.getElementById(caraVacia).classList.add("hidden");
        document.getElementById(caraLlena).classList.remove("hidden");
    }
}

function despintar(e) {
    pos = caritas.indexOf(e.currentTarget.id);

    if (pos>=rating) {
    
        for (let i = pos; i > rating; i--){
            var x = divs[i].children;
            var caraVacia = x[0].id;
            var caraLlena = x[1].id;
            document.getElementById(caraVacia).classList.remove("hidden");
            document.getElementById(caraLlena).classList.add("hidden");
        }
    }
}

function reset(e) {
    for (let i = 0; i < divs.length; i++) {
        var x = divs[i].children;
        var caraVacia = x[0].id;
        var caraLlena = x[1].id;
        document.getElementById(caraVacia).classList.remove("hidden");
        document.getElementById(caraLlena).classList.add("hidden");        
    }
    rating=-1;
}

