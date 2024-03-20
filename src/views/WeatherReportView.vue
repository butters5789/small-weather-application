<script setup>
  defineProps({
    location: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <main>
    <section>
      <h2>Next hours</h2>
      {{ location }}
    </section>

    <section>
      <h2>Next 5 days</h2>
    </section>
  </main>
</template>
