<template>
  <section class="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          What AI Engineers Are Building
        </h2>
      </div>

      <!-- Use Case Grid (3 columns) -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- FinTech & Investment -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="currency-dollar" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">FinTech & Investment</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Navam Invest</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Robo-advisor platforms</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Portfolio analytics tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Investment research automation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Trading signal services</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Wealth management backends</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600">•</span>
                  <span>Financial newsletter automation</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Multi-agent coordination, financial data integration, risk analysis, streaming UIs
              </p>
            </div>
          </div>
        </div>

        <!-- Business Intelligence -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="chart-pie" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Business Intelligence</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Moments, Navam Client</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Market intelligence dashboards</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Competitive analysis platforms</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Strategic planning tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Due diligence automation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Industry research systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Executive decision support</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Data visualization, knowledge graphs, statistical analysis, evidence aggregation
              </p>
            </div>
          </div>
        </div>

        <!-- Knowledge & Content -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="book-open" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Knowledge & Content</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Navam Memo</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Research assistants</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Content management systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Browser-based AI tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Knowledge bases</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Document intelligence</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Personal CRM systems</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Browser extensions, semantic search, multi-provider AI integration, knowledge graphs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'
</script>
