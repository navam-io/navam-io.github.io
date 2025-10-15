<template>
  <!-- Apple-style Epic Hero Section -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-purple-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-wave-pattern opacity-15"></div>
    
    
    <!-- Content Container with Glass Morphism -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-6xl mx-auto">
        <!-- Studio Branding -->
        <div class="mb-6 animate-fade-in">
          <p class="text-white/80 text-lg font-light tracking-wide">Navam Product Studio</p>
        </div>

        <!-- Main Title with Epic Typography -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight animate-fade-in tracking-tight">
          <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Frontier AI Interfaces
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-white/70 mb-12 animate-fade-in font-light">
          Reference implementations exploring AI↔AI, AI↔Human, and AI↔World interactions
        </p>

        <!-- Featured Products - Dual Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8 animate-slide-up">
          <!-- Navam Invest Card -->
          <div class="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-300/30 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
            <div class="flex items-center justify-center mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Navam Invest</h3>
            <p class="text-white/80 text-sm mb-4 leading-relaxed">
              AI-powered investment intelligence with 10 specialized agents. Professional-grade analysis on your laptop.
            </p>
            <div class="bg-gray-900/50 rounded-lg px-3 py-2 mb-4">
              <code class="text-cyan-300 text-xs font-mono">pip install navam-invest</code>
            </div>
            <div class="flex gap-2">
              <Button
                size="sm"
                as="a"
                href="https://github.com/navam-io/navam-invest"
                target="_blank"
                class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium"
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog/introducing-navam-invest"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <!-- Moments Card -->
          <div class="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-300/30 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
            <div class="flex items-center justify-center mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Moments</h3>
            <p class="text-white/80 text-sm mb-4 leading-relaxed">
              AI business intelligence dashboard with knowledge graphs, three-tier analytics, and correlation matrix.
            </p>
            <div class="bg-gray-900/50 rounded-lg px-3 py-2 mb-4">
              <code class="text-blue-300 text-xs font-mono">237+ entities · 1,814 relationships</code>
            </div>
            <div class="flex gap-2">
              <Button
                size="sm"
                as="a"
                href="https://github.com/navam-io/moments"
                target="_blank"
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog?tag=Strategic%20Intelligence"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <!-- Universal CTA -->
        <div class="animate-slide-up">
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="/products"
            class="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full hover:border-white/80"
          >
            <span class="flex items-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Explore All Products
            </span>
          </Button>
        </div>


      </div>
    </div>
    
    <!-- Subtle Vignette Effect -->
    <div class="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/30"></div>
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
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 41%, rgba(255, 255, 255, 0.05) 42%, transparent 43%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 41%, rgba(255, 255, 255, 0.05) 42%, transparent 43%);
  background-size: 120px 120px, 80px 80px, 60px 60px, 60px 60px;
  background-position: 0 0, 40px 40px, 20px 20px, 30px 30px;
}

/* Apple-style Epic Animations */
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


/* Radial gradient for vignette effect */
.bg-radial-gradient {
  background: radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 100%);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
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

/* Button hover effects */
.transform:hover {
  transition: transform 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}
</style>