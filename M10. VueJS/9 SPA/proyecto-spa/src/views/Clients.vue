<template>
  <div class="clients container mt-5">
    <h1 class="mb-5">Pagina de Clients</h1>
    <div id="lista" class="d-flex flex-column align-items-center">
      <b-list-group id="clients-list" v-for="client in clients" :key="client.id" style="max-width: 300px;" class="w-100">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar v-text="client.letter" variant="info" class="mr-3"></b-avatar>
          <span class="mr-auto">{{client.name}}</span>
          <b-button variant="outline-info" :to="{name: 'Client', params: {name: client.name}}">Info</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Clients',
    computed:{
      ...mapState(['clients'])
    }
  }
</script>