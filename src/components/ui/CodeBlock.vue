<template>
  <div class="code-block-wrapper">
    <div v-if="title" class="code-block-header">
      <span class="code-block-title">{{ title }}</span>
      <button
        v-if="showCopy"
        @click="copyCode"
        class="copy-button"
        :class="{ 'copied': isCopied }"
      >
        <svg v-if="!isCopied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="ml-1.5 text-xs">{{ isCopied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>
    <pre class="code-block-content" :class="languageClass"><code><slot /></code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  language?: string
  title?: string
  showCopy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'bash',
  showCopy: true
})

const isCopied = ref(false)

const languageClass = computed(() => {
  return `language-${props.language}`
})

const copyCode = async () => {
  const codeElement = document.querySelector('.code-block-content code')
  if (codeElement) {
    try {
      await navigator.clipboard.writeText(codeElement.textContent || '')
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }
}
</script>

<style scoped>
.code-block-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #111827;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.code-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #1f2937;
  border-bottom: 1px solid #374151;
}

.code-block-title {
  font-size: 0.75rem;
  font-weight: 500;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.copy-button {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: #9ca3af;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.copy-button:hover {
  color: #ffffff;
}

.copy-button.copied {
  color: #10b981;
}

.code-block-content {
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}

.code-block-content code {
  color: #10b981;
}

/* Language-specific styling */
.language-bash code {
  color: #10b981;
}

.language-python code {
  color: #60a5fa;
}

.language-javascript code {
  color: #fbbf24;
}

.language-typescript code {
  color: #60a5fa;
}

.language-json code {
  color: #fb923c;
}

/* Scrollbar styling */
.code-block-content::-webkit-scrollbar {
  height: 8px;
}

.code-block-content::-webkit-scrollbar-track {
  background-color: #1f2937;
}

.code-block-content::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 0.25rem;
}

.code-block-content::-webkit-scrollbar-thumb:hover {
  background-color: #6b7280;
}
</style>
