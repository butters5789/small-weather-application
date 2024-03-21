<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div
    class="ui-navigation-tab"
    :class="{ 'ui-navigation-tab--selected': isSelected }"
  >
    {{ title }}
  </div>
</template>

<style lang="scss">
  .ui-navigation-tab {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    color: rgba(var(--black), 0.6);
    text-transform: uppercase;
    font-size: var(--font-size-standard);
    letter-spacing: var(--letter-spacing-standard);
    font-weight: var(--font-weight-bold);
    border-bottom: 3px solid transparent;

    &:hover {
      color: rgba(var(--black), 0.87);
      background-color: rgba(var(--black), 0.1);
      border-bottom: 3px solid rgba(var(--black), 0.2);
    }

    &:active {
      background-color: rgba(var(--black), 0.2);
      border-bottom: 3px solid rgba(var(--black), 0.3);
    }

    &.ui-navigation-tab--selected {
      color: rgba(var(--black), 0.87);
      border-bottom: 3px solid rgba(var(--brand-red), 1);
    }
  }
</style>
