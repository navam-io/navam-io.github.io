<template>
  <!-- The Developer's Dream - Anti-Marketing Hero -->
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900">
    <!-- Subtle Code Pattern Background -->
    <div class="absolute inset-0 code-grid-pattern opacity-10"></div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-16 md:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">

        <!-- Left Column: Copy -->
        <div class="text-left space-y-8">

          <!-- Install Command as Headline -->
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-green-400 text-sm font-medium">Production Ready • Business Source License</span>
            </div>

            <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span class="font-mono text-green-400 block mb-2">pip install</span>
              <span class="text-white block">navam-invest</span>
            </h1>
          </div>

          <!-- Subheadline -->
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light leading-tight">
            It actually works.<br />
            <span class="text-white/70">First time. In production.</span>
          </h2>

          <!-- Body Copy -->
          <div class="text-lg md:text-xl text-white/70 space-y-4 max-w-xl">
            <p>
              10 specialized AI agents. 32+ API tools. Streaming workflows.
              Complete documentation. 90%+ test coverage. Battle-tested.
            </p>
            <p class="text-white/80 font-medium">
              This is the multi-agent system you wish existed when you started.
            </p>
          </div>

          <!-- Stats Strip -->
          <div class="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
            <div>
              <div class="text-3xl font-black text-white mb-1">10</div>
              <div class="text-sm text-white/60">AI Agents</div>
            </div>
            <div>
              <div class="text-3xl font-black text-white mb-1">32+</div>
              <div class="text-sm text-white/60">API Tools</div>
            </div>
            <div>
              <div class="text-3xl font-black text-white mb-1">90%+</div>
              <div class="text-sm text-white/60">Test Coverage</div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              size="xl"
              as="a"
              href="https://github.com/navam-io/navam-invest"
              target="_blank"
              class="bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl group"
            >
              <span class="flex items-center gap-2">
                <Icon name="github" size="md" />
                View Source on GitHub
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </Button>

            <Button
              size="xl"
              variant="outline"
              as="a"
              href="/blog/introducing-navam-invest"
              class="border-2 border-white/30 text-white hover:bg-white/10"
            >
              <span class="flex items-center gap-2">
                Read the Docs
                <Icon name="arrow-right" size="sm" />
              </span>
            </Button>
          </div>

          <!-- Copy-to-Clipboard Install Command -->
          <div class="inline-block">
            <button
              @click="copyInstallCommand"
              class="group flex items-center gap-3 px-6 py-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all"
            >
              <code class="text-green-400 font-mono text-base">$ pip install navam-invest</code>
              <div class="flex items-center gap-2 text-sm text-white/60 group-hover:text-green-400 transition-colors">
                <Icon :name="copied ? 'check' : 'copy'" size="sm" />
                <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
              </div>
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap gap-6 pt-4 text-sm text-white/60">
            <div class="flex items-center gap-2">
              <Icon name="check-circle" size="sm" class="text-green-400" />
              <span>Works first install</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="check-circle" size="sm" class="text-green-400" />
              <span>Fully documented</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="check-circle" size="sm" class="text-green-400" />
              <span>Business Source License</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Terminal Screenshot -->
        <div class="relative lg:block hidden">
          <!-- Terminal Window -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm">
            <!-- Terminal Header -->
            <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-white/60 text-sm font-mono ml-4">navam-invest</div>
            </div>

            <!-- Terminal Content -->
            <div class="p-6 font-mono text-sm">
              <!-- Actual Product Screenshot -->
              <img
                src="/refer/images/navam-invest/natural-prompt.png"
                alt="Navam Invest terminal interface showing AI investment analysis"
                class="w-full rounded-lg shadow-lg"
              />

              <!-- Live Indicator -->
              <div class="flex items-center gap-2 mt-4 text-green-400">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-xs">Live production system • Try it now</span>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -top-4 -right-4">
              <div class="px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-xl transform rotate-12">
                <div class="flex items-center gap-2">
                  <Icon name="star" size="sm" />
                  <span>Flagship Product</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Features -->
          <div class="absolute -left-8 top-1/4 hidden xl:block">
            <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-xl">
              <div class="text-xs text-white/60 mb-2">Built with</div>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-white">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>LangGraph</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-white">
                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Claude AI</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-white">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -right-8 bottom-1/4 hidden xl:block">
            <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-xl">
              <div class="text-2xl font-black text-white mb-1">$3-15</div>
              <div class="text-xs text-white/60">per month</div>
              <div class="text-xs text-white/80 mt-2">API costs only</div>
            </div>
          </div>
        </div>

        <!-- Mobile: Show simplified screenshot -->
        <div class="lg:hidden">
          <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/refer/images/navam-invest/starting.png"
              alt="Navam Invest terminal interface"
              class="w-full"
            />
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/ui/Icon.vue';

const copied = ref(false);

function copyInstallCommand() {
  navigator.clipboard.writeText('pip install navam-invest');
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
}
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

/* Smooth animations */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1, h2 {
  animation: fade-up 0.8s ease-out;
}

/* Terminal glow effect */
img {
  box-shadow: 0 0 80px rgba(16, 185, 129, 0.1);
}
</style>
