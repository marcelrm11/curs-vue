<template>
    <div class="text-center">
        <h1>Super Titulo</h1>
        <h2>numero Padre: {{numero}}</h2>
        <Hijo></Hijo>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Hijo from './Hijo'

    export default {
        name: 'Titulo',
        components: {
            Hijo
        },
        computed:{
            ...mapState(['numero'])
        }
    }
</script>