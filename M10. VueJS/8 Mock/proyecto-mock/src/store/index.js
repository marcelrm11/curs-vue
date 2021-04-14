import Vue from 'vue'
import Vuex from 'vuex'
// import pelis from './../api/peliculas_mock.json'
import pelis from './../assets/peliculas_mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelis,
    filters:
    {
      search: '',
      available: true
    }
  },
  getters: {
    FilteredPelis(state){
      let peliculas = state.pelis()
      //if en funcio dels filtres i return la part del array corresponent
      return peliculas
    }
  },
  mutations: {
  }
})
