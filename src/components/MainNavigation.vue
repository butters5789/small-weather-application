<script setup>
  import { useRoute } from 'vue-router'

  import UINavigationTab from '@/components/componentLibrary/UINavigationTab.vue'

  const route = useRoute()

  const links = [
    {
      location: 'Rio de Janeiro',
    },
    {
      location: 'Beijing',
    },
    {
      location: 'Los Angeles',
    },
  ]
</script>

<template>
  <nav class="main-navigation" role="navigation">
    <RouterLink
      v-for="link in links"
      :key="link.location"
      :to="{
        name: 'WeatherReportView',
        query: { location: link.location },
      }"
    >
      <UINavigationTab
        :title="link.location"
        :is-selected="route.query.location === link.location"
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
