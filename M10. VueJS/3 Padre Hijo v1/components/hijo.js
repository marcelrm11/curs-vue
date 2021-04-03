Vue.component('hijo',{
    template: //html
    `
    <div class="bg-light p-2 rounded">
        <h5>{{mensajeHijo}}</h5>
        {{atributo}}
    </div>
    `,
    data() {
        return {
            mensajeHijo: 'Yo soy el heredero de tu Imperio',
        }
    },
    props: ['atributo']
})