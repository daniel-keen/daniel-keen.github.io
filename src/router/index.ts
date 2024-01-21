import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { gamesRoutes } from './gamesRoutes'
import { appsRoutes } from './appsRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...gamesRoutes,
    ...appsRoutes,
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
