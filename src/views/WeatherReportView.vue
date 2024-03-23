<script setup>
  import { watchEffect } from 'vue'
  import { useForecastStore } from '@/stores/forecast'

  import cities from '@/data/cities/cities_20000.csv'

  import ForecastNextDays from '@/components/ForecastNextDays.vue'
  import ForecastNextHours from '@/components/ForecastNextHours.vue'

  const forecast = useForecastStore()

  const props = defineProps({
    location: {
      type: String,
      default: '',
    },
  })

  const searchCities = (query) => {
    const queryArray = query.replace(/, /g, ',').split(',')

    return cities.filter((city) => {
      const searchWeight = [
        'city_name',
        'state_code',
        'country_code',
        'country_full',
        'lat',
        'lon',
      ].reduce((weight, searchKey) => {
        return queryArray.find((searchTerm) => {
          return city[searchKey].toLowerCase() === searchTerm.toLowerCase()
        })
          ? (weight += 1)
          : weight
      }, 0)

      return searchWeight >= queryArray.length
    })
  }

  const displaySearchResults = (cities) => {
    console.log('more than 1 result', cities)
  }

  watchEffect(() => {
    const filteredCities = searchCities(props.location)

    filteredCities.length === 1
      ? forecast.getForecast(filteredCities[0].lat, filteredCities[0].lon)
      : displaySearchResults(filteredCities)
  })
</script>

<template>
  <main class="weather-report-view">
    <ForecastNextHours :hourlyForecast="forecast.hourly" :numberOfHours="24" />

    <ForecastNextDays :dailyForecast="forecast.daily" :numberOfDays="5" />
  </main>
</template>

<style lang="scss">
  .weather-report-view {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 1.5em 1em;
  }
</style>
