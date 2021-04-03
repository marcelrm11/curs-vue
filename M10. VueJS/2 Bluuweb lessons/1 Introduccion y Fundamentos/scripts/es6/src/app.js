// recorda fer el git Bash i npm run build

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        message: 'SORPRESA!',
        frutas: ['Manzana','Pera','Platano'],
        verduras: [
            {nombre: 'Judias', cantidad: 8},
            {nombre: 'Acelgas', cantidad: 5},
            {nombre: 'Puerros', cantidad: 3}
        ],
        nuevaVerdura: '',
        total: 0,
        fondo: 'bg-dark',
        color: true
    },
    methods: {
        agregarVerdura () {
            console.log("diste click");
            this.verduras.push({
                nombre: this.nuevaVerdura, cantidad: 0
            });
            this.nuevaVerdura = '';
            localStorage.setItem('dbName',JSON.stringify(this.verduras));
        },
        otroMetodo () {

        }
    },
    computed: {
        sumarVerduras() {
            this.total = 0;
            for(verdura of this.verduras){
                this.total = this.total + verdura.cantidad;
            }
            return "TOTAL: " + this.total;
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('dbName'));
    }
})