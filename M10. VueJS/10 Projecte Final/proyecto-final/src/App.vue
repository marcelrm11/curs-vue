<template>
  <div id="app">
    <Header/>
    <div class="page-content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/styles/_variables";

#app {
  font-family: $myFont, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-content;
  position: relative;
  min-height: 100vh;
}

.page-content {
  padding-bottom: 4.5rem; //footer height
}

</style>
