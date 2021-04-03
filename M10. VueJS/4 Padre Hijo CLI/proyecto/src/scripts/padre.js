import Hijo from '@/components/Hijo'

export default {
    name: 'Padre',
    data() {
        return {
            mensajePadre: 'Soy el mensaje del Padre'
        }
    },
    components: {
        Hijo
    }
}