<template>
  <div :class="containerClass">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      <!-- Image Section -->
      <div :class="imageColClass">
        <div v-if="product === 'moments' || product === 'memo'" class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
          <div class="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="flex-1 text-center text-sm text-gray-600 font-medium">{{ browserTitle }}</div>
          </div>
          <img
            :src="image"
            :alt="imageAlt"
            class="w-full"
            loading="lazy"
          />
        </div>
        <div v-else-if="product === 'trends'" class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
          <div class="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="flex-1 text-center text-sm text-gray-600 font-medium">app.trenddit.com - Trend Intelligence</div>
          </div>
          <img
            :src="image"
            :alt="imageAlt"
            class="w-full"
            loading="lazy"
          />
        </div>
        <div v-else-if="product === 'command'" class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
          <div class="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="flex-1 text-center text-sm text-gray-300 font-medium font-mono">Terminal - Command CLI</div>
          </div>
          <div class="bg-gray-900 p-6">
            <pre class="text-green-400 font-mono text-sm"><code>$ ask "create a table of planets"

# Streaming response from Claude Sonnet 4.5...

| Planet   | Distance from Sun | Diameter    | Moons |
|----------|------------------|-------------|--------|
| Mercury  | 57.9 million km  | 4,879 km    | 0      |
| Venus    | 108.2 million km | 12,104 km   | 0      |
| Earth    | 149.6 million km | 12,742 km   | 1      |
| Mars     | 227.9 million km | 6,779 km    | 2      |

$ cmnd test ask
✓ Claude Sonnet 4.5: 1.2s (fast)
✓ GPT-4o: 1.8s (accurate)
✓ Gemini Flash: 0.8s (ultra-fast)</code></pre>
          </div>
        </div>
        <div v-else class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
          <img
            :src="image"
            :alt="imageAlt"
            class="w-full"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Content Section -->
      <div :class="contentColClass">
        <div :class="badgeClass">
          {{ badge }}
        </div>
        <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ title }}</h3>
        <p class="text-lg text-gray-600 mb-6">
          {{ description }}
        </p>
        <ul class="space-y-3 mb-8">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
            <div :class="checkmarkClass">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>
        <div class="flex flex-wrap gap-4">
          <a
            :href="githubUrl"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <StripeButton buyButtonId="buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe" />
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import StripeButton from '@/components/ui/StripeButton.vue'

interface Props {
  product: 'invest' | 'moments' | 'trends' | 'memo' | 'command'
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'left'
})

const productConfig = {
  invest: {
    badge: 'Python Terminal Application',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Navam Invest',
    description: 'Multi-agent investment intelligence with streaming TUI. Production-grade test coverage and code metrics shown in real terminal output.',
    features: [
      '10 specialized AI agents with LangGraph orchestration',
      '90%+ test coverage with detailed metrics',
      'Textual TUI framework with streaming responses'
    ],
    githubUrl: 'https://github.com/navam-io/navam-invest',
    image: '/refer/images/navam-invest/natural-prompt.png',
    imageAlt: 'Navam Invest Natural Language Prompt Interface',
    browserTitle: '',
    checkmarkColor: 'bg-blue-600'
  },
  moments: {
    badge: 'Next.js Business Intelligence',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Moments',
    description: 'AI-powered analytics dashboard with knowledge graphs and three-tier intelligence. Real-time visualization of business insights.',
    features: [
      'D3.js force-directed graph with 237+ entities',
      'Three-tier analytics: Strategic, Tactical, Operational',
      'Real-time correlation insights and trend detection'
    ],
    githubUrl: 'https://github.com/navam-io/moments',
    image: '/images/blog/dashboard.png',
    imageAlt: 'Moments Analytics Dashboard',
    browserTitle: 'localhost:3000 - Moments Dashboard',
    checkmarkColor: 'bg-purple-600'
  },
  trends: {
    badge: 'Next.js 15 Enterprise App',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Trends',
    description: 'Strategic intelligence platform with tRPC and Supabase. Card-based UI for tracking and analyzing enterprise trends with AI-powered insights.',
    features: [
      'tRPC for end-to-end type safety without code gen',
      'Supabase PostgreSQL with real-time subscriptions',
      'Feature-slice architecture for scalable development'
    ],
    githubUrl: 'https://github.com/navam-io/trends',
    image: '/images/blog/trends-intelligence-cards.png',
    imageAlt: 'Trends Trend Analysis',
    browserTitle: 'app.trenddit.com - Trend Intelligence',
    checkmarkColor: 'bg-green-600'
  },
  memo: {
    badge: 'Chrome Extension',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Memo',
    description: 'Knowledge management extension with multi-provider AI. Capture, tag, and chat with your browsing insights using Claude, GPT, Gemini, or local Ollama.',
    features: [
      'Multi-provider AI: Claude, OpenAI, Gemini, Ollama',
      'Chrome Manifest V3 with Service Workers',
      'Provider factory pattern for unified AI interfaces'
    ],
    githubUrl: 'https://github.com/navam-io/memo',
    image: '/images/blog/save-memo.png',
    imageAlt: 'Memo Chrome Extension',
    browserTitle: 'Chrome Extension - Memo',
    checkmarkColor: 'bg-orange-600'
  },
  command: {
    badge: 'Python CLI Tool',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    title: 'Command',
    description: 'Turn your Terminal into a configurable AI workspace with 15+ LLMs and 7 providers. Intent-driven workflows with markdown integration.',
    features: [
      '15+ models: Claude, GPT-4o, Gemini, Groq, Ollama',
      'Intent-driven workflows with VS Code & Obsidian',
      'Model testing, trends visualization, audit trail'
    ],
    githubUrl: 'https://github.com/navam-io/command',
    image: '/images/blog/command-hero.png',
    imageAlt: 'Command CLI Interface',
    browserTitle: 'Terminal - Command CLI',
    checkmarkColor: 'bg-cyan-600'
  }
}

const config = computed(() => productConfig[props.product])

const containerClass = computed(() =>
  'py-24 bg-white'
)

const imageColClass = computed(() => {
  if (props.imagePosition === 'left') {
    return 'lg:col-span-3 order-1 lg:order-1'
  } else {
    return 'lg:col-span-3 order-1 lg:order-2'
  }
})

const contentColClass = computed(() => {
  if (props.imagePosition === 'left') {
    return 'lg:col-span-2 order-2 lg:order-2'
  } else {
    return 'lg:col-span-2 order-2 lg:order-1'
  }
})

const badgeClass = computed(() =>
  `inline-block px-3 py-1 ${config.value.badgeColor} rounded-full text-sm font-semibold mb-4`
)

const checkmarkClass = computed(() =>
  `w-6 h-6 ${config.value.checkmarkColor} rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`
)

const badge = computed(() => config.value.badge)
const title = computed(() => config.value.title)
const description = computed(() => config.value.description)
const features = computed(() => config.value.features)
const githubUrl = computed(() => config.value.githubUrl)
const image = computed(() => config.value.image)
const imageAlt = computed(() => config.value.imageAlt)
const browserTitle = computed(() => config.value.browserTitle)
</script>
