<script setup></script>

<template>
  <header class="title-bar">
    <RouterLink :to="{ name: 'Home' }">
      <h1 class="title-bar__app-title">Simple Weather</h1>
    </RouterLink>

    <span class="material-icons title-bar__search-icon">search</span>
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

    .title-bar__search-icon {
      color: rgba(var(--white), 1);
    }
  }
</style>
