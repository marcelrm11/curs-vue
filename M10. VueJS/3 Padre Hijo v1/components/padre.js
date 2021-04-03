Vue.component('padre', {
    template: //html
    `
    <div class="bg-info p-3">
        <h1 >{{mensajePadre}}</h1>
        <hijo :atributo="hijito"></hijo>
    </div>
    `,
    data() {
        return {
            mensajePadre: 'Hola soy tu Padre',
            hijito: 'soy un niñato'
        }
    }
})