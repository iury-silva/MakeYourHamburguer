import Vue from 'vue'
import VueRouter from 'vue-router'

const DefaultTitle = " | Make your hamburguer"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      title: "Cadastro"+DefaultTitle,
      requiresAuth: false,
    },
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue'),
    meta:{
      title: "Pedidos"+DefaultTitle,
      requiresAuth: false,
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
