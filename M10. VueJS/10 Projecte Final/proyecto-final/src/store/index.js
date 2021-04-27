import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [],
    users: [],
    albums: []
  },
  mutations: {
    fillPictures(state,picturesAction) {
      state.pictures = picturesAction
    },
    fillUsers(state,usersAction) {
      state.users = usersAction;
    },
    createAlbums(state) {
      // const albumId = 1;
      const albumsCount = []

      for (let k = 0; k < state.pictures.length; k++) {
        console.log(state.pictures[k]);
        // if (state.pictures[k].albumId != state.pictures[k-1].albumId) {
        //   albumsCount.push(state.pictures[k].albumId)
        // }
      }

      // for (let j = 1; j < 100; j++) {
      //   for (let i = 0; i < state.pictures.length; i++) {
      //     const album = []
      //     if (state.pictures[i].albumId == albumId) {
      //       album.push(state.pictures[i])
      //     }
      //   }        
      // }

      // console.log(albumsCount);
      // console.log(state.albums);
    }
  },
  actions: {
    getPictures: async function ({commit}) {
      const data = await fetch('http://jsonplaceholder.typicode.com/photos');
      const picturesTemp = await data.json();
      commit('fillPictures',picturesTemp)
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
