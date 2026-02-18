<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
    <div class="container mx-auto px-4 py-4 sm:py-0">
      <div class="flex flex-col items-center sm:flex-row sm:h-16 sm:items-center">
        <a href="/" class="flex items-center space-x-2 mb-3 sm:mb-0 group">
          <img src="/images/logo.png" alt="Navam Logo" class="h-6 w-auto" />
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-white">Navam</span>
            <span class="text-[10px] text-gray-500 -mt-1 hidden sm:block">Fork, Vibe, Ship!</span>
          </div>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium sm:ml-auto" aria-label="Main navigation">
          <a href="/" class="transition-colors hover:text-white text-white">Home</a>

          <!-- Products Button -->
          <div
            class="relative"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <button
              @click="toggleDropdown"
              @keydown.escape="closeDropdown"
              @keydown.enter="toggleDropdown"
              @keydown.space.prevent="toggleDropdown"
              class="transition-colors hover:text-white text-gray-400 flex items-center gap-1 touch-manipulation"
              aria-haspopup="true"
              :aria-expanded="showDropdown"
              aria-label="Products menu"
              ref="dropdownButton"
            >
              Products
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showDropdown }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <a href="/blog" class="transition-colors hover:text-white text-gray-400">Blog</a>
          <a href="/contact" class="transition-colors hover:text-white text-gray-400">Contact</a>
        </nav>
      </div>
    </div>

    <!-- Products Ribbon Menu (slides down from header) -->
    <!-- Guard teleport with mounted flag to prevent Vue SSR hydration mismatch -->
    <teleport to="body" v-if="mounted">
      <!-- Subtle overlay backdrop -->
      <transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="showDropdown"
          class="fixed inset-0 bg-black/10 z-[45]"
          @click="closeDropdown"
        ></div>
      </transition>

      <!-- Ribbon menu panel -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="showDropdown"
          class="fixed left-0 right-0 top-[73px] sm:top-[65px] z-[50] bg-gray-950/95 backdrop-blur-xl border-b border-white/10"
          @click.stop
          @mouseenter="handleMenuEnter"
          @mouseleave="handleMenuLeave"
        >
          <div class="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
            <!-- Featured Product: NeoSignal (Full Width) -->
            <a
              href="https://neosignal.io"
              target="_blank"
              rel="noopener noreferrer"
              class="group block mb-6 p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.99] transition-all duration-300 touch-manipulation relative overflow-hidden"
              @click="closeDropdown"
            >
              <!-- Featured badge -->
              <div class="absolute -top-1 -right-1 px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-bold rounded-bl-xl rounded-tr-xl shadow-lg flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                FEATURED
              </div>

              <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">NeoSignal</span>
                    <span class="text-cyan-400 font-semibold text-sm">by Navam Team</span>
                    <svg class="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-gray-400 leading-relaxed mb-2">
                    <span class="font-semibold text-gray-300">Frontier Tech Stack Intelligence</span> - Decision-support platform for tech stack evaluators. Synthesized signals across AI Models, Accelerators, Cloud Providers, and Frameworks.
                  </p>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">Signal Cards</span>
                    <span class="px-2 py-0.5 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium">Stack Builder</span>
                    <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">4 Categories</span>
                    <span class="px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">Free Access</span>
                  </div>
                </div>

                <!-- CTA Arrow -->
                <div class="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                  <svg class="w-6 h-6 text-cyan-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>
            </a>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              <!-- Navam Invest -->
              <a
                href="/products/navam-invest"
                class="group block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-1">Navam Invest</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Investment Intelligence · 10 AI Agents</div>
                  </div>
                </div>
              </a>

              <!-- Moments -->
              <a
                href="/products/moments"
                class="group block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-blue-300 transition-colors mb-1">Moments</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Business Intelligence · Knowledge Graphs</div>
                  </div>
                </div>
              </a>

              <!-- Command -->
              <a
                href="/products/command"
                class="group block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-green-300 transition-colors mb-1">Command</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Terminal AI · 15+ Models · 7 Providers</div>
                  </div>
                </div>
              </a>

              <!-- Memo -->
              <a
                href="/products/memo"
                class="group block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-orange-300 transition-colors mb-1">Memo</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Browser AI · Multi-Provider · YouTube</div>
                  </div>
                </div>
              </a>

              <!-- Trends -->
              <a
                href="/products/trends"
                class="group block p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                @click="closeDropdown"
              >
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-purple-300 transition-colors mb-1">Trends</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Enterprise Intelligence · Multi-Agent Reasoning</div>
                  </div>
                </div>
              </a>

              <!-- Sentinel (Sponsor Project) -->
              <a
                href="/products/sentinel"
                class="group block p-5 rounded-2xl border border-teal-500/30 bg-teal-500/10 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/10 active:scale-[0.98] transition-all duration-300 touch-manipulation relative"
                @click="closeDropdown"
              >
                <!-- Special "Sponsor" badge -->
                <div class="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  SPONSOR
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-base text-white group-hover:text-teal-300 transition-colors mb-1">Sentinel</div>
                    <div class="text-sm text-gray-400 leading-relaxed">Visual Agent Testing · Active Development</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showDropdown = ref(false);
const dropdownButton = ref(null);
const isTouchDevice = ref(false);
const mounted = ref(false);
let closeTimeout = null;

// Detect touch device
const checkTouchDevice = () => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Desktop: hover behavior
const handleMouseEnter = () => {
  if (!isTouchDevice.value) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    showDropdown.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isTouchDevice.value) {
    // Add slight delay before closing for better UX
    closeTimeout = setTimeout(() => {
      showDropdown.value = false;
    }, 150);
  }
};

// Keep menu open when hovering over the menu itself
const handleMenuEnter = () => {
  if (!isTouchDevice.value && closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

const handleMenuLeave = () => {
  if (!isTouchDevice.value) {
    closeTimeout = setTimeout(() => {
      showDropdown.value = false;
    }, 150);
  }
};

// Mobile: click/tap behavior
const toggleDropdown = () => {
  if (isTouchDevice.value) {
    showDropdown.value = !showDropdown.value;
  }
};

const closeDropdown = () => {
  showDropdown.value = false;
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

onMounted(() => {
  mounted.value = true;
  checkTouchDevice();
  window.addEventListener('resize', checkTouchDevice);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkTouchDevice);
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
});
</script>

<style scoped>
/* Ensure touch-friendly tap targets */
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Line clamp utilities for text overflow */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>