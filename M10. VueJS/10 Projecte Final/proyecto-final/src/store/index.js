import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [],
    users: [],
    albums: [],
    usersCount: [],
    picturesCount: [],
    search: ''
  },
  getters: {
    FilteredUsers(state) {
      let users = state.users;
      if (state.search.length > 0) {
        let search = state.search.toLowerCase()
        users = users.filter(user => user.name.toLowerCase().search(search) > -1)
        }
        return users
    }
  },
  mutations: {
    SetSearch(state,value) {
      state.search = value
    },

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
    setUsersCount(state) {
      if (!state.usersCount.length) {
        for (let i = 0; i < state.users.length; i++) {
          let obj = {
            "index": i,
            "name": state.users[i].name,
            "count": 0
          };
          state.usersCount.push(obj)
        }
      }
    },

    setPicturesCount(state) {
      if (!state.picturesCount.length) {
        for (let i = 0; i < state.pictures.length; i++) {
          let obj = {
            "index": i,
            "title": state.pictures[i].title,
            "count": 0
          };
          state.picturesCount.push(obj)          
        }
      }
    },

    addUser(state,name){      //la primera vez cuenta x2
      for (let i = 0; i < state.usersCount.length; i++) {
          if (state.usersCount[i].name == name) {
              state.usersCount[i].count++
          }
      }
  },

    addPicture(state,title){      //la primera vez cuenta x2
      for (let i = 0; i < state.picturesCount.length; i++) {
          if (state.picturesCount[i].title == title) {
              state.picturesCount[i].count++
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
  }
})
