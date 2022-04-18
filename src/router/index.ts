import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '@/components/ContentView.vue'
import DashboardMain from '@/views/DashboardMain.vue'
import CustomersMain from '@/views/CustomersMain.vue'
import ProductsMain from '@/views/ProductsMain.vue'
import OrdersMain from '@/views/OrdersMain.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContentView,
      children: [
        { path: '',name: 'Dashboard',component: DashboardMain},
        { path: '/customers',name: 'CustomersMain',component: CustomersMain},
        { path: '/products',name: 'ProductsMain',component: ProductsMain},
        { path: '/orders',name: 'OrdersMain',component: OrdersMain}
      ]
    }
  ]
})

export default router
