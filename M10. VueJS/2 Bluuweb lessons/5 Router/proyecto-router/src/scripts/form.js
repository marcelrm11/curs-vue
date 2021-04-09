export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            select: null,
            animales: [
                {value: null, text: 'Seleccione un animal'},
                {value: 'perro', text: 'Guau, guau'},
                {value: 'gato', text: 'Miau, miau'},
                {value: 'pato', text: 'Cuack, cuack'}
                ],
            animales2: [
                {value: 'perro', text: 'Guau, guau'},
                {value: 'gato', text: 'Miau, miau'},
                {value: 'pato', text: 'Cuack, cuack'}
            ],
            radio: null,
            checkbox: []
        }
    },
    computed: {
        comprobar() {
            return this.texto.length > 2 ? true : false
        }
    }
}