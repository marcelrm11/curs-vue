import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/Pictures.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/pictures/:albumId',
    name: 'AlbumDetail',
    component: () => import(/* webpackChunkName: "album" */ '../views/AlbumDetail.vue'),
    props: true
  },
  {
    path: '/users/:username',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "username" */ '../views/UserDetail.vue'),
    props: true
  },
  {
    path: '/pictures/:albumId/:picId',
    name: 'PicDetail',
    component: () => import(/* webpackChunkName: "picdetail" */ '../views/PicDetail.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
