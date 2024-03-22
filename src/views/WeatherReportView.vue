<script setup>
  import { watchEffect } from 'vue'
  import { useForecastStore } from '@/stores/forecast'

  import cities from '@/data/cities/cities_20000.csv'

  const forecast = useForecastStore()

  const props = defineProps({
    location: {
      type: String,
      default: '',
    },
  })

  const searchCities = (query) => {
    const queryArray = query.replace(/, /g, ',').split(',')

    const filteredCities = cities.filter((city) => {
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

    return filteredCities.length === 0 ? filteredCities[0] : filteredCities
  }

  watchEffect(() => {
    searchCities(props.location)
  })
</script>

<template>
  <main>
    <section>
      <h2>Next hours</h2>
      {{ location }}
    </section>

    <section>
      <h2>Next 5 days</h2>
    </section>
  </main>
</template>
