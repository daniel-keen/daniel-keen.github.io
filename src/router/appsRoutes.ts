import AppsView from '@/views/AppsView.vue'
import ItemDetailsView from '@/views/ItemDetailsView.vue'

export const appsRoutes = [
  {
    path: '/apps',
    name: 'apps',
    component: AppsView,
  },
  {
    path: '/apps/:appId',
    name: 'app-details',
    component: ItemDetailsView,
    props: true,
  },
];
