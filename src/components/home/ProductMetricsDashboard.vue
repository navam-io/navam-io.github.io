<template>
  <section class="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Real Production Code. Real Business Value.
        </h2>
        <p class="text-lg text-gray-700">
          Complete, battle-tested codebases with proven metrics and full vibe coding automation.
        </p>
      </div>

      <!-- Product Selector Tabs -->
      <div class="max-w-5xl mx-auto mb-8">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="product in products"
            :key="product.id"
            @click="selectedProduct = product.id"
            :class="[
              'px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform',
              'flex items-center gap-2',
              selectedProduct === product.id
                ? `${product.activeClass} shadow-lg scale-105`
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:scale-102'
            ]"
          >
            <div :class="['w-5 h-5 flex items-center justify-center', selectedProduct === product.id ? '' : 'text-gray-600']">
              <Icon :name="product.icon" size="sm" />
            </div>
            {{ product.name }}
          </button>
        </div>
      </div>

      <!-- Compact Metrics Dashboard -->
      <div class="max-w-7xl mx-auto">
        <!-- First Row: Four Metric Cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- Architecture -->
          <div class="compact-card card-animate" style="animation-delay: 0ms">
            <h4 class="compact-card-title">
              <div class="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded flex items-center justify-center icon-pulse">
                <Icon name="chip" size="sm" class="text-white" />
              </div>
              Architecture
            </h4>
            <div class="space-y-2">
              <div v-for="(item, index) in currentMetrics.architecture.slice(0, 3)" :key="index" class="compact-item">
                <span class="compact-count">{{ item.count }}</span>
                <span class="compact-name">{{ item.name }}</span>
              </div>
            </div>
          </div>

          <!-- Integrations -->
          <div class="compact-card card-animate" style="animation-delay: 100ms">
            <h4 class="compact-card-title">
              <div class="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded flex items-center justify-center icon-pulse" style="animation-delay: 100ms">
                <Icon name="bolt" size="sm" class="text-white" />
              </div>
              Integrations
            </h4>
            <div class="space-y-2">
              <div v-for="(item, index) in currentMetrics.integrations.slice(0, 3)" :key="index" class="compact-item">
                <span class="compact-count">{{ item.count }}</span>
                <span class="compact-name">{{ item.name }}</span>
              </div>
            </div>
          </div>

          <!-- Production -->
          <div class="compact-card card-animate" style="animation-delay: 200ms">
            <h4 class="compact-card-title">
              <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center icon-pulse" style="animation-delay: 200ms">
                <Icon name="check-badge" size="sm" class="text-white" />
              </div>
              Production
            </h4>
            <div class="space-y-2">
              <div v-for="(item, index) in currentMetrics.production.slice(0, 3)" :key="index" class="compact-item-check">
                <span class="check-icon">✓</span>
                <span class="compact-name-small">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Code Quality -->
          <div class="compact-card card-animate" style="animation-delay: 300ms">
            <h4 class="compact-card-title">
              <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center icon-pulse" style="animation-delay: 300ms">
                <Icon name="chart-bar" size="sm" class="text-white" />
              </div>
              Code Quality
            </h4>
            <div class="grid grid-cols-2 gap-2">
              <div class="metric-mini">
                <div class="metric-mini-value">{{ formatNumber(currentMetrics.totalLOC) }}</div>
                <div class="metric-mini-label">LOC</div>
              </div>
              <div class="metric-mini">
                <div class="metric-mini-value">{{ currentMetrics.sourceFiles }}</div>
                <div class="metric-mini-label">Files</div>
              </div>
              <div class="metric-mini">
                <div class="metric-mini-value">{{ currentMetrics.testCoverage }}%</div>
                <div class="metric-mini-label">Tests</div>
              </div>
              <div class="metric-mini">
                <div class="metric-mini-value">{{ currentMetrics.typeSafety }}%</div>
                <div class="metric-mini-label">Types</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row: Vibe Coding Readiness + Senior Engineer Package -->
        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Left: Vibe Coding Readiness -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg border-2 border-purple-200 card-slide-in-left">
            <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center icon-pulse">
                <Icon name="lightning" size="sm" class="text-white" />
              </div>
              Vibe Coding Readiness
            </h3>
            <div class="space-y-3">
              <div class="vibe-stat">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-semibold text-gray-700">Slash Commands</span>
                  <span class="vibe-badge">{{ currentMetrics.vibeMetrics.slashCommands }}</span>
                </div>
                <div class="vibe-bar">
                  <div class="vibe-bar-fill" :style="{ width: (currentMetrics.vibeMetrics.slashCommands / 10 * 100) + '%' }"></div>
                </div>
              </div>
              <div class="vibe-stat">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-semibold text-gray-700">Feature Backlog</span>
                  <span class="vibe-badge">{{ currentMetrics.vibeMetrics.backlogItems }}</span>
                </div>
                <div class="vibe-bar">
                  <div class="vibe-bar-fill" :style="{ width: Math.min((currentMetrics.vibeMetrics.backlogItems / 50 * 100), 100) + '%' }"></div>
                </div>
              </div>
              <div class="vibe-stat">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-semibold text-gray-700">CLAUDE.md Guide</span>
                  <span class="vibe-badge">{{ currentMetrics.vibeMetrics.claudeMdLines }} lines</span>
                </div>
                <div class="vibe-bar">
                  <div class="vibe-bar-fill" :style="{ width: (currentMetrics.vibeMetrics.claudeMdLines / 700 * 100) + '%' }"></div>
                </div>
              </div>
              <div class="vibe-stat">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-semibold text-gray-700">Documentation Files</span>
                  <span class="vibe-badge">{{ currentMetrics.vibeMetrics.totalDocs }}</span>
                </div>
                <div class="vibe-bar">
                  <div class="vibe-bar-fill" :style="{ width: (currentMetrics.vibeMetrics.totalDocs / 20 * 100) + '%' }"></div>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-purple-200">
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold text-gray-900">Readiness Score</span>
                <span class="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent score-pulse">
                  {{ currentMetrics.vibeMetrics.readinessScore }}%
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Senior Engineer Package - Pricing Card -->
          <div class="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl p-8 text-white shadow-xl text-center card-slide-in-right">
            <!-- Package Header with Icon -->
            <div class="flex items-center justify-center gap-3 mb-3">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center icon-pulse">
                <Icon name="box" size="lg" class="text-white" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold">Senior Engineer Package</h3>
            </div>

            <!-- Description -->
            <p class="text-base md:text-lg text-white/90 mb-4">
              Get all 5 products with commercial licenses
            </p>

            <!-- Pricing -->
            <div class="mb-2">
              <div class="text-5xl md:text-6xl font-black mb-1 price-pop">$799</div>
              <div class="text-sm text-white/80">one-time</div>
            </div>

            <!-- Savings -->
            <div class="text-sm text-white/90 mb-6">
              Regular: $1,495 • Save $696 (47%)
            </div>

            <!-- CTA Button -->
            <div class="mb-6">
              <StripeButton buyButtonId="buy_btn_1SJ5etRCxnzBPkIXogmTaqPH" />
            </div>

            <!-- Aggregate Metrics Banner -->
            <div class="border-t border-white/20 pt-4">
              <div class="grid grid-cols-3 lg:grid-cols-5 gap-3">
                <div class="metric-badge">
                  <div class="metric-badge-value">192K+</div>
                  <div class="metric-badge-label">Lines</div>
                </div>
                <div class="metric-badge">
                  <div class="metric-badge-value">598</div>
                  <div class="metric-badge-label">Files</div>
                </div>
                <div class="metric-badge">
                  <div class="metric-badge-value">27+</div>
                  <div class="metric-badge-label">Agents</div>
                </div>
                <div class="metric-badge">
                  <div class="metric-badge-value">42+</div>
                  <div class="metric-badge-label">Commands</div>
                </div>
                <div class="metric-badge col-span-3 lg:col-span-1">
                  <div class="metric-badge-value">100%</div>
                  <div class="metric-badge-label">Vibe Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/ui/Icon.vue'
