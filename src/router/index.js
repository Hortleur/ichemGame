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
      component:() => import('../views/Contact.vue'),
      meta: { transition: 'slide-top'}
    },
    {
      path:'/formation',
      name:'formation',
      component:() => import('../views/Formation.vue'),
      meta: { transition: 'slide-right'}
    },
    {
      path:'/temoignage',
      name:'temoignage',
      component:() => import('../views/Temoignage.vue'),
      meta: { transition: 'slide-down'}
    },
    {
      path:'/presentation',
      name:'presentation',
      component:() => import('../views/Presentation.vue'),
      meta: { transition: 'slide-left'}
    }
  ]
})

export default router
