<script setup>
  import TitleBar from '@/components/TitleBar.vue'
  import MainNavigation from '@/components/MainNavigation.vue'
  import LastUpdated from '@/components/LastUpdated.vue'
</script>

<template>
  <TitleBar />
  <MainNavigation />

  <div class="app-main">
    <RouterView />
  </div>

  <LastUpdated />
</template>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .app-main {
    flex: 1;
    background: linear-gradient(
      180deg,
      rgba(32, 94, 137, 1) 0%,
      rgba(65, 154, 187, 1) 100%
    );
    overflow: auto;

    @media only screen and (min-width: 769px) {
      padding: 0 5em;
    }

    @media only screen and (min-width: 1025px) {
      padding: 0 10em;
    }

    @media only screen and (min-width: 1281px) {
      padding: 0 15em;
    }

    @media only screen and (min-width: 1401px) {
      padding: 0 20em;
    }
  }
</style>
