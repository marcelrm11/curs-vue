<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Padre></Padre>
    <Tio></Tio>
  </div>
</template>

<script>
import Padre from './components/Padre'
import Tio from './components/Tio'

export default {
  name: 'App',
  components: {
    Padre,
    Tio
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
