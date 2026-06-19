import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MusicView from '@/views/MusicView.vue'
import GamesView from '@/views/GamesView.vue'
import ArtView from '@/views/ArtView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/art',
      name: 'art',
      component: ArtView
    },
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
