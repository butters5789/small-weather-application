import { createRouter, createWebHistory } from 'vue-router'

import { defaultLocation } from '@/data/locations/Locations'

import WeatherReportView from '@/views/WeatherReportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: {
        name: 'WeatherReportView',
        query: {
          q: defaultLocation.state
            ? `${defaultLocation.city},${defaultLocation.state},${defaultLocation.country}`
            : `${defaultLocation.city},${defaultLocation.country}`,
        },
      },
    },
    {
      path: '/location',
      name: 'WeatherReportView',
      component: WeatherReportView,
      props: (route) => ({
        location: route.query.q,
      }),
    },
  ],
})

export default router
