<template>
  <!-- Footer CTA Section -->
  <section class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-wave-pattern opacity-10"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Headline -->
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Vibe Code Your Next AI Product
        </h2>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
          Stop guessing. See how AI-built products solve complex multi-agent
          problems in production. Fork the code, learn the patterns, build your vision.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            as="a"
            href="https://github.com/navam-io"
            target="_blank"
            class="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-2xl"
          >
            <span class="flex items-center gap-2">
              Explore Vibe Coding Ready Products
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            as="a"
            href="https://github.com/navam-io/navam-invest"
            target="_blank"
            class="bg-white/10 border-2 border-white/50 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-xl"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Navam Invest on GitHub
            </span>
          </Button>
        </div>

        <!-- Social Proof / Stats -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-white font-medium">MIT Licensed</span>
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
            <span class="text-white font-medium">Production-Proven</span>
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
import Button from '@/components/ui/Button.vue'
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
