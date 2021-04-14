<template>
  <div id="app" class="container mt-5">
    <Home></Home>
    <Titulo></Titulo>
  </div>
</template>

<script>
import Home from './views/Home'
import Titulo from './components/Titulo'

export default {
  name: 'App',
  components:{
    Home,
    Titulo
  }
}
</script>

