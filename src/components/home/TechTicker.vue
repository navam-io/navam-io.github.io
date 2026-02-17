<template>
  <section class="py-16 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Label -->
      <div class="text-center mb-8">
        <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Battle-Tested with Production Technologies
        </p>
      </div>

      <!-- Infinite Scroll Ticker -->
      <div class="relative ticker-container">
        <!-- Scrolling Container -->
        <div class="tech-ticker-track">
          <!-- First Set of Logos -->
          <div class="tech-ticker-content">
            <div v-for="tech in technologies" :key="tech.name" class="tech-logo-card">
              <div class="tech-logo-inner">
                <img
                  :src="tech.logo"
                  :alt="tech.name"
                  class="tech-logo-img"
                  loading="lazy"
                />
                <span class="tech-logo-label">{{ tech.name }}</span>
              </div>
            </div>
          </div>
          <!-- Duplicate Set for Seamless Loop -->
          <div class="tech-ticker-content" aria-hidden="true">
            <div v-for="tech in technologies" :key="`${tech.name}-dup`" class="tech-logo-card">
              <div class="tech-logo-inner">
                <img
                  :src="tech.logo"
                  :alt="tech.name"
                  class="tech-logo-img"
                  loading="lazy"
                />
                <span class="tech-logo-label">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Technology {
  name: string
  logo: string
}

const technologies = ref<Technology[]>([
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic/000000' },
  { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'D3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Chrome', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
])
</script>

<style scoped>
/* Ticker Container with Mask */
.ticker-container {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

/* Ticker Container */
.tech-ticker-track {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.tech-ticker-track:hover {
  animation-play-state: paused;
}

/* Ticker Content */
.tech-ticker-content {
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
}

/* Logo Card */
.tech-logo-card {
  flex-shrink: 0;
  width: 160px;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.tech-logo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: rgba(59, 130, 246, 0.3);
}

/* Logo Inner Content */
.tech-logo-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

/* Logo Image */
.tech-logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.tech-logo-card:hover .tech-logo-img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.1);
}

/* Logo Label */
.tech-logo-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  text-align: center;
  letter-spacing: -0.01em;
}

/* Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .tech-ticker-content {
    gap: 1.5rem;
  }

  .tech-logo-card {
    width: 140px;
    padding: 1.25rem 0.75rem;
  }

  .tech-logo-img {
    width: 40px;
    height: 40px;
  }

  .tech-logo-label {
    font-size: 0.75rem;
  }
}
</style>
