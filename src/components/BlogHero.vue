<template>
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-dots-pattern opacity-10"></div>

    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-6xl mx-auto">
        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-fade-in tracking-tight">
          <span class="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Insights & Guides
          </span>
        </h1>

        <!-- Glassmorphism Card for Description -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl animate-slide-up max-w-4xl mx-auto">
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-6">
            Frontier AI Interfaces & Intelligent Systems
          </p>

          <p class="text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
            Explore comprehensive guides on strategic intelligence, investment analysis, system architecture, and data visualization. Learn how to build AI-first applications, implement multi-agent systems, and leverage frontier interfaces for AI↔AI, AI↔Human, and AI↔World interactions.
          </p>

          <!-- Stats Grid -->
          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">41+</div>
              <div class="text-sm text-white/70">Articles</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">7</div>
              <div class="text-sm text-white/70">Categories</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">3</div>
              <div class="text-sm text-white/70">Products</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">∞</div>
              <div class="text-sm text-white/70">Possibilities</div>
            </div>
          </div>
        </div>

        <!-- Category Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up-delayed">
          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Strategic Intelligence</h3>
            <p class="text-white/70 text-sm">Market analysis, competitive insights, and enterprise technology decisions</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Development Acceleration</h3>
            <p class="text-white/70 text-sm">AI-assisted coding, rapid prototyping, and development workflows</p>
          </div>

          <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div class="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Data Visualization</h3>
            <p class="text-white/70 text-sm">Dashboards, knowledge graphs, and advanced analytics interfaces</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Dots background pattern */
.bg-dots-pattern {
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 2px, transparent 2px),
    radial-gradient(circle at 60% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 100px 100px, 80px 80px, 120px 120px, 90px 90px;
  background-position: 0 0, 40px 40px, 20px 60px, 80px 20px;
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
