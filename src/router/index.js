import { createRouter, createWebHistory } from 'vue-router'
import WeatherReportView from '@/views/WeatherReportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WeatherReportView',
      component: WeatherReportView,
      props: (route) => ({
        location: route.query.location,
      }),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('@/views/AboutView.vue')
    // }
  ],
})

export default router
