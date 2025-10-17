<template>
  <div class="stripe-button-wrapper">
    <stripe-buy-button
      :buy-button-id="buyButtonId"
      publishable-key="pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB"
    >
    </stripe-buy-button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  buyButtonId: string
}

const { buyButtonId } = defineProps<Props>()
</script>

<style scoped>
.stripe-button-wrapper {
  display: inline-block;
}

/* Override Stripe button styles to match our design */
.stripe-button-wrapper :deep(stripe-buy-button) {
  /* Stripe button will inherit styles from parent context */
}
</style>
