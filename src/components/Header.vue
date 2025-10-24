<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
    <div class="container mx-auto px-4 py-4 sm:py-0">
      <div class="flex flex-col items-center sm:flex-row sm:h-16 sm:items-center">
        <a href="/" class="flex items-center space-x-2 mb-3 sm:mb-0 group">
          <img src="/images/logo.png" alt="Navam Logo" class="h-6 w-auto" />
          <div class="flex flex-col">
            <span class="text-2xl font-bold">Navam</span>
            <span class="text-[10px] text-muted-foreground/70 -mt-1 hidden sm:block">Fork, Vibe, Ship!</span>
          </div>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium sm:ml-auto" aria-label="Main navigation">
          <a href="/" class="transition-colors hover:text-foreground/80 text-foreground">Home</a>

          <!-- Products Dropdown -->
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
              class="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1 touch-manipulation"
              aria-haspopup="true"
              :aria-expanded="showDropdown"
              aria-label="Products menu"
              ref="dropdownButton"
            >
              Products
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': showDropdown }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-show="showDropdown"
                class="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mt-3 w-[95vw] max-w-[380px] md:max-w-[720px] rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50 ring-1 ring-gray-200 overflow-hidden backdrop-blur-xl"
                role="menu"
                aria-orientation="vertical"
                @click.stop
              >
                <div class="p-6 md:p-8">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <!-- Navam Invest -->
                    <a
                      href="/products/navam-invest"
                      class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                      role="menuitem"
                      @click="closeDropdown"
                    >
                      <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-base text-gray-900 group-hover:text-cyan-700 transition-colors mb-1">Navam Invest</div>
                          <div class="text-sm text-gray-600 line-clamp-2 leading-relaxed">Investment Intelligence · 10 AI Agents</div>
                        </div>
                      </div>
                    </a>

                    <!-- Moments -->
                    <a
                      href="/products/moments"
                      class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                      role="menuitem"
                      @click="closeDropdown"
                    >
                      <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-base text-gray-900 group-hover:text-blue-700 transition-colors mb-1">Moments</div>
                          <div class="text-sm text-gray-600 line-clamp-2 leading-relaxed">Business Intelligence · Knowledge Graphs</div>
                        </div>
                      </div>
                    </a>

                    <!-- Command -->
                    <a
                      href="/products/command"
                      class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-green-300 hover:shadow-xl hover:shadow-green-100/50 hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                      role="menuitem"
                      @click="closeDropdown"
                    >
                      <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-base text-gray-900 group-hover:text-green-700 transition-colors mb-1">Command</div>
                          <div class="text-sm text-gray-600 line-clamp-2 leading-relaxed">Terminal AI · 15+ Models · 7 Providers</div>
                        </div>
                      </div>
                    </a>

                    <!-- Memo -->
                    <a
                      href="/products/memo"
                      class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                      role="menuitem"
                      @click="closeDropdown"
                    >
                      <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-base text-gray-900 group-hover:text-orange-700 transition-colors mb-1">Memo</div>
                          <div class="text-sm text-gray-600 line-clamp-2 leading-relaxed">Browser AI · Multi-Provider · YouTube</div>
                        </div>
                      </div>
                    </a>

                    <!-- Trends -->
                    <a
                      href="/products/trends"
                      class="group block p-5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 transition-all duration-300 touch-manipulation md:col-span-2"
                      role="menuitem"
                      @click="closeDropdown"
                    >
                      <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-base text-gray-900 group-hover:text-purple-700 transition-colors mb-1">Trends</div>
                          <div class="text-sm text-gray-600 line-clamp-2 leading-relaxed">Enterprise Intelligence · Multi-Agent Reasoning</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <a href="/blog" class="transition-colors hover:text-foreground/80 text-foreground/60">Blog</a>
          <a href="/contact" class="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showDropdown = ref(false);
const dropdownButton = ref(null);
const isMobile = ref(false);

// Detect if device is mobile/touch
const checkMobile = () => {
  isMobile.value = window.innerWidth < 640 || ('ontouchstart' in window);
};

// Desktop: hover behavior
const handleMouseEnter = () => {
  if (!isMobile.value) {
    showDropdown.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isMobile.value) {
    showDropdown.value = false;
  }
};

// Mobile: click/tap behavior
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = () => {
  showDropdown.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownButton.value && !dropdownButton.value.contains(event.target)) {
    const dropdown = dropdownButton.value.nextElementSibling;
    if (dropdown && !dropdown.contains(event.target)) {
      closeDropdown();
    }
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('touchstart', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('touchstart', handleClickOutside);
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