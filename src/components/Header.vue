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
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <button
              @click="showDropdown = !showDropdown"
              @keydown.escape="showDropdown = false"
              class="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              aria-haspopup="true"
              :aria-expanded="showDropdown"
              aria-label="Products menu"
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
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-show="showDropdown"
                class="absolute left-0 mt-2 w-72 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2"
                role="menu"
                aria-orientation="vertical"
              >
                <a
                  href="/products/navam-invest"
                  class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  @click="showDropdown = false"
                >
                  <div class="font-semibold text-gray-900">Navam Invest</div>
                  <div class="text-xs text-gray-600 mt-1">AI Investment Intelligence · 10 Agents</div>
                </a>
                <a
                  href="/products/moments"
                  class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  @click="showDropdown = false"
                >
                  <div class="font-semibold text-gray-900">Moments</div>
                  <div class="text-xs text-gray-600 mt-1">Business Intelligence · Knowledge Graphs</div>
                </a>
                <a
                  href="/products/command"
                  class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  @click="showDropdown = false"
                >
                  <div class="font-semibold text-gray-900">Command</div>
                  <div class="text-xs text-gray-600 mt-1">AI Terminal · 15+ Models · 7 Providers</div>
                </a>
                <a
                  href="/products/memo"
                  class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  @click="showDropdown = false"
                >
                  <div class="font-semibold text-gray-900">Memo</div>
                  <div class="text-xs text-gray-600 mt-1">Browser Extension · Multi-AI · YouTube</div>
                </a>
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
import { ref } from 'vue';

const showDropdown = ref(false);
</script>