<template>
  <section class="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
    <!-- Lattice pattern background (logo-inspired diamond grid) -->
    <div class="absolute inset-0 opacity-[0.06]">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lattice-diamond" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
            <!-- Diamond lattice grid lines inspired by the logo -->
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#92400e" stroke-width="1.5"/>
            <circle cx="30" cy="0" r="2" fill="#92400e"/>
            <circle cx="60" cy="30" r="2" fill="#92400e"/>
            <circle cx="30" cy="60" r="2" fill="#92400e"/>
            <circle cx="0" cy="30" r="2" fill="#92400e"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-diamond)"/>
      </svg>
    </div>

    <!-- Radial gradient overlay to fade edges -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-50/80"></div>

    <!-- 3D Holiday Cheer Objects -->
    <!-- Snowflake top-left -->
    <div class="holiday-object absolute top-16 left-8 md:left-16 lg:left-24 animate-float-slow">
      <svg class="w-10 h-10 md:w-14 md:h-14 text-amber-300/60 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L13 4L12 8L11 4L12 0ZM12 16L13 20L12 24L11 20L12 16ZM0 12L4 11L8 12L4 13L0 12ZM16 12L20 11L24 12L20 13L16 12ZM3.5 3.5L6 5.5L8.5 8.5L5.5 6L3.5 3.5ZM15.5 15.5L18 17.5L20.5 20.5L17.5 18L15.5 15.5ZM20.5 3.5L18 5.5L15.5 8.5L17.5 6L20.5 3.5ZM8.5 15.5L6 17.5L3.5 20.5L5.5 18L8.5 15.5Z"/>
      </svg>
    </div>

    <!-- Star top-right -->
    <div class="holiday-object absolute top-20 right-12 md:right-20 lg:right-32 animate-twinkle">
      <svg class="w-8 h-8 md:w-12 md:h-12 text-yellow-400/50 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.09 8.26L20.5 9.27L15.75 13.97L16.82 20.5L12 17.77L7.18 20.5L8.25 13.97L3.5 9.27L9.91 8.26L12 2Z"/>
      </svg>
    </div>

    <!-- Gift box bottom-left -->
    <div class="holiday-object absolute bottom-20 left-6 md:left-12 lg:left-20 animate-bounce-gentle">
      <svg class="w-9 h-9 md:w-12 md:h-12 text-red-400/50 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 12V22H4V12H20ZM22 7V10H2V7H9.17C9.06 6.69 9 6.35 9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6C15 6.35 14.94 6.69 14.83 7H22ZM12 5C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7C12.55 7 13 6.55 13 6C13 5.45 12.55 5 12 5Z"/>
        <rect x="11" y="7" width="2" height="15" fill="currentColor" opacity="0.8"/>
      </svg>
    </div>

    <!-- Ornament bottom-right -->
    <div class="holiday-object absolute bottom-24 right-8 md:right-16 lg:right-28 animate-swing">
      <svg class="w-8 h-8 md:w-10 md:h-10 text-emerald-500/50 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="14" r="8"/>
        <rect x="10" y="2" width="4" height="4" rx="1"/>
        <path d="M12 6V8" stroke="currentColor" stroke-width="2"/>
      </svg>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Premium Paper Effect -->
        <div class="letter-paper relative bg-white rounded-sm shadow-2xl p-8 md:p-12 lg:p-16">
          <!-- Paper texture overlay - heavier on margins -->
          <div class="absolute inset-0 pointer-events-none paper-texture-heavy"></div>
          <!-- Paper texture overlay - lighter in reading area -->
          <div class="absolute inset-8 md:inset-12 lg:inset-16 pointer-events-none paper-texture-light"></div>

          <!-- Decorative corner -->
          <div class="absolute top-0 left-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" class="w-full h-full text-amber-800">
              <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
            </svg>
          </div>

          <!-- Letter Content -->
          <div class="relative z-10">
            <!-- Header -->
            <h2 class="letter-heading text-2xl md:text-3xl text-gray-800 mb-8 text-center">
              A Letter from Team Navam
            </h2>

            <!-- Salutation -->
            <p class="letter-text text-lg md:text-xl text-gray-700 mb-6 italic">
              To the engineers, architects, and leaders building the future of AI
            </p>

            <!-- Body -->
            <div class="letter-body text-gray-800 space-y-6 leading-relaxed">
              <p class="text-xl md:text-2xl font-medium">We know your world.</p>

              <p>
                You spend weeks comparing models, juggling pricing pages, and building spreadsheets. When leadership asks "why this vendor?", you need evidence—not intuition.
              </p>

              <p class="text-xl md:text-2xl font-medium text-amber-900">We built Lattice because we faced the same challenge.</p>

              <p>
                The AI landscape changes faster than any team can track. Your research contains sensitive information. You can't paste it into a general-purpose chatbot and hope for the best.
              </p>

              <p class="text-xl md:text-2xl font-medium text-amber-900">Lattice changes this.</p>

              <p>
                An agentic AI lab assistant running privately on your machine. Your data never leaves your control. Research depth in minutes instead of weeks.
              </p>

              <ul class="list-none space-y-3 pl-5 border-l-3 border-amber-400 mt-8">
                <li><strong>36 curated blueprints</strong> from Anthropic, AWS, NVIDIA, Google, Meta, Mistral</li>
                <li><strong>Source-grounded recommendations</strong> with citations to specific docs</li>
                <li><strong>Scenario-aware analysis</strong> for your latency, budget, compliance needs</li>
              </ul>

              <p class="text-center text-xl md:text-2xl my-8 text-gray-600 tracking-wide">
                $99 lifetime. No subscriptions. No data leaving your machine.
              </p>

              <p class="text-center text-xl md:text-2xl font-semibold text-amber-900">
                Smart AI decisions, grounded in evidence.
              </p>

              <!-- Signature -->
              <div class="mt-10 pt-6 border-t border-amber-700/30">
                <p class="letter-signature text-2xl text-gray-800">Team Navam</p>
              </div>

              <!-- P.S. -->
              <p class="mt-6 text-sm text-gray-600 italic">
                P.S. Watch our <a href="https://www.latticelab.io/#walkthrough" target="_blank" rel="noopener noreferrer" class="text-violet-600 hover:text-violet-700 underline">walkthrough</a> or read our <a href="https://www.latticelab.io/blog" target="_blank" rel="noopener noreferrer" class="text-violet-600 hover:text-violet-700 underline">blog</a> to see Lattice in action.
              </p>
            </div>
          </div>

          <!-- Decorative bottom corner -->
          <div class="absolute bottom-0 right-0 w-24 h-24 opacity-10 rotate-180">
            <svg viewBox="0 0 100 100" class="w-full h-full text-amber-800">
              <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Import elegant serif font for letter feel */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Dancing+Script:wght@500;600&display=swap');

.letter-paper {
  background: linear-gradient(135deg, #fefefe 0%, #f9f6f1 50%, #f5f0e8 100%);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Heavier texture for margins */
.paper-texture-heavy {
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Lighter texture for readable content area */
.paper-texture-light {
  opacity: 0.08;
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
}

.letter-heading {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.letter-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
}

.letter-body {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.25rem;
  line-height: 1.9;
  color: #1f2937;
}

.letter-body p {
  text-indent: 0;
}

.letter-body strong {
  font-weight: 600;
  color: #111827;
}

.letter-body ul {
  font-size: 1.125rem;
  line-height: 1.8;
}

.letter-signature {
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .letter-body {
    font-size: 1.375rem;
    line-height: 2;
  }

  .letter-body ul {
    font-size: 1.25rem;
  }
}

/* Holiday object animations */
.holiday-object {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transform-style: preserve-3d;
  perspective: 500px;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(5deg);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) rotate(15deg);
  }
}

@keyframes bounce-gentle {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.05);
  }
}

@keyframes swing {
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

.animate-bounce-gentle {
  animation: bounce-gentle 4s ease-in-out infinite;
}

.animate-swing {
  animation: swing 3s ease-in-out infinite;
  transform-origin: top center;
}
</style>
