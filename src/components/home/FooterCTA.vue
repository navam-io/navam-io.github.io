<template>
  <!-- Footer CTA Section -->
  <section class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-wave-pattern opacity-10"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Headline -->
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {{ selectedMessage.title }}
        </h2>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          {{ selectedMessage.subtitle }}
        </p>

        <!-- Three Clear CTAs -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            as="a"
            href="https://github.com/navam-io/navam-invest"
            target="_blank"
            class="bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full"
          >
            <span class="flex items-center gap-2">
              Try Free
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </span>
          </Button>

          <StripeButton buyButtonId="buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe" />
        </div>

        <!-- Money-Back Guarantee -->
        <div class="flex items-center justify-center gap-2 text-white/90 text-lg mb-8">
          <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span class="font-semibold">30-Day Money-Back Guarantee</span>
        </div>

        <!-- Social Proof / Stats -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-white font-medium">Business Source License</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span class="text-white font-medium">100% Vibe Coded</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-white font-medium">Battle-Tested</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span class="text-white font-medium">Complete Source Code</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Vignette Effect -->
    <div class="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/40"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from '@/components/ui/Button.vue';
import StripeButton from '@/components/ui/StripeButton.vue';
import { heroMessages, getRandomMessageExcluding, type HeroMessage } from '@/data/heroMessages';

// Select a message different from the hero
const selectedMessage = ref<HeroMessage>(heroMessages[0]);

onMounted(() => {
  // Get the hero's selected message index from global scope
  const heroIndex = typeof window !== 'undefined'
    ? (window as any).__navamHeroMessageIndex ?? -1
    : -1;

  // Pick a different message
  const differentIndex = getRandomMessageExcluding(heroIndex);
  selectedMessage.value = heroMessages[differentIndex];
});
</script>

<style scoped>
/* Wave background pattern */
.bg-wave-pattern {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 41%, rgba(255, 255, 255, 0.05) 42%, transparent 43%);
  background-size: 120px 120px, 80px 80px, 60px 60px;
  background-position: 0 0, 40px 40px, 20px 20px;
}

/* Radial gradient for vignette effect */
.bg-radial-gradient {
  background: radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
}
</style>
