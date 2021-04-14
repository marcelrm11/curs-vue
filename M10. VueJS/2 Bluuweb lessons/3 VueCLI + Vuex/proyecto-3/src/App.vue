<template>
  <div id="app" class="container mt-5">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
  import Cabecera from './components/Cabecera'
  import Lista from './components/Lista'

  export default {
    name: 'App',
    components: {
      Cabecera,
      Lista
    }
  }
</script>