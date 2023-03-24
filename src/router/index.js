import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: () => import('../views/ManagerView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/manager/product',
    name: 'manager_product',
    component: () => import('../views/ManagerProduct.vue')
  }
  ,
  {
    path: '/manager/product/:id',
    name: 'updateProduct',
    component: () => import('../views/UpdateProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
