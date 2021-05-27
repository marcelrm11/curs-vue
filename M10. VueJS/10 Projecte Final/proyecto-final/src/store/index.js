import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [],
    users: [],
    albums: [],
    usersCount: []
  },
  mutations: {
    fillPictures(state,picturesAction) {
      state.pictures = picturesAction
    },
    fillUsers(state,usersAction) {
      state.users = usersAction;
    },
    createAlbums(state) {
      if (!state.albums.length) {
        let totalAlbums = state.pictures[state.pictures.length-1].albumId;
        for (let i = 1; i <= totalAlbums; i++) {
          let albumTemp = []
          for (let k = 0; k < state.pictures.length; k++) {
            if (state.pictures[k].albumId == i) {
              albumTemp.push(state.pictures[k])
            }
          }
          state.albums.push(albumTemp)
        }
      }
    },

    ///////////// CHECK PARA COMPROBAR FUNCIONES EN CONSOLA ///////////
    check(state){
      let totalAlbums = state.pictures[state.pictures.length-1].albumId
      console.log(totalAlbums)
    }
    ///////////////////////////////////////////////////////////////////
  },
  actions: {
    getPictures: async function ({commit}) {
      const data = await fetch('http://jsonplaceholder.typicode.com/photos');
      const picturesTemp = await data.json();
      commit('fillPictures',picturesTemp);
      commit('createAlbums')
    },
    getUsers: async function ({commit}) {
      const data = await fetch('http://jsonplaceholder.typicode.com/users');
      const usersTemp = await data.json();
      commit('fillUsers',usersTemp);
    }
  },
  modules: {
  }
})
