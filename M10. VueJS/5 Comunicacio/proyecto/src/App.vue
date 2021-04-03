<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
