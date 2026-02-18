<template>
  <div class="space-y-6">
    <!-- Section Title -->
    <div class="text-center">
      <h2 class="text-2xl font-bold text-white mb-2">Explore by Category</h2>
      <p class="text-gray-400">Filter articles by topic to find exactly what you need</p>
    </div>

    <!-- Filter Pills -->
    <div class="flex flex-wrap gap-3 justify-center items-center">
      <button
        @click="setActiveTag('')"
        :class="[
          'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105',
          activeTag === ''
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
            : 'bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:shadow-md'
        ]"
      >
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          All Articles
        </span>
      </button>
      <button
        v-for="tag in availableTags"
        :key="tag"
        @click="setActiveTag(tag)"
        :class="[
          'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105',
          activeTag === tag
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
            : 'bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:shadow-md'
        ]"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['filter-changed'])

const activeTag = ref('')
const availableTags = ref([])

onMounted(() => {
  // New customer-problem-oriented taxonomy (7 categories)
  const classificationTags = [
    'Strategic Intelligence',
    'Investment Analysis',
    'Development Acceleration',
    'Knowledge Discovery',
    'System Architecture',
    'Performance & Cost',
    'Data Visualization'
  ]
  availableTags.value = classificationTags

  // Check URL for tag parameter
  const urlParams = new URLSearchParams(window.location.search)
  const tagFromUrl = urlParams.get('tag')
  if (tagFromUrl && classificationTags.includes(tagFromUrl)) {
    activeTag.value = tagFromUrl
    emit('filter-changed', tagFromUrl)
  }
})

const setActiveTag = (tag) => {
  activeTag.value = tag
  
  // Update URL without page reload
  const url = new URL(window.location)
  if (tag) {
    url.searchParams.set('tag', tag)
  } else {
    url.searchParams.delete('tag')
  }
  window.history.replaceState({}, '', url)
  
  emit('filter-changed', tag)
}

watch(activeTag, (newTag) => {
  emit('filter-changed', newTag)
})
</script>