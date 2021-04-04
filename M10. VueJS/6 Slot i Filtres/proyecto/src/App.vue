<template>
  <div id="app" class="container">
    <div id="imgdiv">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
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
#imgdiv{text-align: center;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
