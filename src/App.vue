<script setup>
  import TitleBar from '@/components/TitleBar.vue'
  import MainNavigation from '@/components/MainNavigation.vue'
</script>

<template>
  <TitleBar />
  <MainNavigation />

  <div class="app-content">
    <RouterView />
  </div>
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .app-content {
    flex: 1;
  }
</style>
