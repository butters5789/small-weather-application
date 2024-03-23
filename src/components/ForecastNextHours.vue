<script setup>
  import { computed } from 'vue'

  import UICard from '@/components/componentLibrary/UICard.vue'

  const props = defineProps({
    hourlyForecast: {
      type: Array,
      required: true,
    },
    numberOfHours: {
      type: Number,
      default: 48,
    },
  })

  const limitedHourlyForecast = computed(() => {
    return props.hourlyForecast.slice(0, props.numberOfHours)
  })
</script>

<template>
  <UICard class="forecast-next-hours" :title="`Next ${numberOfHours} hours`">
    <div class="forecast-next-hours__items">
      <span
        v-for="(hour, index) in limitedHourlyForecast"
        :key="index"
        class="forecast-next-hours__item"
      >
        <span class="forecast-next-hours__temp">
          {{ hour.temperature + '&deg;' }}
        </span>

        <span class="forecast-next-hours__rain">
          {{ hour.precipitationPercentage }}
        </span>

        <img
          class="forecast-next-hours__icon"
          :src="hour.icon.src"
          :alt="hour.icon.alt"
        />

        <span class="forecast-next-hours__time">
          {{ hour.timestamp.format('h:mm A') }}
        </span>
      </span>
    </div>
  </UICard>
</template>

<style lang="scss">
  .forecast-next-hours {
    .forecast-next-hours__items {
      display: flex;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .forecast-next-hours__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.8em;
      border-right: 1px solid rgba(var(--black), 0.1);

      &:last-of-type {
        border-right: none;
      }
    }

    .forecast-next-hours__temp {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
      margin-bottom: 0.25em;
    }

    .forecast-next-hours__rain {
      color: rgba(var(--font-blue), 1);
      font-weight: var(--font-weight-semibold);
    }

    .forecast-next-hours__icon {
      width: 80px;
      aspect-ratio: 1 / 1;
    }

    .forecast-next-hours__time {
      color: rgba(var(--black), 0.5);
      font-weight: var(--font-weight-bold);
      white-space: nowrap;
    }
  }
</style>
