<template>
    <div class="container">
        <div class="text-center">
            <img id="logo" alt="Vue logo" src="@/assets/logo.png">
            <h1>Buscador de <strong>Películas</strong> con Vuex</h1>
            <label for="busqueda" class="font-italic my-3">¿Qué película estás buscando?</label>
            <div id="cuadro-busqueda" class="container-fluid mt-3">
                <form class="d-flex">
                    <input id="busqueda" class="form-control mr-2" type="search" placeholder="Search"
                        aria-label="Search" v-model="filters.search" autocomplete="off">
                    <button class="btn btn-outline-success w-25" type="submit" @click="Search()"
                        @submit.prevent>Search</button>
                </form>
                <div class="mt-2">
                    <div class="form-check mx-2 d-inline">
                        <input class="form-check-input" type="radio" id="available" name="availability"
                            value="available" v-model="filters.picked">
                        <label class="form-check-label" for="available">
                            Available
                        </label>
                    </div>
                    <div class="form-check mx-2 d-inline">
                        <input class="form-check-input" type="radio" id="not-available" name="availability"
                            value="not-available" v-model="filters.picked">
                        <label class="form-check-label" for="not-available">
                            Not Available
                        </label>
                    </div>
                    <div class="form-check mx-2 d-inline">
                        <input class="form-check-input" type="radio" id="all" name="availability"
                            v-model="filters.picked" value="all">
                        <label class="form-check-label" for="all">
                            All
                        </label>
                    </div>
                </div>
            </div>
            <div class="container d-flex flex-wrap px-0">
                <Pelicula v-for="peli in FilteredPelis" :key="peli.id">
                    <template #title>{{peli.title}}</template>
                    <template #body>{{peli.description}}</template>
                    <template #footer>
                        <p class="m-0" v-if="peli.available">Available</p>
                        <p class="m-0 bg-danger" v-else>Not Available</p>
                    </template>
                </Pelicula>
            </div>
        </div>
    </div>
</template>

<script>
    import Pelicula from './Pelicula'
    import {
        mapGetters,
        mapState
    } from 'vuex'
    // import store from './../store/index'

    export default {
        name: 'Buscador',
        components: {
            Pelicula
        },
        computed: {
            ...mapGetters(['FilteredPelis']),
            ...mapState(['filters'])

            /*  available: {
                    get(){
                        return store.state.filters.available
                    },
                    set(value){
                        store.commit('SetAvailable', value)
                    }
                } */
        }
    }
</script>

<style>
    #logo {
        max-height: 50px;
    }

    strong {
        color: #41B883
    }

    #app {
        color: #35495E
    }

    .btn-outline-success {
        color: #41B883 !important;
        border-color: #41B883 !important;
    }

    .btn-outline-success:hover {
        color: white !important;
        background-color: #41B883 !important;
        border-color: #41B883 !important;
    }

    .form-control {
        color: #35495E !important;
        border-color: #a7b5c4 !important;
    }

    .form-control::placeholder {
        color: #6b7e92 !important
    }
</style>