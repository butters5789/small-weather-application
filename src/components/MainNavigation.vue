<script setup>
  import { useRoute } from 'vue-router'

  import { locations } from '@/data/Locations'

  import UINavigationTab from '@/components/componentLibrary/UINavigationTab.vue'

  const route = useRoute()

  const getQuery = (location) => {
    return location.state
      ? `${location.city},${location.state},${location.country}`
      : `${location.city},${location.country}`
  }
</script>

<template>
  <nav class="main-navigation" role="navigation">
    <RouterLink
      v-for="location in locations"
      :key="location.city"
      :to="{
        name: 'WeatherReportView',
        query: {
          q: getQuery(location),
        },
      }"
    >
      <UINavigationTab
        :title="location.city"
        :is-selected="route.query.q === getQuery(location)"
      />
    </RouterLink>
  </nav>
</template>

<style lang="scss">
  .main-navigation {
    display: flex;
    height: 3em;
    padding: 0 1em;
    background-color: rgba(var(--brand-off-white), 1);
    box-shadow: var(--elevation-1);
    z-index: 10;
  }
</style>
