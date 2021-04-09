import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
  path: '/photos/:id',
  name: 'Photos',
  component: () => import('../views/Photos.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/Grid.vue')
    },
    {
      path: '/cards',
      name: 'Cards',
      component: () => import('../views/Cards.vue')
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('../views/Form.vue')
        },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
