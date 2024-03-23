import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import ForecastModel from '@/data/forecast/forecast.model'

const weatherApiUrl = import.meta.env.VITE_WEATHER_API_ENDPOINT
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY

export const useForecastStore = defineStore('forecast', () => {
  const daily = ref([])
  const hourly = ref([])
  const lastUpdated = ref(null)

  const getForecast = async (lat, lon) => {
    const { data } = await axios.get(
      `${weatherApiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${weatherApiKey}`,
    )

    daily.value = data.daily.map((daily) =>
      ForecastModel.fromApiDaily(daily, data.timezone),
    )
    hourly.value = data.hourly.map((hourly) =>
      ForecastModel.fromApiHourly(hourly, data.timezone),
    )
    lastUpdated.value = ForecastModel.fromApiLastUpdated(data.current.dt)
  }

  return { daily, hourly, lastUpdated, getForecast }
})
