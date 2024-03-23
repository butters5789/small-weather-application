<script setup>
  import { useForecastStore } from '@/stores/forecast'

  const forecast = useForecastStore()
</script>

<template>
  <footer class="last-updated">
    Last updated on {{ forecast.lastUpdated?.format('MMM D hh:mma') }}
  </footer>
</template>

<style lang="scss">
  .last-updated {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2em;
    background-color: rgba(var(--brand-blue), 1);
    color: rgba(var(--white), 1);
    padding: 0 1em;
  }
</style>
