<script setup></script>

<template>
  <nav class="navigation__tabs" role="navigation">
    <RouterLink
      :to="{
        name: 'WeatherReportView',
        params: { location: 'Rio de Janeiro' },
      }"
    >
      Rio de Janeiro
    </RouterLink>

    <RouterLink
      :to="{
        name: 'WeatherReportView',
        params: { location: 'Beijing' },
      }"
    >
      Beijing
    </RouterLink>

    <RouterLink
      :to="{
        name: 'WeatherReportView',
        params: { location: 'Los Angeles' },
      }"
    >
      Los Angeles
    </RouterLink>
  </nav>
</template>
