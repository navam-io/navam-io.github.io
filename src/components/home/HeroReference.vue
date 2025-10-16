<template>
  <!-- 100% Vibe Coding Ready Products Hero Section -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-900 to-purple-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-wave-pattern opacity-15"></div>

    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-24">
      <div class="text-center max-w-7xl mx-auto">
        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight animate-fade-in tracking-tight">
          <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            100% Vibe Coding<br />Ready Products
          </span>
        </h1>

        <!-- Subheadline -->
        <h2 class="text-2xl md:text-3xl text-white/80 mb-4 animate-fade-in font-light max-w-4xl mx-auto">
          Ship features in days, not months. 10x your development productivity with production-ready code.
        </h2>

        <p class="text-xl md:text-2xl text-white/70 mb-12 animate-fade-in font-light max-w-3xl mx-auto">
          Fork working products, study battle-tested patterns, build your vision—works first time.
        </p>

        <!-- Featured Products - Glass Morphism Cards (2x2 Grid) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12 animate-slide-up">
          <!-- Navam Invest Card -->
          <div class="group backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="dollar-circle" size="xl" class="text-white" />
              </div>
            </div>
            <Badge variant="featured" size="md" class="mb-4">
              <span class="flex items-center gap-1">
                <Icon name="star" size="sm" class="text-yellow-400" />
                FLAGSHIP
              </span>
            </Badge>
            <h3 class="text-3xl font-bold text-white mb-3">Navam Invest</h3>
            <p class="text-white text-base mb-6 leading-relaxed">
              10-agent investment platform with agent coordination, streaming UIs, and intelligent caching.
            </p>

            <!-- Features (Horizontal Centered) -->
            <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm text-white">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>10 AI Agents</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>Multi-Agent</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                <span>100% Vibe Coded</span>
              </div>
            </div>

            <!-- Install Command -->
            <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl px-4 py-3 mb-6 border border-gray-700/50">
              <code class="text-green-400 text-sm font-mono">pip install navam-invest</code>
            </div>

            <!-- CTAs -->
            <div class="flex gap-3">
              <Button
                size="sm"
                as="a"
                href="https://github.com/navam-io/navam-invest"
                target="_blank"
                class="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium shadow-lg"
              >
                <Icon name="github" size="sm" class="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog/introducing-navam-invest"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <!-- Moments Card -->
          <div class="group backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="lightning" size="xl" class="text-white" />
              </div>
            </div>
            <Badge variant="info" size="md" class="mb-4 bg-white/20 text-white border border-blue-300">Business Intelligence</Badge>
            <h3 class="text-3xl font-bold text-white mb-3">Moments</h3>
            <p class="text-white text-base mb-6 leading-relaxed">
              Business intelligence with knowledge graphs and three-tier analytics. 237+ entities, 1,814 relationships.
            </p>

            <!-- Features (Horizontal Centered) -->
            <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm text-white">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span>Knowledge Graphs</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>3-Tier Analytics</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                <span>100% Vibe Coded</span>
              </div>
            </div>

            <!-- Stats -->
            <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl px-4 py-3 mb-6 border border-gray-700/50">
              <code class="text-blue-400 text-sm font-mono">237+ entities · 1,814 relationships</code>
            </div>

            <!-- CTAs -->
            <div class="flex gap-3">
              <Button
                size="sm"
                as="a"
                href="https://github.com/trendditcom/moments"
                target="_blank"
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-lg"
              >
                <Icon name="github" size="sm" class="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog?tag=Strategic%20Intelligence"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <!-- Navam Client Card -->
          <div class="group backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="chart-bar" size="xl" class="text-white" />
              </div>
            </div>
            <Badge variant="info" size="md" class="mb-4 bg-purple-500/30 text-purple-100">Enterprise Intelligence</Badge>
            <h3 class="text-3xl font-bold text-white mb-3">Navam Client</h3>
            <p class="text-white text-base mb-6 leading-relaxed">
              Strategic decision support with multi-agent market analysis and technology impact predictions.
            </p>

            <!-- Features (Horizontal Centered) -->
            <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm text-white">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Trend Analysis</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                <span>Impact Modeling</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></div>
                <span>100% Vibe Coded</span>
              </div>
            </div>

            <!-- Placeholder -->
            <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl px-4 py-3 mb-6 border border-gray-700/50">
              <code class="text-purple-400 text-sm font-mono">Strategic Intelligence Platform</code>
            </div>

            <!-- CTAs -->
            <div class="flex gap-3">
              <Button
                size="sm"
                as="a"
                href="https://github.com/trendditcom/trenddit-client"
                target="_blank"
                class="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium shadow-lg"
              >
                <Icon name="github" size="sm" class="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog?tag=Strategic%20Intelligence"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <!-- Navam Memo Card -->
          <div class="group backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="document-text" size="xl" class="text-white" />
              </div>
            </div>
            <Badge variant="info" size="md" class="mb-4 bg-orange-500/30 text-orange-100">Knowledge Management</Badge>
            <h3 class="text-3xl font-bold text-white mb-3">Navam Memo</h3>
            <p class="text-white text-base mb-6 leading-relaxed">
              Chrome extension for knowledge management with AI-powered tagging and multi-provider chat.
            </p>

            <!-- Features (Horizontal Centered) -->
            <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm text-white">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span>Chrome Extension</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                <span>AI Semantic Tagging</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                <span>100% Vibe Coded</span>
              </div>
            </div>

            <!-- Placeholder -->
            <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl px-4 py-3 mb-6 border border-gray-700/50">
              <code class="text-orange-400 text-sm font-mono">Browser Extension + AI Chat</code>
            </div>

            <!-- CTAs -->
            <div class="flex gap-3">
              <Button
                size="sm"
                as="a"
                href="https://github.com/trendditcom/trenddit-memo"
                target="_blank"
                class="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium shadow-lg"
              >
                <Icon name="github" size="sm" class="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href="/blog?tag=Knowledge%20Discovery"
                class="flex-1 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 text-sm font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <!-- Universal CTA -->
        <div class="animate-slide-up-delayed flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            as="a"
            href="https://github.com/navam-io"
            target="_blank"
            class="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:scale-105"
          >
            <span class="flex items-center gap-3">
              <Icon name="github" size="md" />
              See the Code on GitHub
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            as="a"
            href="/pricing"
            class="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full hover:border-white"
          >
            <span class="flex items-center gap-3">
              View Pricing
              <Icon name="arrow-right" size="sm" />
            </span>
          </Button>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-6 text-white text-sm mt-12 animate-slide-up-delayed">
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="sm" class="text-green-400" />
            <span>80%+ First-Time Success</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="sm" class="text-green-400" />
            <span>90%+ Test Coverage</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="code" size="sm" class="text-purple-400" />
            <span>60-80% Less Code</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="sm" class="text-green-400" />
            <span>MIT Licensed</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Subtle Vignette Effect -->
    <div class="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/30"></div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/ui/Icon.vue'
</script>

<style scoped>
/* Wave background pattern */
.bg-wave-pattern {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 41%, rgba(255, 255, 255, 0.05) 42%, transparent 43%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 41%, rgba(255, 255, 255, 0.05) 42%, transparent 43%);
  background-size: 120px 120px, 80px 80px, 60px 60px, 60px 60px;
  background-position: 0 0, 40px 40px, 20px 20px, 30px 30px;
}

/* Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up-delayed {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up-delayed 1s ease-out 0.8s forwards;
  opacity: 0;
}

/* Radial gradient for vignette effect */
.bg-radial-gradient {
  background: radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 100%);
}

/* Glass morphism enhancements */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
</style>
