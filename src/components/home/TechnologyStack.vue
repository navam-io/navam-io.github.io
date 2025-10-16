<template>
  <section class="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-4">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Built on Production-Proven Technologies
        </h2>
        <p class="text-xl text-white/80">
          Every vibe coding ready product uses battle-tested technologies that scale in production
        </p>
      </div>

      <!-- Stack Grid (3 columns) -->
      <div class="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- AI & Orchestration -->
        <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="chip" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">AI & Orchestration</h3>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-white font-semibold mb-1">Anthropic Claude Sonnet 4.5</h4>
              <p class="text-white/70 text-sm">Industry-leading reasoning model</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">LangGraph</h4>
              <p class="text-white/70 text-sm">Multi-agent orchestration framework</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">LangChain</h4>
              <p class="text-white/70 text-sm">Agent and tool ecosystem</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">OpenAI-compatible APIs</h4>
              <p class="text-white/70 text-sm">Flexibility for model swapping</p>
            </div>
          </div>
        </div>

        <!-- Backend & Data -->
        <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="cog" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Backend & Data</h3>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-white font-semibold mb-1">Python 3.9+</h4>
              <p class="text-white/70 text-sm">Modern async/await patterns</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">DuckDB</h4>
              <p class="text-white/70 text-sm">Embedded analytics database</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">Async/await</h4>
              <p class="text-white/70 text-sm">Non-blocking execution</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">RESTful APIs</h4>
              <p class="text-white/70 text-sm">Standard integration patterns</p>
            </div>
          </div>
        </div>

        <!-- Frontend & UI -->
        <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-4">
              <Icon name="color-swatch" size="xl" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Frontend & UI</h3>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-white font-semibold mb-1">Textual Framework</h4>
              <p class="text-white/70 text-sm">Modern terminal interfaces</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">React (web UIs)</h4>
              <p class="text-white/70 text-sm">Component-based architecture</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">Progressive Streaming</h4>
              <p class="text-white/70 text-sm">Real-time update patterns</p>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-1">Markdown Rendering</h4>
              <p class="text-white/70 text-sm">Rich text formatting</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Badges -->
      <div class="max-w-4xl mx-auto mt-12">
        <div class="flex flex-wrap justify-center gap-4">
          <Badge variant="info" size="md" class="bg-blue-500/20 text-blue-200 border-blue-400/30">Python</Badge>
          <Badge variant="info" size="md" class="bg-green-500/20 text-green-200 border-green-400/30">LangGraph</Badge>
          <Badge variant="info" size="md" class="bg-purple-500/20 text-purple-200 border-purple-400/30">Claude</Badge>
          <Badge variant="info" size="md" class="bg-cyan-500/20 text-cyan-200 border-cyan-400/30">DuckDB</Badge>
          <Badge variant="info" size="md" class="bg-orange-500/20 text-orange-200 border-orange-400/30">Textual</Badge>
          <Badge variant="info" size="md" class="bg-pink-500/20 text-pink-200 border-pink-400/30">React</Badge>
          <Badge variant="info" size="md" class="bg-indigo-500/20 text-indigo-200 border-indigo-400/30">Async/Await</Badge>
          <Badge variant="info" size="md" class="bg-teal-500/20 text-teal-200 border-teal-400/30">REST APIs</Badge>
        </div>
      </div>
    </div>

    <!-- Vignette Effect -->
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.4) 100%);"></div>
  </section>
</template>

<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
