import GamesView from '@/views/GamesView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'

export const gamesRoutes = [
  {
    path: '/games',
    name: 'games',
    component: GamesView,
  },
  {
    path: '/games/:productId',
    name: 'game-details',
    component: ProductDetailsView,
    props: true,
  },
];
