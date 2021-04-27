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
    path: '/pictures/:album',
    name: 'AlbumDetail',
    component: () => import(/* webpackChunkName: "users" */ '../views/AlbumDetail.vue')
  },
  {
    path: '/users/:username',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "users" */ '../views/UserDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
