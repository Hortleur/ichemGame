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
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Video.vue')
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
    }
  ]
})

export default router
