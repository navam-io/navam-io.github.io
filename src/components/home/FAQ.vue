<template>
  <section class="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Navam products
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-300"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full px-8 py-6 text-left flex items-center justify-between group"
              :aria-expanded="openIndex === index"
            >
              <h3 class="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {{ faq.question }}
              </h3>
              <svg
                class="w-6 h-6 text-blue-400 transform transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === index }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="openIndex === index"
              class="px-8 pb-6 text-gray-300 leading-relaxed"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FAQ {
  question: string;
  answer: string;
}

const openIndex = ref<number | null>(null);

const faqs: FAQ[] = [
  {
    question: "What is Navam?",
    answer: "Navam is an AI product studio building battle-tested, open-source tools for AI↔AI, AI↔Human, and AI↔World interactions. We create battle-tested multi-agent systems with full documentation, 90%+ test coverage, and MIT licensing. Fork our code, customize it, and ship in days."
  },
  {
    question: "How much do Navam products cost?",
    answer: "All Navam products are free and open source under the MIT license. There are no licensing fees or subscription costs. You'll only pay for the API costs of the LLM providers you choose to use (typically $3-15/month for individual use). Commercial support and enterprise customization are available upon request."
  },
  {
    question: "What is Navam Invest?",
    answer: "Navam Invest is an AI-powered investment intelligence tool with 10 specialized agents for retail investors. It runs entirely on your laptop, providing professional-grade investment analysis for $3-15/month in API costs (vs. $1,000-$10,000/year for traditional wealth management). Features include fundamental analysis, earnings tracking, portfolio risk assessment, tax optimization, and options strategies."
  },
  {
    question: "What is the technology stack?",
    answer: "Navam products use frontier AI models (Claude, GPT-4) with battle-tested frameworks like LangGraph for multi-agent orchestration. Backend is Python with Textual for terminal UIs. Frontend uses modern React, TypeScript, Astro, and Vue. All code follows best practices with comprehensive testing, type safety, and clear documentation."
  },
  {
    question: "Is the code really battle-tested?",
    answer: "Yes. Unlike proof-of-concept demos, Navam products are battle-tested with 90%+ test coverage, error handling, caching, streaming UIs, and real-world usage. Every feature includes documentation, tests, and prompts used to generate the code. You're getting reference implementations that work first time, not experimental code."
  },
  {
    question: "Can I customize the products for my needs?",
    answer: "Absolutely. That's the core value proposition. Navam products are designed to be forked and customized using 'vibe coding'—describe what you want, let AI modify the code. The architecture is modular, well-documented, and built specifically for AI-assisted customization. MIT license means you can use it commercially without restrictions."
  },
  {
    question: "What is 'vibe coding'?",
    answer: "Vibe coding is a development philosophy where humans focus on strategic direction while AI handles implementation. You describe the desired outcome and provide domain expertise, then AI generates and modifies the code. Navam products were built using vibe coding and are optimized for you to continue developing this way."
  },
  {
    question: "Do I need to be a developer to use these products?",
    answer: "For using the products as-is: no. Navam Invest and Command have simple installation commands and terminal UIs. For customizing the code: basic familiarity with Python and terminal commands helps. The products include AI-friendly documentation that helps AI assistants guide you through customization even if you're not an expert developer."
  }
];

function toggleFAQ(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped>
/* Additional animations for FAQ items */
.backdrop-blur-xl {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
