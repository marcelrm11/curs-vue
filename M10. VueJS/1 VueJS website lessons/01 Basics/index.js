const app = new Vue({
    el: '#app',
    data: {
        message1: 'Hello Vue!',
        message2: 'Bonito hover eh?',
        seen: true,
        babies: [
            {name: 'Belen', age: 35, location: 'Urgell'},
            {name: 'Aste', age: 34, location: 'Gracia'},
            {name: 'Romina', age: 33, location: 'Gracia'},
            {name: 'Miriam', age: 38, location: 'Poblenou'},
            {name: 'Aithne', age: 29, location: 'Masnou'},
            {name: 'Mar', age: 32, location: 'Sabadell'}
        ]
    },
    methods: {
        capitalizeName(){
            for (let i = 0; i < this.babies.length; i++) {
                this.babies[i].name = this.babies[i].name.toUpperCase()
            }
        },
        clicaste(){
            console.log('hiciste click')
        },
        hideText(){
            this.seen=false
        }
    }
})