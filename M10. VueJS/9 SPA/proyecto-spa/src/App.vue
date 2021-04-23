<template>
  <div id="app">
    <div id="nav" class="bg-light">
      <b-navbar toggleable="md" type="light">
        <b-container>
          <b-avatar src="https://placekitten.com/300/300" :to="{name: 'Home'}"></b-avatar><span class="mr-auto ml-1">Super Kitty</span>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'Clients'}">Clients</b-nav-item>
            <b-nav-item :to="{name: 'Proveidors'}">Proveidors</b-nav-item>
            <b-nav-item :to="{name: 'Magatzem'}">Magatzem</b-nav-item>
            <b-nav-item-dropdown text="Botiga" toggle-class="nav-link-custom" right>
              <b-dropdown-item :to="{name: 'Botiga'}">Botiga</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item v-for="(categoria,index) in botiga" :key="index" :to="{name: 'Categoria', params: {categoria: categoria.cat}}">{{categoria.cat}}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :to="{name: 'Components'}">Components</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
      <b-container>
        <router-view />
      </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['botiga'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-link:hover {
  color: #42b983 !important;
}
</style>
