<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          More Production AI Products
        </h2>
        <p class="text-xl text-gray-600">
          Expand your toolkit with additional reference implementations
        </p>
      </div>

      <!-- Compact Product Grid -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <Button
            variant="outline"
            size="sm"
            as="a"
            href="https://github.com/trendditcom/moments"
            target="_blank"
            class="bg-white/10 border-white/40 text-white hover:bg-white/20 w-full"
          >
            View on GitHub →
          </Button>
        </Card>

        <!-- Navam Client -->
        <Card variant="gradient" gradient="purple" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="chart-bar" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Navam Client</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Strategic intelligence platform for enterprise market analysis and technology trend prediction.
          </p>
          <Button
            variant="outline"
            size="sm"
            as="a"
            href="https://github.com/trendditcom/trenddit-client"
            target="_blank"
            class="bg-white/10 border-white/40 text-white hover:bg-white/20 w-full"
          >
            View on GitHub →
          </Button>
        </Card>

        <!-- Navam Memo -->
        <Card variant="gradient" gradient="orange" padding="md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="document-text" size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">Navam Memo</h3>
          </div>
          <p class="text-white/90 text-sm mb-4 leading-relaxed">
            Chrome extension for AI-powered knowledge management with semantic tagging and multi-provider chat.
          </p>
          <Button
            variant="outline"
            size="sm"
            as="a"
            href="https://github.com/trendditcom/trenddit-memo"
            target="_blank"
            class="bg-white/10 border-white/40 text-white hover:bg-white/20 w-full"
          >
            View on GitHub →
          </Button>
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
