import AppsView from '@/views/AppsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'

export const appsRoutes = [
  {
    path: '/apps',
    name: 'apps',
    component: AppsView,
  },
  {
    path: '/apps/:productId',
    name: 'app-details',
    component: ProductDetailsView,
    props: true,
  },
];
