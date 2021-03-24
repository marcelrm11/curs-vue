// recorda fer el git Bash i npm run build

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana','Pera','Platano'],
        verduras: [
            {nombre: 'Judias', cantidad: 8},
            {nombre: 'Acelgas', cantidad: 5},
            {nombre: 'Puerros', cantidad: 3}
        ],
        nuevaVerdura: ''
    },
    methods: {
        agregarVerdura () {
            console.log("diste click");
            this.verduras.push({
                nombre: this.nuevaVerdura, cantidad: 0
            })
        },
        otroMetodo () {

        }
    }
})