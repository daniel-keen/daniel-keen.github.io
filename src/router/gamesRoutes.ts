import GamesView from '@/views/GamesView.vue'
import ProductView from '@/views/ProductView.vue'

export const gamesRoutes = [
  {
    path: '/games',
    name: 'games',
    component: GamesView,
  },
  {
    path: '/games/:productId',
    name: 'game-details',
    component: ProductView,
    props: true,
  },
];
