<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600">
          Try free, buy when ready, scale with bundles
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Personal Use - Free -->
        <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Personal Use</h3>
            <div class="text-5xl font-black text-gray-900 mb-2">Free</div>
            <p class="text-gray-600">Explore and learn</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-gray-900 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Full source code access</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-gray-900 flex-shrink-0 mt-1" />
              <span class="text-gray-700">All features unlocked</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-gray-900 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Study production patterns</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-gray-900 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Build personal projects</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="x-circle" size="sm" class="text-gray-300 flex-shrink-0 mt-1" />
              <span class="text-gray-400">No commercial use</span>
            </li>
          </ul>

          <div class="bg-gray-900 rounded-xl px-4 py-3 mb-6">
            <code class="text-green-400 text-sm font-mono block text-center">pip install navam-invest</code>
          </div>

          <Button
            size="lg"
            as="a"
            href="https://github.com/navam-io/navam-invest"
            target="_blank"
            class="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold"
          >
            View on GitHub
          </Button>
        </div>

        <!-- Commercial License - Popular -->
        <div class="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-600 relative transform scale-105">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge variant="featured" size="lg" class="whitespace-nowrap">
              <Icon name="star" size="sm" class="text-yellow-400 mr-1" />
              MOST POPULAR
            </Badge>
          </div>

          <div class="text-center mb-6 mt-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Commercial License</h3>
            <div class="text-5xl font-black text-green-600 mb-2">$299</div>
            <p class="text-gray-600">One-time payment</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-green-500 flex-shrink-0 mt-1" />
              <span class="text-gray-900 font-medium">Everything in Personal</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-green-500 flex-shrink-0 mt-1" />
              <span class="text-gray-900 font-medium">Build commercial products</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-green-500 flex-shrink-0 mt-1" />
              <span class="text-gray-900 font-medium">Unlimited end products</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-green-500 flex-shrink-0 mt-1" />
              <span class="text-gray-900 font-medium">Keep 100% of revenue</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-green-500 flex-shrink-0 mt-1" />
              <span class="text-gray-900 font-medium">Lifetime updates</span>
            </li>
          </ul>

          <div class="flex justify-center">
            <StripeButton buyButtonId="buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe" />
          </div>

          <p class="text-center text-gray-600 text-sm mt-4">30-day money-back guarantee</p>
        </div>

        <!-- Team Bundle -->
        <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-orange-200">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Senior Engineer Package</h3>
            <div class="text-5xl font-black text-orange-600 mb-2">$799</div>
            <p class="text-gray-600">Save $397</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-orange-500 flex-shrink-0 mt-1" />
              <span class="text-gray-700 font-medium">All 4 products included</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-orange-500 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Navam Invest ($299)</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-orange-500 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Moments ($299)</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-orange-500 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Trenddit Client ($299)</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="check-circle" size="sm" class="text-orange-500 flex-shrink-0 mt-1" />
              <span class="text-gray-700">Trenddit Memo ($299)</span>
            </li>
          </ul>

          <div class="flex justify-center">
            <StripeButton buyButtonId="buy_btn_1SJ5etRCxnzBPkIXogmTaqPH" />
          </div>

          <p class="text-center text-gray-600 text-sm mt-4">Regular: $1,196 • Save 33%</p>
        </div>
      </div>

      <!-- FAQ / Trust Builder -->
      <div class="max-w-3xl mx-auto mt-16">
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>

          <div class="space-y-6">
            <div>
              <h4 class="font-bold text-gray-900 mb-2">What exactly do I get?</h4>
              <p class="text-gray-700">
                Complete production codebases with full source access. Every agent, every tool, every prompt, every test—nothing held back. MIT licensed.
              </p>
            </div>

            <div>
              <h4 class="font-bold text-gray-900 mb-2">Can I really build commercial products?</h4>
              <p class="text-gray-700">
                Yes! With a commercial license, fork the code, customize it, and ship your own SaaS products. Keep 100% of your revenue. No attribution required.
              </p>
            </div>

            <div>
              <h4 class="font-bold text-gray-900 mb-2">What if it doesn't work for my use case?</h4>
              <p class="text-gray-700">
                30-day money-back guarantee, no questions asked. If you can't adapt it or learn from it, get a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/ui/Icon.vue'
import StripeButton from '@/components/ui/StripeButton.vue'
</script>