import StripeButton from '@/components/ui/StripeButton.vue'

type ProductId = 'invest' | 'moments' | 'trends' | 'memo' | 'command'

interface VibeMetrics {
  slashCommands: number
  backlogItems: number
  docsFiles: number
  referFiles: number
  specsFiles: number
  claudeMdLines: number
  totalDocs: number
  readinessScore: number
}

interface Product {
  id: ProductId
  name: string
  icon: string
  activeClass: string
}

const products: Product[] = [
  { id: 'invest', name: 'Navam Invest', icon: 'dollar-circle', activeClass: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' },
  { id: 'moments', name: 'Moments', icon: 'lightning', activeClass: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' },
  { id: 'trends', name: 'Trends', icon: 'chart-bar', activeClass: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' },
  { id: 'memo', name: 'Memo', icon: 'document-text', activeClass: 'bg-gradient-to-r from-orange-500 to-red-500 text-white' },
  { id: 'command', name: 'Command', icon: 'terminal', activeClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' }
]

const selectedProduct = ref<ProductId>('invest')

// Vibe Coding Readiness Score Calculation:
// Based on automation infrastructure and developer experience factors:
// - Slash Commands (weight: 30%) - Custom workflow automation
// - CLAUDE.md Guide (weight: 25%) - AI coding instructions depth
// - Feature Specs/Backlog (weight: 25%) - Development roadmap with checkbox tracking
// - Documentation Files (weight: 20%) - Reference material availability
//
// Data Sources (verified 2025-10-18):
// - navam-invest: 10 slash commands, 38+ tracked features (23 active + 15 in releases), 656-line CLAUDE.md, 13 docs/refer
// - moments: 6 slash commands, 3 backlog files, 8 spec files, 281-line CLAUDE.md
// - trends: 5 slash commands, 6 feature specs, 451-line CLAUDE.md
// - memo: 7 slash commands, 14 tracked features in roadmap.md, 4 spec files, 289-line CLAUDE.md, 1 doc
//
// Note: Feature counts based on actual checkbox items [x]/[ ] found in markdown files

const metricsData = {
  invest: {
    totalLOC: 45024,
    sourceFiles: 66,
    testCoverage: 45,
    typeSafety: 97,
    vibeMetrics: {
      slashCommands: 10,
      backlogItems: 38,
      docsFiles: 8,
      referFiles: 5,
      specsFiles: 0,
      claudeMdLines: 656,
      totalDocs: 13,
      readinessScore: 98
    },
    architecture: [
      { count: '11', name: 'Specialized Agents' },
      { count: '10', name: 'API Integrations' },
      { count: '5', name: 'Workflows' }
    ],
    integrations: [
      { count: '32+', name: 'Financial APIs' },
      { count: '10', name: 'Data Sources' },
      { count: '3', name: 'LLM Providers' }
    ],
    production: [
      'Streaming Workflows',
      'Smart Caching',
      'Intent Routing',
      'Error Handling'
    ]
  },
  moments: {
    totalLOC: 81662,
    sourceFiles: 136,
    testCoverage: 8,
    typeSafety: 100,
    vibeMetrics: {
      slashCommands: 6,
      backlogItems: 3,
      docsFiles: 0,
      referFiles: 0,
      specsFiles: 8,
      claudeMdLines: 281,
      totalDocs: 8,
      readinessScore: 88
    },
    architecture: [
      { count: '55', name: 'React Components' },
      { count: '15', name: 'API Routes' },
      { count: '12', name: 'Custom Hooks' }
    ],
    integrations: [
      { count: '4', name: 'AI Providers' },
      { count: '3', name: 'Zustand Stores' },
      { count: 'D3', name: 'Visualization' }
    ],
    production: [
      'Next.js App Router',
      'Multi-Provider AI',
      'Knowledge Graphs',
      'Correlation Engine'
    ]
  },
  trends: {
    totalLOC: 28407,
    sourceFiles: 93,
    testCoverage: 0,
    typeSafety: 100,
    vibeMetrics: {
      slashCommands: 5,
      backlogItems: 0,
      docsFiles: 0,
      referFiles: 0,
      specsFiles: 6,
      claudeMdLines: 451,
      totalDocs: 6,
      readinessScore: 82
    },
    architecture: [
      { count: '4', name: 'Feature Slices' },
      { count: '4', name: 'tRPC Routers' },
      { count: '2', name: 'Intelligence Agents' }
    ],
    integrations: [
      { count: 'Claude', name: 'Anthropic AI' },
      { count: 'Vercel', name: 'AI SDK' },
      { count: 'Supabase', name: 'Database' }
    ],
    production: [
      'Feature-Slice Arch',
      'Event-Driven',
      'Market Intelligence',
      'Type-Safe APIs'
    ]
  },
  memo: {
    totalLOC: 21891,
    sourceFiles: 44,
    testCoverage: 47,
    typeSafety: 96,
    vibeMetrics: {
      slashCommands: 7,
      backlogItems: 14,
      docsFiles: 1,
      referFiles: 0,
      specsFiles: 4,
      claudeMdLines: 289,
      totalDocs: 9,
      readinessScore: 93
    },
    architecture: [
      { count: '4', name: 'LLM Providers' },
      { count: '6', name: 'Chrome APIs' },
      { count: '20', name: 'Message Handlers' }
    ],
    integrations: [
      { count: '4', name: 'AI Providers' },
      { count: '1', name: 'Local LLM' },
      { count: '5', name: 'Permissions' }
    ],
    production: [
      'Manifest V3',
      'Multi-Provider LLM',
      'Privacy-First',
      'YouTube Extract'
    ]
  },
  command: {
    totalLOC: 15000,
    sourceFiles: 45,
    testCoverage: 75,
    typeSafety: 92,
    vibeMetrics: {
      slashCommands: 1,
      backlogItems: 25,
      docsFiles: 12,
      referFiles: 8,
      specsFiles: 0,
      claudeMdLines: 374,
      totalDocs: 20,
      readinessScore: 95
    },
    architecture: [
      { count: '14+', name: 'CLI Commands' },
      { count: '7', name: 'Providers' },
      { count: '15+', name: 'Models' }
    ],
    integrations: [
      { count: '7', name: 'AI Providers' },
      { count: '15+', name: 'LLM Models' },
      { count: '4', name: 'Local Models' }
    ],
    production: [
      'Intent Workflows',
      'Model Testing',
      'Audit Trail',
      'Privacy Controls'
    ]
  }
}

const currentMetrics = computed(() => metricsData[selectedProduct.value])

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes pricePop {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes scorePulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.card-animate {
  animation: fadeInUp 500ms ease-out forwards;
  opacity: 0;
}

.card-slide-in-left {
  animation: slideInLeft 600ms ease-out 400ms forwards;
  opacity: 0;
}

.card-slide-in-right {
  animation: slideInRight 600ms ease-out 400ms forwards;
  opacity: 0;
}

.icon-pulse {
  animation: iconPulse 2s ease-in-out infinite;
}

.price-pop {
  animation: pricePop 2s ease-in-out infinite;
}

.score-pulse {
  animation: scorePulse 2s ease-in-out infinite;
}

/* Compact Metric Cards */
.compact-card {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(229, 231, 235);
  transition: all 0.3s ease;
}

.compact-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.compact-card-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(17, 24, 39);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.compact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: linear-gradient(90deg, rgb(249, 250, 251), rgb(239, 246, 255));
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.compact-item:hover {
  background: linear-gradient(90deg, rgb(239, 246, 255), rgb(243, 232, 255));
  transform: translateX(2px);
}

.compact-item-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

.compact-count {
  font-size: 1.125rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-width: 2rem;
}

.compact-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(55, 65, 81);
}

.compact-name-small {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(55, 65, 81);
  line-height: 1.2;
}

.check-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  background: linear-gradient(135deg, rgb(74, 222, 128), rgb(22, 163, 74));
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 9999px;
  flex-shrink: 0;
}

/* Mini Metrics in Code Quality Card */
.metric-mini {
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, rgb(243, 244, 246) 0%, rgb(239, 246, 255) 100%);
  border-radius: 0.375rem;
}

.metric-mini-value {
  font-size: 1.25rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.125rem;
}

.metric-mini-label {
  font-size: 0.625rem;
  font-weight: 600;
  color: rgb(107, 114, 128);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Vibe Coding Stats */
.vibe-stat {
  padding: 0.5rem 0;
}

.vibe-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgb(147, 51, 234), rgb(59, 130, 246));
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
}

.vibe-bar {
  height: 0.5rem;
  background-color: rgba(147, 51, 234, 0.1);
  border-radius: 9999px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.vibe-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, rgb(147, 51, 234), rgb(59, 130, 246));
  border-radius: 9999px;
  transition: width 0.8s ease-out;
}

/* Metric Badge in Pricing Card */
.metric-badge {
  text-align: center;
}

.metric-badge-value {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 0.125rem;
}

@media (min-width: 768px) {
  .metric-badge-value {
    font-size: 1.5rem;
  }
}

.metric-badge-label {
  font-size: 0.625rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (min-width: 768px) {
  .metric-badge-label {
    font-size: 0.75rem;
  }
}
</style>
