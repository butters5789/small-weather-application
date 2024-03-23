<script setup>
  defineProps({
    title: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <article class="ui-card">
    <header class="ui-card__header">
      <h2 class="ui-card__header-title">{{ title }}</h2>
    </header>

    <div class="ui-card__body">
      <slot />
    </div>
  </article>
</template>

<style lang="scss">
  .ui-card {
    background-color: rgba(var(--white), 1);
    box-shadow: var(--elevation-2);
    border-radius: 0.2rem;

    .ui-card__header {
      padding: 1.5em 1em 0.5em;
      border-bottom: 1px solid rgba(var(--black), 0.1);
    }

    .ui-card__header-title {
      font-size: var(--font-size-large);
      letter-spacing: var(--letter-spacing-small);
      font-weight: var(--font-weight-bold);
    }

    .ui-card__body {
      padding: 1em;
    }
  }
</style>
