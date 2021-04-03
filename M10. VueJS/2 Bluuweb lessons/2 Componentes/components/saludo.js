Vue.component('saludo', {   //fijate en el tipo de comillas
    template: /*html*/`
    <div>
    <h1>{{saludo}}</h1>
    <h3>Hola que tal</h3>
    </div>
    `,               //importante envolverlo todo en un contenedor
    data(){
        return{
            saludo: 'Hola desde Vue'
        }
    }
});