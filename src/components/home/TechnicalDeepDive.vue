<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="container mx-auto px-4">
      <!-- Section Headline -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 technical-heading">
          Working Patterns Included
        </h2>
        <p class="text-xl text-gray-600">
          See exactly how we solved the hard problems
        </p>
      </div>

      <!-- Deep-Dive Grid (6 Expandable Sections) -->
      <div class="max-w-6xl mx-auto mt-12 space-y-4">
        <!-- Section 1: Multi-Agent Coordination Patterns -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <button
            @click="toggleSection(0)"
            class="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                <Icon name="shuffle" size="lg" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 text-left">Multi-Agent Coordination Patterns</h3>
            </div>
            <svg
              class="w-6 h-6 text-gray-500 transition-transform"
              :class="{ 'rotate-180': expandedSections[0] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            class="expandable-content"
            :class="expandedSections[0] ? 'expanded' : 'collapsed'"
          >
            <div class="px-8 pb-6 space-y-4">
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 class="font-bold text-gray-900 mb-2">THE PROBLEM:</h4>
                <p class="text-gray-700">
                  How do multiple specialized agents collaborate without chaos? How do you route queries intelligently? How do agents share context?
                </p>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 class="font-bold text-gray-900 mb-2">OUR IMPLEMENTATION:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>LangGraph supervisor pattern with state accumulation</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Intent-based natural language routing</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Tool-calling agents with specialized system prompts</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>State handoff protocols between agents</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Error boundaries preventing cascade failures</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 class="font-bold text-gray-900 mb-2">WHAT YOU'LL LEARN:</h4>
                <p class="text-gray-700">
                  See the actual code for agent coordination that works in real apps. Study our state management, routing logic, and handoff protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Streaming & Non-Blocking Execution -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <button
            @click="toggleSection(1)"
            class="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                <Icon name="bolt" size="lg" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 text-left">Streaming & Non-Blocking Execution</h3>
            </div>
            <svg
              class="w-6 h-6 text-gray-500 transition-transform"
              :class="{ 'rotate-180': expandedSections[1] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            class="expandable-content"
            :class="expandedSections[1] ? 'expanded' : 'collapsed'"
          >
            <div class="px-8 pb-6 space-y-4">
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 class="font-bold text-gray-900 mb-2">THE PROBLEM:</h4>
                <p class="text-gray-700">
                  How do you show real-time progress through multi-step AI workflows without freezing the UI? How do you stream multiple agent outputs?
                </p>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 class="font-bold text-gray-900 mb-2">OUR IMPLEMENTATION:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Textual worker pattern for async execution</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Progressive streaming of tool calls and reasoning</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>ESC cancellation with proper cleanup</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Non-blocking UI during long operations</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Real-time status indicators</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 class="font-bold text-gray-900 mb-2">WHAT YOU'LL LEARN:</h4>
                <p class="text-gray-700">
                  Study our streaming implementation: how to display agent reasoning in real-time, handle cancellation gracefully, and keep UIs responsive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Prompt Engineering That Works -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <button
            @click="toggleSection(2)"
            class="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                <Icon name="brain" size="lg" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 text-left">Prompt Engineering That Works</h3>
            </div>
            <svg
              class="w-6 h-6 text-gray-500 transition-transform"
              :class="{ 'rotate-180': expandedSections[2] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            class="expandable-content"
            :class="expandedSections[2] ? 'expanded' : 'collapsed'"
          >
            <div class="px-8 pb-6 space-y-4">
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 class="font-bold text-gray-900 mb-2">THE PROBLEM:</h4>
                <p class="text-gray-700">
                  Tutorial prompts break in real apps. How do you write system prompts that work reliably? How do you enforce output formats? Handle errors?
                </p>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 class="font-bold text-gray-900 mb-2">OUR IMPLEMENTATION:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>10 specialized agent system prompts (refined over months)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Tool-use instructions that work with Claude</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Output format enforcement strategies</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Error recovery prompts</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600">•</span>
                    <span>Prompt versioning and testing</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 class="font-bold text-gray-900 mb-2">WHAT YOU'LL LEARN:</h4>
                <p class="text-gray-700">
                  See the actual prompts we use in real apps, not sanitized examples. Study why they work and how we refined them.
                </p>
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
import Icon from '@/components/ui/Icon.vue'

const expandedSections = ref([false, false, false])

const toggleSection = (index: number) => {
  expandedSections.value[index] = !expandedSections.value[index]
}
</script>

<style scoped>
.expandable-content {
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.expandable-content.collapsed {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.expandable-content.expanded {
  max-height: 2000px;
  opacity: 1;
}
</style>
