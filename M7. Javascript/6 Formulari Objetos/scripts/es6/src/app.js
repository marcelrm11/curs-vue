// recorda fer el git Bash i npm run build
let productList = [];

class Product {
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
        this.id = name+price+year;
    }
    show(){
        const container = document.getElementById("productList");
        container.innerHTML = `
        <div id="${this.id}" class="container my-2 border px-4 py-3 d-flex justify-content-between align-items-center border rounded-lg">
                <div>
                    <h6 class="d-inline mr-2">Product Name:</h6>
                    <p class="d-inline mr-2">${this.name}</p>
                </div>
                <div>
                    <h6 class="d-inline mr-2">Product Price:</h6>
                    <p class="d-inline mr-2">${this.price}</p>
                </div>
                <div>
                    <h6 class="d-inline mr-2">Product Year:</h6>
                    <p class="d-inline mr-2">${this.year}</p>
                </div>
                <div>
                    <button class="btn btn-warning remove"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>`;
    }

    alternativeShow(){
        // creo la caja para el producto dentro de productList
        let container = document.getElementById("productList").appendChild(document.createElement("div"));
        container.className = "container my-2 border px-4 py-3 d-flex justify-content-between align-items-center border rounded-lg";
        container.id = this.name+this.price+this.year;
        // creo la caja y los tags para el product Name
        let box1 = container.appendChild(document.createElement("div"));
        let pNameTag = box1.appendChild(document.createElement("h6"));
        pNameTag.className = "d-inline mr-2";
        pNameTag.innerText = "Product Name:";
        let pName = box1.appendChild(document.createElement("p"));
        pName.className = "d-inline mr-2";
        pName.innerText = this.name;
        // creo la caja y los tags para el product Price
        let box2 = container.appendChild(document.createElement("div"));
        let pPriceTag = box2.appendChild(document.createElement("h6"));
        pPriceTag.className = "d-inline mr-2";
        pPriceTag.innerText = "Product Price:";
        let pPrice = box2.appendChild(document.createElement("p"));
        pPrice.className = "d-inline mr-2";
        pPrice.innerText = this.price+"€";
        // creo la caja y los tags para el product Year
        let box3 = container.appendChild(document.createElement("div"));
        let pYearTag = box3.appendChild(document.createElement("h6"));
        pYearTag.className = "d-inline mr-2";
        pYearTag.innerText = "Product Year:";
        let pYear = box3.appendChild(document.createElement("p"));
        pYear.className = "d-inline mr-2";
        pYear.innerText = this.year;
        // creo la caja para el botón de borrar
        let box4 = container.appendChild(document.createElement("div"));
        let pBtnTag = box4.appendChild(document.createElement("button"));
        pBtnTag.className = "btn btn-warning remove";
        pBtnTag.innerHTML = '<i class="far fa-trash-alt"></i>';
    }
}

document.getElementById("saveButton").addEventListener("click",addProduct,false);
document.getElementById("name").addEventListener("input",limpiar,false);
document.getElementById("price").addEventListener("input",limpiar,false);
yearList();

const cierres = document.getElementsByClassName("close");
for (let i = 0; i < cierres.length; i++) {
    cierres[i].addEventListener("click",close,false);
};

function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    
    if (valid(name,price) && !repeat(name,price,year)) {
        const product = new Product(name,price,year);
        productList.push(product);
        notifyAdd();
        product.show();
    }
    console.log(productList);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("year").value = "";
    setEliminar();
}

function setEliminar() {
    const eliminar = document.getElementsByClassName("remove");
    for (let i = 0; i < eliminar.length; i++) {
        eliminar[i].addEventListener("click",remove,false);    
    }
}

function remove(e) {
    const x = e.currentTarget.parentElement;
    x.parentElement.className = "hidden";
    notifyDelete();
    const id = x.parentElement.id;
    for (let i = 0; i < productList.length; i++) {
        if (id == productList[i].id) {
            productList.splice(i,1);
        };
    }
    console.log(productList);
}

function notifyAdd() {
    document.getElementById("notificationAdd").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("notificationAdd").classList.add("hidden");
    }, 5000);
}

function notifyDelete() {
    document.getElementById("notificationDelete").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("notificationDelete").classList.add("hidden");
    }, 5000);
}

function close(e) {
    e.currentTarget.parentElement.classList.add("hidden");
}

function repeat(name,price,year) {
    let repeated = false;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name == name &&
            productList[i].price == price &&
            productList[i].year == year) {
            document.getElementById("name").classList.add("is-invalid");
            document.getElementById("name").setCustomValidity("Este producto ya existe");
            document.getElementById("name").reportValidity();
            repeated = true;
        }
    }
    return repeated;
}

function valid(name,price) {
    const numb = /[0-9]/;
    if (name=="") {
        document.getElementById("name").classList.add("is-invalid");
        document.getElementById("name").setCustomValidity("Especifica el nombre del producto");
        document.getElementById("name").reportValidity();
        return false;
    }
    else if (!numb.test(price) || price <0) {
        document.getElementById("price").classList.add("is-invalid");
        document.getElementById("price").setCustomValidity("Introduce una cantidad válida");
        document.getElementById("price").reportValidity();
        return false;
    }
    else {return true;}
}

function limpiar(e) {
    e.target.setCustomValidity("");
    e.target.reportValidity();
    e.target.classList.remove("is-invalid");
}

function yearList() {
    let d = new Date();
    let y = d.getFullYear();
    for (let i = y; i >= (y-50); i--) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        document.getElementById("year").appendChild(option);
    }
}