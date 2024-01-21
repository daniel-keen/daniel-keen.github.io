import GamesView from '@/views/GamesView.vue'
import ItemDetailsView from '@/views/ItemDetailsView.vue'

export const gamesRoutes = [
  {
    path: '/games',
    name: 'games',
    component: GamesView,
  },
  {
    path: '/games/:gameId',
    name: 'game-details',
    component: ItemDetailsView,
    props: true,
  },
];
