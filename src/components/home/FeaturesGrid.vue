<template>
  <section class="py-24 bg-gray-950">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 technical-heading">
          What You Get
        </h2>
        <p class="text-xl text-gray-400">
          Real outcomes, not just features
        </p>
      </div>

      <!-- 2x3 Benefits Grid -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Benefit 1: Time -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 flex items-center justify-center">
            <Icon name="bolt" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Ship in Days, Not Months</h3>
          <p class="text-3xl font-black text-blue-400 mb-4">6+ Months Saved</p>
          <p class="text-gray-300 leading-relaxed">
            Skip the trial-and-error phase. Fork working multi-agent systems with proven architecture patterns and start customizing immediately.
          </p>
        </Card>

        <!-- Benefit 2: Cost -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 flex items-center justify-center">
            <Icon name="currency-dollar" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Avoid $50K+ in Engineering Costs</h3>
          <p class="text-3xl font-black text-green-400 mb-4">$299 vs $50K+</p>
          <p class="text-gray-300 leading-relaxed">
            Get battle-tested multi-agent systems for a fraction of what it costs to hire senior engineers to build from scratch.
          </p>
        </Card>

        <!-- Benefit 3: Prompts -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-6 flex items-center justify-center">
            <Icon name="code" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Skip 6 Months of Prompt Refinement</h3>
          <p class="text-3xl font-black text-purple-400 mb-4">Working Prompts</p>
          <p class="text-gray-300 leading-relaxed">
            Get battle-tested system prompts, tool instructions, and output formats that work reliably—refined through months of real-world use.
          </p>
        </Card>

        <!-- Benefit 4: Quality -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-emerald-500 to-emerald-600 text-white mb-6 flex items-center justify-center">
            <Icon name="shield-check" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">90%+ Test Coverage Included</h3>
          <p class="text-3xl font-black text-emerald-400 mb-4">Working Quality</p>
          <p class="text-gray-300 leading-relaxed">
            Every component fully implemented, tested, and documented. No skeleton code, no TODOs—complete systems that work first time.
          </p>
        </Card>

        <!-- Benefit 5: Learning -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-6 flex items-center justify-center">
            <Icon name="book-open" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Learn Working Patterns</h3>
          <p class="text-3xl font-black text-indigo-400 mb-4">Real Knowledge</p>
          <p class="text-gray-300 leading-relaxed">
            Study how agent coordination, streaming workflows, and intelligent caching actually work in real apps—not toy tutorial examples.
          </p>
        </Card>

        <!-- Benefit 6: Freedom -->
        <Card variant="glass" padding="lg" class="hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div class="feature-icon bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 flex items-center justify-center">
            <Icon name="lock-open" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">Keep 100% of Your Revenue</h3>
          <p class="text-3xl font-black text-orange-400 mb-4">Business Source License</p>
          <p class="text-gray-300 leading-relaxed">
            Fork, customize, ship commercial products—no revenue sharing, no attribution required. You own everything you build.
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
