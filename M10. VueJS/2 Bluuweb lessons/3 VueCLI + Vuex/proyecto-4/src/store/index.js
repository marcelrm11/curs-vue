import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero: 10,
    cursos: []
  },
  mutations: {
    aumentar(state,n){
      state.numero += parseFloat(n)
    },
    disminuir(state,n){
      state.numero -= parseFloat(n) 
    },
    llenarCursos(state,cursosAccion){
      state.cursos = cursosAccion
    }
  },
  actions: {
    obtenerCursos: async function ({commit}) {
      const data = await fetch('./../../public/api/cursos.json');
      const cursos = await data.json();
      commit('llenarCursos', cursos)
    }
  },
  modules: {
  }
})
