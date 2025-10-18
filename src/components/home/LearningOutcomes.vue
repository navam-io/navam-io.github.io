<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          Get All Four Production Codebases
        </h2>
        <p class="text-xl text-gray-600">
          Python TUIs, Next.js dashboards, tRPC apps, and Chrome extensions—master different stacks by studying working production code.
        </p>
      </div>

      <!-- 2x2 Product Grid -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <!-- Navam Invest -->
        <Card variant="gradient" gradient="green" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="dollar-circle" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Navam Invest</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Multi-agent investment intelligence with streaming TUI. 10 specialized agents, 90%+ test coverage, production-grade.
          </p>
          <div class="flex items-center justify-center gap-4 text-xs text-white/80">
            <span>Python 3.9+</span>
            <span>•</span>
            <span>LangGraph</span>
            <span>•</span>
            <span>Textual TUI</span>
          </div>
        </Card>

        <!-- Moments -->
        <Card variant="gradient" gradient="blue" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="lightning" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Moments</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Business intelligence with knowledge graphs, 3-tier analytics, 237+ entities, 1,814 relationships.
          </p>
          <div class="flex items-center justify-center gap-4 text-xs text-white/80">
            <span>Next.js 14</span>
            <span>•</span>
            <span>React 18</span>
            <span>•</span>
            <span>D3.js Graphs</span>
          </div>
        </Card>

        <!-- Trends -->
        <Card variant="gradient" gradient="purple" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="chart-bar" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Trends</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Strategic intelligence platform for enterprise market analysis and technology trend prediction.
          </p>
          <div class="flex items-center justify-center gap-4 text-xs text-white/80">
            <span>Next.js 15</span>
            <span>•</span>
            <span>tRPC 11</span>
            <span>•</span>
            <span>Supabase</span>
          </div>
        </Card>

        <!-- Memo -->
        <Card variant="gradient" gradient="orange" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="document-text" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Memo</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Chrome extension for AI-powered knowledge management with semantic tagging and multi-provider chat.
          </p>
          <div class="flex items-center justify-center gap-4 text-xs text-white/80">
            <span>Manifest V3</span>
            <span>•</span>
            <span>Service Workers</span>
            <span>•</span>
            <span>Multi-Provider AI</span>
          </div>
        </Card>
      </div>

      <!-- Bundle CTA -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-8 text-center text-white shadow-2xl">
          <div class="flex items-center justify-center gap-3 mb-3">
            <Icon name="box" size="lg" class="text-white" />
            <h3 class="text-3xl font-bold">Senior Engineer Package</h3>
          </div>
          <p class="text-xl mb-3">Get all 4 products with commercial licenses</p>
          <p class="text-5xl font-black mb-3">$799 <span class="text-lg font-normal text-white/70">one-time</span></p>
          <p class="text-white/90 mb-6">Regular: $1,196 • Save $397 (33%)</p>
          <div class="flex justify-center">
            <StripeButton buyButtonId="buy_btn_1SJ5etRCxnzBPkIXogmTaqPH" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/ui/Icon.vue'
import StripeButton from '@/components/ui/StripeButton.vue'
</script>
