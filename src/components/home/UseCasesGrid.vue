<template>
  <section class="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          What AI Engineers Are Building
        </h2>
      </div>

      <!-- Use Case Grid (3 columns, 2 rows) -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <!-- Business Analytics -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="chart-pie" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Business Analytics</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Moments</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-purple-600">•</span>
                  <span>Market intelligence dashboards</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600">•</span>
                  <span>Knowledge graph visualizations</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600">•</span>
                  <span>Correlation analysis tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600">•</span>
                  <span>Factor analytics platforms</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                D3.js visualizations, knowledge graphs, three-tier analytics, network analysis
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
            <p class="text-sm text-gray-600">Reference: <strong>Memo</strong></p>
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
                  <span>Browser-based AI tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>Content summarization</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-orange-600">•</span>
                  <span>YouTube transcript analysis</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Browser extensions, multi-provider AI, privacy-first design, local LLM support
              </p>
            </div>
          </div>
        </div>

        <!-- Agent Testing & QA -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="shield-check" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Agent Testing & QA</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Sentinel</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-teal-600">•</span>
                  <span>AI agent testing platforms</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-600">•</span>
                  <span>LLM evaluation tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-600">•</span>
                  <span>Visual test case builders</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-600">•</span>
                  <span>Agent debugging systems</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                React Flow canvas, YAML generation, Pydantic DSL, visual-first design
              </p>
            </div>
          </div>
        </div>

        <!-- Terminal Productivity -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="terminal" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Terminal Productivity</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Command</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>DevOps automation tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>CLI AI assistants</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Workflow automation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">•</span>
                  <span>Documentation generators</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Markdown workflows, Obsidian integration, multi-provider LLMs, terminal UIs
              </p>
            </div>
          </div>
        </div>

        <!-- Enterprise Intelligence -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="chart-bar" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise Intelligence</h3>
            <p class="text-sm text-gray-600">Reference: <strong>Trends</strong></p>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Building:</h4>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Technology assessment tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Market research platforms</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Competitive intelligence</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Strategic planning systems</span>
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-2">Key patterns learned:</h4>
              <p class="text-sm text-gray-600">
                Multi-agent reasoning, trend analysis, enterprise decision support, automated research
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
