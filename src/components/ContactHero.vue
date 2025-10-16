<template>
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-mesh-pattern opacity-10"></div>

    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-16">
      <div class="text-center max-w-6xl mx-auto">
        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-fade-in tracking-tight">
          <span class="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Get in Touch
          </span>
        </h1>

        <!-- Glassmorphism Card for Description -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl animate-slide-up max-w-4xl mx-auto">
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-6">
            100% Vibe Coding Ready Products for AI Engineers
          </p>

          <p class="text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
            Get access to production-ready reference implementations with MIT licensing. Fork working products, study battle-tested multi-agent patterns, and ship in days instead of months. Interested in commercial licensing, enterprise support, or custom implementation services?
          </p>
        </div>

        <!-- Value Propositions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up-delayed">
          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Production-Ready Code</h3>
            <p class="text-white/70 text-sm">80%+ first-time success · 90%+ test coverage · Complete systems, not tutorials</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Reference Implementations</h3>
            <p class="text-white/70 text-sm">Multi-agent orchestration · Production prompts · Real architecture decisions</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">MIT Licensed</h3>
            <p class="text-white/70 text-sm">True ownership · Build commercial products · No attribution required</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Mesh background pattern */
.bg-mesh-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
}

/* Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up-delayed {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up-delayed 1s ease-out 0.6s forwards;
  opacity: 0;
}

/* Glass morphism enhancements */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}
</style>
