import { createRouter, createWebHashHistory } from 'vue-router'
import { gamesRoutes } from './gamesRoutes'
import { appsRoutes } from './appsRoutes'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MusicView from '@/views/MusicView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...gamesRoutes,
    ...appsRoutes,
    {
      path: '/music',
      name: 'music',
      component: MusicView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
