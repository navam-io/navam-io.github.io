<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 technical-heading">
          You're Trying to Build Production AI, But...
        </h2>

        <!-- Pain Points -->
        <p class="text-2xl text-gray-900 leading-relaxed mb-8 font-semibold">
          Tutorials break in production. Hiring takes months. Trial-and-error costs you your market window.
        </p>
      </div>

      <!-- Three-Column Comparison -->
      <div class="max-w-6xl mx-auto mt-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Figuring It Out -->
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
            <div class="text-center mb-4">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Building from Scratch</h3>
              <div class="text-3xl font-black text-red-600 mb-4">6-12 months</div>
            </div>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Trial and error learning</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Multiple debugging cycles</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Runtime errors and bugs</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>No guaranteed patterns</span>
              </li>
            </ul>
          </div>

          <!-- Hiring Engineers -->
          <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200">
            <div class="text-center mb-4">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Hiring Engineers</h3>
              <div class="text-3xl font-black text-yellow-600 mb-4">$50K-$100K</div>
            </div>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Limited iterations</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Team coordination overhead</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Black box delivery</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Hope they get it right</span>
              </li>
            </ul>
          </div>

          <!-- Navam Products -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-4 border-green-500 shadow-xl relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge variant="featured" size="lg" class="whitespace-nowrap">10X PRODUCTIVITY</Badge>
            </div>
            <div class="text-center mb-4 mt-2">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Vibe Coding Ready</h3>
              <div class="text-3xl font-black text-green-600 mb-4">Ship in Days</div>
            </div>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-medium">80%+ first-time success</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-medium">60-80% less code to write</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-medium">90%+ test coverage included</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-medium">Battle-tested in production</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Callout Box -->
      <div class="max-w-4xl mx-auto mt-12">
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-600 shadow-lg">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="light-bulb" size="lg" class="text-green-600" />
            </div>
            <p class="text-lg text-gray-800 leading-relaxed">
              Each product represents <strong class="text-gray-900">6+ months of trial-and-error, architecture decisions, and production refinement</strong>—all the hard lessons learned building real multi-agent systems.
              Fork the working code, skip the debugging hell, ship in days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
