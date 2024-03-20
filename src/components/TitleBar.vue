<script setup></script>

<template>
  <header class="title-bar">
    <h1 class="title-bar__app-title">Simple Weather</h1>

    Search
  </header>
</template>

<style lang="scss">
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    height: 3.5em;
    padding: 1em;

    background-color: rgba(var(--brand-blue), 1);
    color: rgba(var(--white), 1);

    .title-bar__app-title {
      font-size: var(--font-size-large);
      letter-spacing: var(--letter-spacing-small);
      font-weight: var(--font-weight-bold);
    }
  }
</style>
