<script setup>
  import { computed } from 'vue'

  import UICard from '@/components/componentLibrary/UICard.vue'

  const props = defineProps({
    dailyForecast: {
      type: Array,
      required: true,
    },
    numberOfDays: {
      type: Number,
      default: 8,
    },
  })

  const limitedDailyForecast = computed(() => {
    return props.dailyForecast.slice(0, props.numberOfDays)
  })
</script>

<template>
  <UICard class="forecast-next-days" :title="`Next ${numberOfDays} days`">
    <div class="forecast-next-days__items">
      <span
        v-for="(day, index) in limitedDailyForecast"
        :key="index"
        class="forecast-next-days__item"
      >
        <img
          class="forecast-next-days__icon"
          :src="day.icon.src"
          :alt="day.icon.alt"
        />

        <span class="forecast-next-days__item-middle">
          <span class="forecast-next-days__date">
            {{ day.timestamp.format('ddd, MMM D') }}
          </span>

          <span class="forecast-next-days__description">
            {{ day.description }}
          </span>
        </span>

        <span class="forecast-next-days__temp">
          {{ day.highTemperature + '&deg;' }}
        </span>

        <span class="forecast-next-days__temp">
          {{ day.lowTemperature + '&deg;' }}
        </span>
      </span>
    </div>
  </UICard>
</template>

<style lang="scss">
  .forecast-next-days {
    .forecast-next-days__items {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }

    .forecast-next-days__item {
      display: flex;
      align-items: center;
      gap: 1em;
      padding: 0 0.8em;
      border-bottom: 1px solid rgba(var(--black), 0.1);

      &:last-of-type {
        border-bottom: none;
      }
    }

    .forecast-next-days__item-middle {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .forecast-next-days__item-end {
      display: flex;
      align-items: center;
      gap: 0.8em;
    }

    .forecast-next-days__icon {
      width: 80px;
      aspect-ratio: 1 / 1;
    }

    .forecast-next-days__date {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
      white-space: nowrap;
    }

    .forecast-next-days__description {
      color: rgba(var(--black), 0.5);
      font-weight: var(--font-weight-bold);
    }

    .forecast-next-days__temp {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
    }

    .forecast-next-days__rain {
      color: rgba(var(--font-blue), 1);
      font-weight: var(--font-weight-semibold);
    }
  }
</style>
