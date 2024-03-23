<script setup>
  import { ref } from 'vue'

  const searchQuery = ref('')
</script>

<template>
  <header class="title-bar">
    <RouterLink :to="{ name: 'Home' }">
      <h1 class="title-bar__app-title">Simple Weather</h1>
    </RouterLink>

    <span class="title-bar__search">
      <input
        type="text"
        class="title-bar__search-input"
        placeholder="Search"
        v-model="searchQuery"
      />

      <RouterLink
        class="title-bar__search-button"
        :to="{
          name: 'WeatherReportView',
          query: {
            q: searchQuery,
          },
        }"
        @click="searchQuery = ''"
      >
        <span class="material-icons">search</span>
      </RouterLink>
    </span>
  </header>
</template>

<style lang="scss">
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    height: 4.5em;
    padding: 0 1em;
    background-color: rgba(var(--brand-blue), 1);
    box-shadow: var(--elevation-2);
    z-index: 20;

    .title-bar__app-title {
      color: rgba(var(--white), 1);
      font-size: var(--font-size-large);
      letter-spacing: var(--letter-spacing-small);
      font-weight: var(--font-weight-bold);
    }

    .title-bar__search {
      display: flex;
      align-items: center;
      gap: 0.8em;
    }

    .title-bar__search-input {
      height: 2em;
      border-radius: 0.4em;
      padding: 0 0.8em;
    }

    .title-bar__search-button {
      display: flex;
      color: rgba(var(--white), 1);
    }
  }
</style>
