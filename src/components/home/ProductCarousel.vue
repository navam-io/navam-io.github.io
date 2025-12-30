<template>
  <!-- Product Carousel Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 py-16 md:py-24">
    <!-- Subtle Code Pattern Background -->
    <div class="absolute inset-0 code-grid-pattern opacity-10"></div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-7xl mx-auto">

        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-black mb-4">
            <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Build Like the Best AI Startups
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-white/70 font-medium">
            Fork. Customize. Ship in Days.
          </p>
        </div>

        <!-- Product Carousel -->
        <div class="relative">
          <!-- Carousel Container -->
          <div class="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

            <!-- Carousel Inner -->
            <div class="relative" style="min-height: 580px;">

              <!-- Slides -->
              <transition-group name="slide" mode="out-in">
                <div
                  v-for="(product, index) in products"
                  v-show="currentIndex === index"
                  :key="product.id"
                  class="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-end"
                >
                  <!-- Left: Content -->
                  <div class="flex flex-col justify-end space-y-6">
                    <!-- Top Row: Category Badge + Tech Stack -->
                    <div class="flex items-start justify-between gap-4">
                      <!-- Category Badge -->
                      <div class="inline-block">
                        <div :class="[
                          'px-4 py-2 rounded-full text-sm font-bold border-2',
                          product.color
                        ]">
                          {{ product.category }}
                        </div>
                      </div>

                      <!-- Technology Stack - Top Right -->
                      <div class="flex flex-wrap gap-4 items-center">
                        <div v-for="tech in product.techStack" :key="tech.name" class="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                          <img
                            :src="tech.logo"
                            :alt="tech.name"
                            class="w-8 h-8 object-contain"
                            loading="lazy"
                          />
                          <span class="text-white/70 text-xs font-medium">{{ tech.name }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Name -->
                    <h3 class="text-4xl md:text-5xl font-black text-white">
                      {{ product.name }}
                    </h3>

                    <!-- Description -->
                    <p class="text-xl text-white/80 leading-relaxed">
                      {{ product.description }}
                    </p>

                    <!-- Fork This To Build -->
                    <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div class="text-sm text-white/60 mb-3 font-medium">Fork this to build:</div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div v-for="useCase in product.useCases" :key="useCase" class="flex items-start gap-2 text-white/90 text-sm">
                          <div class="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{{ useCase }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right: Screenshot - aligned to bottom of Fork this to build box -->
                  <div class="flex flex-col justify-end">
                    <div class="relative w-full max-w-2xl">
                      <!-- Terminal/Browser Window Frame -->
                      <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                        <!-- Window Header -->
                        <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
                          <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div class="text-white/60 text-sm font-mono ml-4">{{ product.windowTitle }}</div>
                        </div>

                        <!-- Screenshot with consistent sizing -->
                        <div class="bg-black aspect-[16/10]">
                          <img
                            :src="product.screenshot"
                            :alt="`${product.name} screenshot showing ${product.category}`"
                            class="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>

              <!-- Navigation Dots -->
              <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                <button
                  v-for="(product, index) in products"
                  :key="`dot-${product.id}`"
                  @click="goToSlide(index)"
                  :class="[
                    'w-3 h-3 rounded-full transition-all duration-300',
                    currentIndex === index ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                  ]"
                  :aria-label="`Go to ${product.name}`"
                ></button>
              </div>

              <!-- Navigation Arrows -->
              <button
                @click="prevSlide"
                class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-20 hidden lg:flex"
                aria-label="Previous product"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                @click="nextSlide"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-20 hidden lg:flex"
                aria-label="Next product"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Carousel Progress Bar -->
          <div class="mt-6 flex items-center justify-center gap-4">
            <div class="text-white/60 text-sm">
              <span class="text-white font-bold">{{ currentIndex + 1 }}</span> / {{ products.length }}
            </div>
            <div class="flex-1 max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                :style="{ width: `${((currentIndex + 1) / products.length) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  githubUrl: string;
  buyButtonId: string;
  blogSlug: string;
  screenshot: string;
  windowTitle: string;
  color: string;
  techStack: Technology[];
}

interface Technology {
  name: string;
  logo: string;
}

const products: Product[] = [
  {
    id: 'lattice',
    name: 'Lattice',
    category: 'AI Infrastructure Research Assistant',
    description: 'Agentic AI lab assistant for research engineers, platform leads, and CTOs. Make confident AI infrastructure decisions with grounded recommendations and full citations.',
    useCases: [
      'AI infrastructure planning',
      'Vendor evaluation & comparison',
      'Model selection for workloads',
      'Cost optimization analysis',
      'Compliance-aware stack design',
      'Architecture decision support',
      'LLM evaluation workflows',
      'AI platform modernization'
    ],
    githubUrl: 'https://www.latticelab.io',
    buyButtonId: '',
    blogSlug: '',
    screenshot: '/images/lattice/lattice-lab-panel.png',
    windowTitle: 'latticelab.io',
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    techStack: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangGraph', logo: 'https://cdn.simpleicons.org/langchain/FFFFFF' },
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/FFFFFF' },
      { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
    ]
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    category: 'Visual Agent Testing Reference',
    description: 'Click-to-add visual canvas for AI agent testing with React Flow 12.3, real-time YAML generation, and type-safe Pydantic DSL. 473 tests, 68 components, unified library with 12 categories.',
    useCases: [
      'AI agent testing platforms',
      'LLM evaluation tools',
      'Testing automation systems',
      'Quality assurance dashboards',
      'Agent debugging tools',
      'Test case builders',
      'Workflow validation systems',
      'Agent orchestration testing'
    ],
    githubUrl: 'https://github.com/navam-io/sentinel',
    buyButtonId: 'buy_btn_1SWTIIRCxnzBPkIXA882bLYZ',
    blogSlug: 'visual-first-design',
    screenshot: '/images/sentinel/navam-sentinel-release-55.png',
    windowTitle: 'Sentinel - AI Agent Testing Platform',
    color: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    techStack: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Tauri', logo: 'https://cdn.simpleicons.org/tauri/FFFFFF' }
    ]
  },
  {
    id: 'invest',
    name: 'Navam Invest',
    category: 'Investment Intelligence Reference',
    description: '10-agent AI system with LangGraph orchestration, streaming TUI, and intelligent caching. Complete investment research platform.',
    useCases: [
      'Portfolio management tools',
      'Trading bots and algorithms',
      'Financial advisory platforms',
      'Crypto analysis systems',
      'Wealth management apps',
      'Investment research tools',
      'Risk assessment platforms',
      'Market intelligence systems'
    ],
    githubUrl: 'https://github.com/navam-io/navam-invest',
    buyButtonId: 'buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe',
    blogSlug: 'introducing-navam-invest',
    screenshot: '/refer/images/navam-invest/natural-prompt.png',
    windowTitle: 'navam-invest',
    color: 'bg-green-500/10 text-green-400 border-green-500/30',
    techStack: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/FFFFFF' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ]
  },
  {
    id: 'moments',
    name: 'Moments',
    category: 'Business Intelligence Reference',
    description: 'Next.js dashboard with D3.js force-directed graphs, three-tier analytics, and real-time correlation insights. 237+ entities, 1,814 relationships.',
    useCases: [
      'Analytics platforms',
      'BI dashboards',
      'Knowledge management systems',
      'Data visualization tools',
      'Corporate intelligence',
      'Strategic planning tools',
      'Market research platforms',
      'Competitive analysis systems'
    ],
    githubUrl: 'https://github.com/navam-io/moments',
    buyButtonId: 'buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe',
    blogSlug: 'moments-dashboard-three-tier-analytics',
    screenshot: '/images/blog/dashboard.png',
    windowTitle: 'localhost:3000 - Moments',
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    techStack: [
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'D3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' }
    ]
  },
  {
    id: 'command',
    name: 'Command',
    category: 'Terminal Productivity Reference',
    description: 'AI-powered CLI with markdown workflow automation, Obsidian integration, and multi-provider LLM support. Terminal-first productivity.',
    useCases: [
      'DevOps automation tools',
      'CLI applications',
      'Workflow managers',
      'Terminal AI assistants',
      'Code generation CLIs',
      'Documentation generators',
      'Task automation systems',
      'Developer productivity tools'
    ],
    githubUrl: 'https://github.com/navam-io/command',
    buyButtonId: 'buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe',
    blogSlug: 'introducing-command-ai-productivity-terminal',
    screenshot: '/images/blog/command-workflows.png',
    windowTitle: 'terminal - command',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    techStack: [
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/FFFFFF' },
      { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/FFFFFF' },
      { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/FFFFFF' },
      { name: 'Ollama', logo: 'https://cdn.simpleicons.org/ollama/FFFFFF' }
    ]
  },
  {
    id: 'memo',
    name: 'Memo',
    category: 'Browser AI Reference',
    description: 'Multi-provider AI browsing companion with YouTube integration, local Ollama support, and privacy-first design. Browser extension framework.',
    useCases: [
      'Research tools',
      'Content aggregators',
      'Browser AI assistants',
      'Knowledge capture systems',
      'Note-taking extensions',
      'Content summarizers',
      'Web scraping tools',
      'Reading comprehension aids'
    ],
    githubUrl: 'https://github.com/navam-io/memo',
    buyButtonId: 'buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe',
    blogSlug: 'introducing-trenddit-memo-ai-browsing',
    screenshot: '/images/blog/chat-with-memo.png',
    windowTitle: 'Memo - AI Browsing',
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    techStack: [
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/FFFFFF' },
      { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/FFFFFF' },
      { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/FFFFFF' },
      { name: 'Ollama', logo: 'https://cdn.simpleicons.org/ollama/FFFFFF' }
    ]
  },
  {
    id: 'trends',
    name: 'Trends',
    category: 'Enterprise Intelligence Reference',
    description: 'AI-driven technology trend analysis with multi-agent reasoning, enterprise decision support, and strategic intelligence. Automated market research.',
    useCases: [
      'Technology assessment tools',
      'Market research platforms',
      'Competitive intelligence',
      'Strategic planning systems',
      'Technology radar dashboards',
      'Innovation tracking tools',
      'Vendor evaluation platforms',
      'Investment research systems'
    ],
    githubUrl: 'https://github.com/navam-io/trends',
    buyButtonId: 'buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe',
    blogSlug: 'ai-driven-trend-analysis-enterprise-intelligence',
    screenshot: '/images/blog/trends-intelligence-cards.png',
    windowTitle: 'Trends - Enterprise Intelligence',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    techStack: [
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/FFFFFF' }
    ]
  }
];

const currentIndex = ref(0);
let autoplayInterval: number | null = null;

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % products.length;
  resetAutoplay();
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + products.length) % products.length;
  resetAutoplay();
}

function goToSlide(index: number) {
  currentIndex.value = index;
  resetAutoplay();
}

function startAutoplay() {
  autoplayInterval = window.setInterval(() => {
    nextSlide();
  }, 7000);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* Code Grid Pattern */
.code-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: -1px -1px;
}

/* Slide Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Glass morphism enhancements */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
