import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/contact',
      name:'contact',
      component:() => import('../views/Contact.vue')
    },
    {
      path:'/formation',
      name:'formation',
      component:() => import('../views/Formation.vue')
    },
    {
      path:'/temoignage',
      name:'temoignage',
      component:() => import('../views/Temoignage.vue')
    },
    {
      path:'/presentation',
      name:'presentation',
      component:() => import('../views/Presentation.vue')
    }
  ]
})

export default router
