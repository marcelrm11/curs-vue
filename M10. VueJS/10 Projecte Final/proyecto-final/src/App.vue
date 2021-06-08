<template>
  <div id="app">
    <Header />
    <div class="page-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
  import {
    mapActions,
    mapMutations
  } from 'vuex'
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    methods: {
      ...mapActions(['getUsers', 'getPictures']),
      ...mapMutations(['fillUsers', 'fillPictures', 'setUsersCount'])
    },
    created() {
      this.getUsers();
      this.getPictures();
    },
    mounted() {
      this.setUsersCount();
    },
  }
</script>

<style lang="scss">
  @import "@/styles/_variables";

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

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

  #back-btn {
    background-color: $secondary-content;
    border-color: $secondary-content;

    &:hover {
      background-color: $tertiary-content;
      border-color: $tertiary-content;
    }
  }

  #primary-btn {
    background-color: $primary-content;
    border-color: $primary-content;

    &:hover {
      background-color: $secondary-content;
      border-color: $secondary-content;
    }
  }
</style>