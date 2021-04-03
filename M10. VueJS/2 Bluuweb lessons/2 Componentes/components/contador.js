Vue.component('contador', {
    template: /*html*/`
    <div>
    <h3>{{numero}}</h3>
    <button @click="numero++">+</button>
    </div>
    `,               //importante envolverlo todo en un contenedor
    data(){
        return{
            numero: 0
        }
    }
});