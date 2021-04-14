<template>
    <div>
        <input type="number" v-model="n" placeholder="Introduce la cantidad">
        <button class="btn btn-outline-info mx-2" @click="aumentar(n)">+</button>
        <button class="btn btn-outline-danger mx-2" @click="disminuir(n)">-</button>
        <h4>numero Hijo: {{numero}}</h4>
        <button class="btn btn-outline-success mx-2" @click="obtenerCursos">Obtener Cursos</button>
        <ul v-for="item of cursos" :key="item.id">
            <li>{{item.nombre}}</li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
    name: 'Hijo',
    data() {
        return {
            n:''
        }
    },
    computed: {
        ...mapState(['numero','cursos'])
    },
    methods: {
        ...mapMutations(['aumentar','disminuir']),
        ...mapActions(['obtenerCursos'])
    },
}
</script>