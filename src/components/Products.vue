<template>
  <section id="products" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
        <p class="mt-4 text-lg text-gray-600">
          Reference implementations exploring frontier AI interfaces - from investment intelligence to business analytics
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-4xl space-y-8">
        <!-- Navam Invest - Featured Product -->
        <div class="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg ring-1 ring-green-200 border-l-4 border-l-green-600">
          <div class="flex items-start gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl font-bold text-gray-900">Navam Invest</h3>
                <span class="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Featured</span>
              </div>
              <p class="mt-2 text-gray-700 text-lg leading-relaxed">
                AI-powered investment intelligence platform that runs entirely on your laptop. Combines 10 specialized AI agents for professional-grade investment analysis at a fraction of traditional costs. Features natural language queries, multi-agent workflows, progressive streaming, and privacy-first local execution with your own API keys.
              </p>
              <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>10 Specialized AI Agents</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Multi-Agent Workflows</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Privacy-First Local Execution</span>
                </div>
              </div>
              <div class="mt-4 bg-gray-900 rounded-lg p-4">
                <code class="text-green-400 text-sm font-mono">$ pip install navam-invest</code>
              </div>
              <div class="mt-6 flex gap-4">
                <Button as="a" href="https://github.com/navam-io/navam-invest" target="_blank" class="bg-green-600 hover:bg-green-700">
                  View on GitHub
                </Button>
                <Button variant="outline" as="a" href="/blog/introducing-navam-invest" class="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Moments - Flagship Product -->
        <div class="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg ring-1 ring-blue-200 border-l-4 border-l-blue-600">
          <div class="flex items-start gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl font-bold text-gray-900">Moments</h3>
                <span class="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">Flagship</span>
              </div>
              <p class="mt-2 text-gray-700 text-lg leading-relaxed">
                Advanced AI business intelligence platform featuring three-tier analytics dashboards, interactive knowledge graphs with 237+ entities, and intelligent correlation matrix analysis. Transform complex AI industry data into actionable insights with force-directed network visualization, statistical relationship measurement, and factor distribution analytics.
              </p>
              <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Three-Tier Analytics Dashboard</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Interactive Knowledge Graph</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Correlation Matrix Analytics</span>
                </div>
              </div>
              <div class="mt-6 flex gap-4">
                <Button as="a" href="https://github.com/navam-io/moments" target="_blank" class="bg-blue-600 hover:bg-blue-700">
                  View on GitHub
                </Button>
                <Button variant="outline" as="a" href="/blog?tag=Strategic%20Intelligence" class="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navam Client - Supporting Product -->
        <div class="rounded-2xl bg-white p-8 shadow-xs ring-1 ring-gray-200">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600 text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-gray-900">Navam Client</h3>
              <p class="mt-2 text-gray-600">
                Enterprise intelligence platform for strategic technology decisions. Multi-agent system that analyzes market trends, predicts technology impact, and provides evidence-based recommendations for technology adoption and competitive positioning.
              </p>
              <div class="mt-6 flex gap-4">
                <Button variant="outline" as="a" href="https://github.com/navam-io/trenddit-client" target="_blank">
                  View on GitHub
                </Button>
                <Button variant="outline" as="a" href="/blog?tag=Strategic%20Intelligence">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navam Memo - Supporting Product -->
        <div class="rounded-2xl bg-white p-8 shadow-xs ring-1 ring-gray-200">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600 text-white">
              <DocumentTextIcon class="h-6 w-6" />
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-gray-900">Navam Memo</h3>
              <p class="mt-2 text-gray-600">
                Chrome extension that transforms web browsing into intelligent knowledge management. Capture content from any webpage, organize with AI-powered tags, and chat with your saved knowledge using multiple AI providers like Claude, GPT, and Gemini.
              </p>
              <div class="mt-6 flex gap-4">
                <Button variant="outline" as="a" href="https://github.com/navam-io/trenddit-memo" target="_blank">
                  View on GitHub
                </Button>
                <Button variant="outline" as="a" href="/blog?tag=Knowledge%20Discovery">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import Button from '@/components/ui/Button.vue'
</script>