<template>
  <div>
    <!-- Filter Section with Magazine-style Design -->
    <section class="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogTagFilter
          :tags="allTags"
          @filter-changed="handleFilterChange"
        />
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="text-center py-20">
          <div class="max-w-md mx-auto">
            <svg class="w-20 h-20 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
            </svg>
            <p class="text-gray-400 text-xl mb-2">No articles found</p>
            <p class="text-gray-500 text-base mb-6">
              No posts match the "{{ activeFilter }}" category.
            </p>
            <button
              @click="clearFilter"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View All Articles
            </button>
          </div>
        </div>

        <!-- Featured Post (First Post) -->
        <article
          v-if="filteredPosts.length > 0"
          class="mb-16 group"
        >
          <a :href="filteredPosts[0].url" class="block">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <!-- Featured Image -->
              <div
                v-if="filteredPosts[0].frontmatter.featuredImage"
                class="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              >
                <div class="aspect-[4/3]">
                  <img
                    :src="filteredPosts[0].frontmatter.featuredImage"
                    :alt="filteredPosts[0].frontmatter.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div class="absolute top-4 left-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              <!-- Featured Content -->
              <div class="space-y-6">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in filteredPosts[0].frontmatter.tags?.slice(0, 3)"
                    :key="tag"
                    class="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-semibold rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>

                <h2 class="text-3xl lg:text-4xl font-black text-gray-900 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  {{ filteredPosts[0].frontmatter.title }}
                </h2>

                <p class="text-lg text-gray-600 leading-relaxed">
                  {{ filteredPosts[0].frontmatter.excerpt }}
                </p>

                <div class="flex items-center gap-4 pt-4 text-sm text-gray-500">
                  <span v-if="filteredPosts[0].frontmatter.author">
                    By {{ filteredPosts[0].frontmatter.author }}
                  </span>
                  <span v-if="filteredPosts[0].frontmatter.pubDate">
                    {{ formatDate(filteredPosts[0].frontmatter.pubDate) }}
                  </span>
                </div>

                <div class="pt-2">
                  <span class="inline-flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    Read Article
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </article>

        <!-- Magazine Grid Layout (Remaining Posts) -->
        <div v-if="filteredPosts.length > 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in filteredPosts.slice(1)"
            :key="post.url"
            class="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <a :href="post.url" class="block h-full flex flex-col">
              <!-- Card Image -->
              <div
                v-if="post.frontmatter.featuredImage"
                class="relative overflow-hidden aspect-[16/10]"
              >
                <img
                  :src="post.frontmatter.featuredImage"
                  :alt="post.frontmatter.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex-1 flex flex-col">
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.frontmatter.tags?.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-1 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600 text-xs font-medium rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {{ post.frontmatter.title }}
                </h3>

                <!-- Excerpt -->
                <p class="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                  {{ post.frontmatter.excerpt }}
                </p>

                <!-- Meta -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span v-if="post.frontmatter.author" class="text-xs text-gray-500">
                    {{ post.frontmatter.author }}
                  </span>
                  <span class="inline-flex items-center text-purple-600 text-sm font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
                    Read
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogTagFilter from './BlogTagFilter.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const activeFilter = ref('')
const allTags = ref([])

onMounted(() => {
  // Extract all unique tags from posts
  const uniqueTags = new Set()
  props.posts.forEach(post => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => uniqueTags.add(tag))
    }
  })
  allTags.value = Array.from(uniqueTags)
})

const filteredPosts = computed(() => {
  if (!activeFilter.value) {
    return props.posts
  }

  return props.posts.filter(post => {
    return post.frontmatter.tags && post.frontmatter.tags.includes(activeFilter.value)
  })
})

const handleFilterChange = (tag) => {
  activeFilter.value = tag
}

const clearFilter = () => {
  activeFilter.value = ''
  const url = new URL(window.location)
  url.searchParams.delete('tag')
  window.history.replaceState({}, '', url)
}

const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Enhanced shadows */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>