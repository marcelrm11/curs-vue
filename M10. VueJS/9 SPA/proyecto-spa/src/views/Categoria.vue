<template>
    <div class="container mt-5">
        <h1 class="mb-5">Pagina {{$route.params.categoria}}</h1>
        <div class="d-flex align-items-center justify-content-around">
            <div v-for="(categoria,index) in botiga" :key="index">
                <div v-if="$route.params.categoria == categoria.cat">
                    <img :src="categoria.img" width="400" height="300" class="rounded-lg">
                </div>
            </div>
        </div>
        <b-button variant="warning" :to="{name: 'Botiga'}" class="mt-3 font-weight-bold" size="lg">Botiga</b-button>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        name: 'Categoria',
        computed: {
            ...mapState(['botiga'])
        }
    }
</script>