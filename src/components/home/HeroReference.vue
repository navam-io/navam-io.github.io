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
          <span class="titanium-text-3d">
            Working AI Code<br />You Can Fork, Vibe, and Ship
          </span>
        </h1>

        <!-- Subheadline -->
        <h2 class="text-2xl md:text-3xl text-white/80 mb-4 animate-fade-in font-light max-w-4xl mx-auto">
          Multi-agent systems that work first time. Battle-tested in real apps, fully documented, ready to customize.
        </h2>

        <p class="text-xl md:text-2xl text-white/70 mb-12 animate-fade-in font-light max-w-3xl mx-auto">
          Stop debugging tutorials. Fork working code, adapt to your use case, ship with confidence.
        </p>

        <!-- Featured Product: Navam Invest -->
        <div class="max-w-4xl mx-auto mb-12 animate-slide-up">
          <div class="backdrop-blur-xl bg-white/10 rounded-3xl p-10 md:p-12 border-2 border-white/30 shadow-2xl">
            <!-- Badge -->
            <div class="flex justify-center mb-6">
              <Badge variant="featured" size="lg">
                <span class="flex items-center gap-2">
                  <Icon name="star" size="sm" class="text-yellow-400" />
                  FLAGSHIP PRODUCT
                </span>
              </Badge>
            </div>

            <!-- Icon & Title -->
            <div class="flex items-center justify-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Icon name="dollar-circle" size="xl" class="text-white" />
              </div>
            </div>

            <h3 class="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Navam Invest</h3>
            <p class="text-xl text-white/90 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
              Complete 10-agent investment intelligence platform. See exactly how multi-agent coordination, streaming workflows, and intelligent caching work in real apps.
            </p>

            <!-- Install Command -->
            <div class="bg-gray-900/90 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8 border border-gray-700/50 max-w-xl mx-auto">
              <code class="text-green-400 text-lg font-mono block text-center">pip install navam-invest</code>
            </div>

            <!-- Primary CTAs -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                size="lg"
                as="a"
                href="https://github.com/navam-io/navam-invest"
                target="_blank"
                class="bg-white text-purple-900 hover:bg-gray-100 font-bold shadow-xl"
              >
                <span class="flex items-center gap-2">
                  <Icon name="github" size="md" />
                  View Source Code
                </span>
              </Button>
              <StripeButton buyButtonId="buy_btn_1SJ5kFRCxnzBPkIXLnQOqiLe" />
            </div>

            <!-- Features (Horizontal) -->
            <div class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>10 AI Agents</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>32+ API Tools</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Streaming Workflows</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>90%+ Test Coverage</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-white text-base mt-8 animate-slide-up-delayed">
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="md" class="text-green-400" />
            <span class="font-semibold">Business Source License</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="md" class="text-green-400" />
            <span class="font-semibold">90%+ Test Coverage</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="check-circle" size="md" class="text-green-400" />
            <span class="font-semibold">Works First Time</span>
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
import StripeButton from '@/components/ui/StripeButton.vue'
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

/* Premium Brushed Metal Text - Load Animation */
@keyframes metal-ease-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    filter: blur(2px) brightness(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0) brightness(1);
  }
}

.titanium-text-3d {
  /* Brushed metal gradient - premium solid feel */
  background: linear-gradient(
    180deg,
    #e8ecf0 0%,
    #cbd4dd 20%,
    #b8c2d0 40%,
    #a8b2c1 50%,
    #b8c2d0 60%,
    #cbd4dd 80%,
    #e8ecf0 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Solid 3D depth - subtle but premium */
  text-shadow:
    /* Top highlight */
    0 -1px 0 rgba(255, 255, 255, 0.6),
    /* Bottom shadow for depth */
    0 1px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.15),
    0 3px 3px rgba(0, 0, 0, 0.1),
    /* Subtle ambient shadow */
    0 4px 8px rgba(0, 0, 0, 0.08);

  /* Clean metallic finish */
  filter: brightness(1.05) contrast(1.1);

  /* Smooth ease-in animation on load only */
  animation: metal-ease-in 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

  display: inline-block;
  font-weight: 900;
  letter-spacing: -0.02em;
}
</style>
