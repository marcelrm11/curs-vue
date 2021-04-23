<template>
  <div class="botiga container mt-5">
    <h1>Pagina de Botiga</h1>
    <div class="d-flex flex-column flex-md-row justify-content-around mt-5">
      <div v-for="(categoria,index) in botiga" :key="index">
        <router-link id="categoria"
          :to="{name:'Categoria', params: {categoria: categoria.cat}}" 
          class="d-flex flex-column align-items-center mx-3 mb-5">
            <img :src="categoria.img" class="w-100 rounded-top">
            <span class="font-weight-bold py-2 bg-dark w-100 text-light rounded-bottom">{{categoria.cat}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'Botiga',
    computed: {
      ...mapState(['botiga'])
    }
  }
</script>

<style scoped>
  span {
    font-size: 1.5rem
  }

  #categoria:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    text-decoration: none;
  }
</style>