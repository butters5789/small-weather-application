<script setup>
  import { useForecastStore } from '@/stores/forecast'

  const forecast = useForecastStore()
</script>

<template>
  <footer class="last-updated">
    <button class="last-updated__refresh" @click="forecast.getForecast()">
      <span class="material-icons">refresh</span>
    </button>

    Last updated on {{ forecast.lastUpdated?.format('MMM D hh:mma') }}
  </footer>
</template>

<style lang="scss">
  .last-updated {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8em;
    height: 2em;
    background-color: rgba(var(--brand-blue), 1);
    color: rgba(var(--white), 1);
    padding: 0 1em;

    .last-updated__refresh {
      display: flex;
      color: rgba(var(--white), 1);
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
</style>
