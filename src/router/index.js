import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: () => import('../views/Portofolio.vue'),
  },
  {
    path: '/kosbosshouse',
    name: 'kosbosshouse',
    component: () => import('../views/KosBossHouse.vue'),
    meta: { title: 'Kos Boss House' }
  },
  {
    path: '/parako',
    name: 'parako',
    component: () => import('../views/Parako.vue'),
    meta: { title: 'Booking Parking' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
