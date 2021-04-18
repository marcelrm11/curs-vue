import Vue from 'vue'
import Vuex from 'vuex'
// import pelis from './../api/peliculas_mock.json'
import pelis from './../assets/peliculas_mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelis,
    clicked: false,
    filters: {
      search: '',
      picked: 'all'
    }
  },
  getters: {
    FilteredPelis(state) {
      let peliculas = state.pelis()
      let option = state.filters.picked
      let search = state.filters.search.toLowerCase()

      if (state.clicked) {
        if (search.length>2) {
          if (option == "available") {
            peliculas = peliculas.filter(peli => peli.available)
          } else if (option == "not-available") {
            peliculas = peliculas.filter(peli => !peli.available)
          }
          peliculas = peliculas.filter(peli => peli.title.toLowerCase().search(search) > -1)
        }
        state.clicked = false
        return peliculas
      }
      else {
        if (option == "available") {
          peliculas = peliculas.filter(peli => peli.available)
        } else if (option == "not-available") {
          peliculas = peliculas.filter(peli => !peli.available)
        }
        return peliculas
      }

      // if (pelicula.available===state.filters.available){...}

    }
  },
  mutations: {
    Search(state) {
      state.clicked = true
    }
    /*     SetAvailable(state){
          state.filters.available = !state.filters.available
        } */
  }
})