<template>
  <div id="app" class="container">
    <Pare></Pare>
  </div>
</template>

<script>
import Pare from './components/Pare'

export default {
  name: 'App',
  components: {
    Pare
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
