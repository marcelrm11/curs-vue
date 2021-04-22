<template>
  <div id="app">
    <Buscador></Buscador>
  </div>
</template>

<script>
import Buscador from './components/Buscador'

export default {
  name: 'App',
  components: {
    Buscador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
