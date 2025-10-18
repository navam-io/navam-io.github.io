<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p class="text-xl text-gray-600">
          Three simple steps to production AI
        </p>
      </div>

      <!-- 3-Step Process -->
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Step 1: Fork -->
          <div class="text-center">
            <div class="relative mb-6">
              <div class="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Fork</h3>
            <p class="text-gray-700 leading-relaxed">
              Clone the production codebase from GitHub. Get 10 agents, 32+ tools, streaming workflows, and all battle-tested patterns.
            </p>
          </div>

          <!-- Arrow -->
          <div class="hidden md:flex items-center justify-center">
            <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>

          <!-- Step 2: Customize -->
          <div class="text-center">
            <div class="relative mb-6">
              <div class="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="absolute -top-2 -right-2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Vibe</h3>
            <p class="text-gray-700 leading-relaxed">
              Adapt agents, prompts, and tools to your use case. Study the working patterns, learn the architecture, make it yours.
            </p>
          </div>

          <!-- Arrow -->
          <div class="hidden md:flex items-center justify-center">
            <svg class="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>

          <!-- Step 3: Vibe -->
          <div class="text-center">
            <div class="relative mb-6">
              <div class="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="absolute -top-2 -right-2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Ship</h3>
            <p class="text-gray-700 leading-relaxed">
              Deploy with confidence. 90%+ test coverage, production error handling, and proven patterns mean it works first time.
            </p>
          </div>
        </div>
      </div>

      <!-- Proof Statement -->
      <div class="max-w-3xl mx-auto mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
          <p class="text-2xl font-bold text-gray-900 mb-4">
            "I spent 3 months trying to figure out agent coordination. Navam Invest showed me exactly how it works. Shipped my MVP in 2 weeks."
          </p>
          <p class="text-gray-600 font-medium">
            — AI Engineer building a fintech platform
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No imports needed - using inline SVGs
</script>
