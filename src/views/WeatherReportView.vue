<script setup>
  import { ref, watchEffect } from 'vue'
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

  const searchResults = ref([])

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

  watchEffect(() => {
    searchResults.value = searchCities(props.location)

    if (searchResults.value.length === 1) {
      forecast.lat = searchResults.value[0].lat
      forecast.lon = searchResults.value[0].lon
      forecast.getForecast()
    }
  })
</script>

<template>
  <main class="weather-report-view">
    <div
      v-if="!searchResults.length || searchResults.length > 1"
      class="weather-report-view__search-results"
    >
      <span v-if="!searchResults.length">
        No results match the search criteria.
      </span>

      <template v-if="searchResults.length > 1">
        <RouterLink
          v-for="city in searchResults"
          :key="city.city_id"
          class="weather-report-view__search-result"
          :to="{
            name: 'WeatherReportView',
            query: {
              q: `${city.city_name},${city.state_code},${city.country_code}`,
            },
          }"
        >
          {{ `${city.city_name}, ${city.state_code}, ${city.country_code}` }}
        </RouterLink>
      </template>
    </div>

    <template v-else>
      <ForecastNextHours
        :hourlyForecast="forecast.hourly"
        :numberOfHours="24"
      />

      <ForecastNextDays :dailyForecast="forecast.daily" :numberOfDays="5" />
    </template>
  </main>
</template>

<style lang="scss">
  .weather-report-view {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 1.5em 1em;

    .weather-report-view__search-results {
      display: flex;
      flex-direction: column;
      border-radius: 0.2rem;
      padding: 1em;
      background-color: rgba(var(--white), 1);
      box-shadow: var(--elevation-2);
    }

    .weather-report-view__search-result {
      padding: 0.5em;
      color: rgba(var(--black), 0.6);
      border-bottom: 1px solid rgba(var(--black), 0.1);

      &:last-of-type {
        border-bottom: none;
      }

      &:hover {
        background-color: rgba(var(--black), 0.1);
        color: rgba(var(--black), 0.87);
      }
    }
  }
</style>
