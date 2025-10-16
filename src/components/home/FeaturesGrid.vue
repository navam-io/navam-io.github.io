<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          Production Patterns You Won't Find in Tutorials
        </h2>
      </div>

      <!-- 2x3 Feature Grid -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Multi-Agent Orchestration -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 flex items-center justify-center">
            <Icon name="shuffle" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Multi-Agent Orchestration</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            See how 10 agents coordinate in production:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>LangGraph supervisor patterns</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>Intent-based routing that actually works</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>State accumulation across agents</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>Tool-calling coordination</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>Graceful error handling</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-600">•</span>
              <span>Real implementation, not theory</span>
            </li>
          </ul>
        </Card>

        <!-- Feature 2: Prompt Engineering -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-6 flex items-center justify-center">
            <Icon name="brain" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Prompt Engineering</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Months of refined prompts included:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>System prompts per specialized agent</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>Tool-use instructions that work reliably</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>Error recovery strategies</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>Output format enforcement</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>Real examples from production use</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-600">•</span>
              <span>The prompts that actually shipped</span>
            </li>
          </ul>
        </Card>

        <!-- Feature 3: Streaming & Async Execution -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 flex items-center justify-center">
            <Icon name="bolt" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Streaming & Async Execution</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Production UX patterns implemented:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>Progressive disclosure of reasoning</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>Non-blocking async workers</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>Real-time tool execution visibility</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>ESC cancellation mid-workflow</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>Session state management</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600">•</span>
              <span>Textual/React streaming examples</span>
            </li>
          </ul>
        </Card>

        <!-- Feature 4: Intelligent Caching -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-cyan-500 to-cyan-600 text-white mb-6 flex items-center justify-center">
            <Icon name="database" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Intelligent Caching</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Smart caching strategies that work:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>DuckDB persistence layer</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>TTL strategies per data source type</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>75%+ hit rates in production</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>Cache warming for common queries</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>When to cache vs. when not to</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-600">•</span>
              <span>Real performance metrics included</span>
            </li>
          </ul>
        </Card>

        <!-- Feature 5: Complete, Working Systems -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-emerald-500 to-emerald-600 text-white mb-6 flex items-center justify-center">
            <Icon name="check-badge" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Complete, Working Systems</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Not skeletons with TODOs:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>Every agent fully implemented</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>All integrations working</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>Production error handling</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>Complete test suites</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>Real API integrations</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">•</span>
              <span>Ships and runs today</span>
            </li>
          </ul>
        </Card>

        <!-- Feature 6: MIT Licensed -->
        <Card variant="default" padding="lg" class="hover:shadow-2xl">
          <div class="feature-icon bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 flex items-center justify-center">
            <Icon name="lock-open" size="lg" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">MIT Licensed</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Fork and adapt without restrictions:
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>Full source code access</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>Modify anything</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>Build commercial products</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>No attribution required</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>Keep 100% of your revenue</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-600">•</span>
              <span>True ownership</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
