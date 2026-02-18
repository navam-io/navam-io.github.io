<template>
  <div class="breakout-section">
    <slot />
  </div>
</template>

<script setup lang="ts">
// This component breaks out of the parent's max-width constraint
// to create full-width sections within centered blog content
</script>

<style scoped>
.breakout-section {
  /* Break out of parent container using negative margins and viewport width */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  /* Transparent to inherit dark background */
  background: transparent;

  /* Ensure proper z-index stacking */
  z-index: 1;
}

/* Handle horizontal scrollbar on small screens if needed */
@media (max-width: 640px) {
  .breakout-section {
    overflow-x: hidden;
  }
}
</style>
