<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          What You'll Learn From Each Implementation
        </h2>
      </div>

      <!-- Learning Grid -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Navam Invest -->
        <Card variant="featured" padding="lg">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Navam Invest</h3>
                <p class="text-sm text-gray-600">Multi-Agent Systems</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="text-blue-600">⚙️</span>
                ARCHITECTURE PATTERNS
              </h4>
              <ul class="space-y-1 text-sm text-gray-700 ml-6">
                <li>• 10-agent supervisor coordination</li>
                <li>• Intent-based natural language routing</li>
                <li>• State accumulation across workflows</li>
                <li>• Tool-calling agent specialization</li>
              </ul>
            </div>

            <div>
              <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="text-green-600">🚀</span>
                PRODUCTION TECHNIQUES
              </h4>
              <ul class="space-y-1 text-sm text-gray-700 ml-6">
                <li>• Progressive streaming UIs</li>
                <li>• Async execution without blocking</li>
                <li>• Intelligent caching strategies</li>
                <li>• Error handling in agent workflows</li>
              </ul>
            </div>

            <div>
              <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span class="text-purple-600">💼</span>
                DOMAIN EXPERTISE
              </h4>
              <ul class="space-y-1 text-sm text-gray-700 ml-6">
                <li>• Financial data integration</li>
                <li>• Investment analysis patterns</li>
                <li>• Risk calculation methods</li>
                <li>• Tax optimization strategies</li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600 italic">
                <strong>Perfect for:</strong> Developers building sophisticated multi-agent systems requiring specialized agent coordination and complex workflows.
              </p>
            </div>
          </div>
        </Card>

        <!-- Moments -->
        <Card variant="default" padding="lg">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Moments</h3>
                <p class="text-sm text-gray-600">Data Visualization</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="font-bold text-gray-900">Learn implementations of:</h4>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-blue-600">→</span>
                <span>Three-tier dashboard architecture</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600">→</span>
                <span>Interactive knowledge graphs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600">→</span>
                <span>Real-time correlation analysis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600">→</span>
                <span>Force-directed network visualization</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600">→</span>
                <span>Statistical relationship mapping</span>
              </li>
            </ul>

            <div class="pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600 italic">
                <strong>Perfect for:</strong> Developers building AI-powered business intelligence and data visualization platforms.
              </p>
            </div>
          </div>
        </Card>

        <!-- Navam Client -->
        <Card variant="default" padding="lg">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Navam Client</h3>
                <p class="text-sm text-gray-600">Enterprise Intelligence</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="font-bold text-gray-900">Learn implementations of:</h4>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-600">→</span>
                <span>Strategic decision support systems</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600">→</span>
                <span>Market analysis automation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600">→</span>
                <span>Evidence aggregation patterns</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600">→</span>
                <span>Multi-source intelligence synthesis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-600">→</span>
                <span>Recommendation generation</span>
              </li>
            </ul>

            <div class="pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600 italic">
                <strong>Perfect for:</strong> Developers building enterprise intelligence and strategic planning tools.
              </p>
            </div>
          </div>
        </Card>

        <!-- Navam Memo -->
        <Card variant="default" padding="lg">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Navam Memo</h3>
                <p class="text-sm text-gray-600">Knowledge Management</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="font-bold text-gray-900">Learn implementations of:</h4>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-orange-600">→</span>
                <span>Chrome extension architecture</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600">→</span>
                <span>AI-powered semantic tagging</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600">→</span>
                <span>Multi-provider AI integration</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600">→</span>
                <span>Vector-based content retrieval</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600">→</span>
                <span>Knowledge graph construction</span>
              </li>
            </ul>

            <div class="pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600 italic">
                <strong>Perfect for:</strong> Developers building browser extensions and knowledge management systems.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
</script>
