import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients: [
      {name: "John", letter: "J"},
      {name: "Peter", letter: "P"},
      {name: "Daniela", letter: "D"},
      {name: "Claire", letter: "C"},
      {name: "Andrea", letter: "A"}
    ],
    botiga: [
      {cat: "Alimentació", img: require('@/assets/alimentacio.jpg')},
      {cat: "Congelats", img: require('@/assets/congelats.jpg')}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
