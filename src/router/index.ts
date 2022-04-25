import { createRouter, createWebHistory } from 'vue-router'
import DashboardMain from '@/views/DashboardMain.vue'
import CustomersMain from '@/views/CustomersMain.vue'
import ProductsMain from '@/views/ProductsMain.vue'
import OrdersMain from '@/views/OrdersMain.vue'
import LoginMain from '@/views/LoginMain.vue'
import Analytics from "@/views/Analytics.vue";
import Notifications from "@/views/Notifications.vue";
import Activities from "@/views/Activities.vue";
import MainLayout from '@/components/layout/MainLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginMain',
      component: LoginMain
    },
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        { path: '',name: 'Dashboard',component: DashboardMain},
        { path: '/customers',name: 'CustomersMain',component: CustomersMain},
        { path: '/products',name: 'ProductsMain',component: ProductsMain},
        { path: '/orders',name: 'OrdersMain',component: OrdersMain},
        { path: '/analytics',name: 'Analytics',component: Analytics},
        { path: '/notifications',name: 'Notifications',component: Notifications},
        { path: '/activities',name: 'Activities',component: Activities},
      ]
    }

  ]
})

export default router
