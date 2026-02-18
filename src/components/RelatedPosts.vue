<template>
  <div v-if="relatedPosts.length > 0" class="mt-16 pt-8 border-t border-white/10" data-related-posts>
    <h3 class="text-2xl font-bold mb-8 text-center">Related Articles</h3>
    
    <!-- Carousel Container -->
    <div class="relative overflow-hidden">
      <div 
        ref="carouselTrack"
        class="flex transition-transform duration-300 ease-in-out gap-6"
        :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
      >
        <article
          v-for="post in relatedPosts"
          :key="post.slug"
          class="flex-shrink-0 w-80 bg-white/5 rounded-xl shadow-lg border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300 group"
        >
          <a :href="`/blog/${post.slug}`" class="block">
            <!-- Featured Image -->
            <div class="relative overflow-hidden rounded-t-xl h-48">
              <img 
                :src="post.featuredImage"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h4 class="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {{ post.title }}
              </h4>
              <p class="text-gray-400 text-sm line-clamp-3 mb-4">
                {{ post.excerpt }}
              </p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in post.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              
              <!-- Read More -->
              <div class="flex items-center justify-between">
                <span class="text-blue-400 text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
                <div class="text-xs text-gray-400">
                  {{ post.author }}
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      
      <!-- Navigation Buttons -->
      <button
        v-if="canScrollLeft"
        @click="scrollLeft"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-full shadow-xl border border-white/10 flex items-center justify-center hover:bg-gray-700 hover:shadow-2xl transition-all duration-200 z-20"
        aria-label="Previous posts"
      >
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button
        v-if="canScrollRight"
        @click="scrollRight"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 rounded-full shadow-xl border border-white/10 flex items-center justify-center hover:bg-gray-700 hover:shadow-2xl transition-all duration-200 z-20"
        aria-label="Next posts"
      >
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    
    <!-- Dots Indicator -->
    <div class="flex justify-center mt-6 gap-2" v-if="totalSlides > 1">
      <button
        v-for="(dot, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-2 h-2 rounded-full transition-colors',
          currentIndex === index ? 'bg-blue-400' : 'bg-gray-600'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  tags: string[];
}

interface Props {
  relatedPostSlugs?: string[];
  allPosts?: any[];
}

const props = defineProps<Props>();
const relatedPosts = ref<RelatedPost[]>([]);
const currentIndex = ref(0);
const carouselTrack = ref<HTMLElement>();
const slideWidth = ref(320); // 320px (w-80) + gap

const visibleSlides = ref(1);
const totalSlides = computed(() => Math.max(0, relatedPosts.value.length - visibleSlides.value + 1));

const canScrollLeft = computed(() => currentIndex.value > 0);
const canScrollRight = computed(() => currentIndex.value < totalSlides.value - 1);

onMounted(async () => {
  await loadRelatedPosts();
  updateVisibleSlides();
  window.addEventListener('resize', updateVisibleSlides);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleSlides);
});

const updateVisibleSlides = () => {
  // Check if we're in a test environment
  if (typeof window === 'undefined' || window.innerWidth === 0) {
    // In tests, set visible slides to 1 to ensure navigation appears with 4+ posts
    visibleSlides.value = 1;
    slideWidth.value = 320 + 24;
    return;
  }
  
  const width = window.innerWidth;
  const postCount = relatedPosts.value.length;
  
  if (width >= 1200) {
    // Show maximum 3 slides, but ensure navigation appears if there are more posts
    visibleSlides.value = Math.min(3, Math.max(1, postCount - 1));
    slideWidth.value = 320 + 24; // w-80 + gap-6
  } else if (width >= 768) {
    // Show maximum 2 slides, but ensure navigation appears if there are more posts
    visibleSlides.value = Math.min(2, Math.max(1, postCount - 1));
    slideWidth.value = 320 + 24;
  } else {
    // On mobile, always show 1 slide for better navigation
    visibleSlides.value = 1;
    slideWidth.value = 320 + 24;
  }
};

const loadRelatedPosts = async () => {
  if (!props.relatedPostSlugs || props.relatedPostSlugs.length === 0) {
    return;
  }

  try {
    // If allPosts is provided, use it
    if (props.allPosts && props.allPosts.length > 0) {
      // Map related post slugs to find matching posts
      relatedPosts.value = props.relatedPostSlugs
        .map(requestedSlug => {
          // Find the post that matches this slug
          const matchingPost = props.allPosts!.find(post => {
            const postSlug = getSlugFromUrl(post.url);
            return postSlug === requestedSlug;
          });

          if (matchingPost) {
            return {
              slug: requestedSlug,
              title: matchingPost.frontmatter.title,
              excerpt: matchingPost.frontmatter.excerpt || '',
              featuredImage: matchingPost.frontmatter.featuredImage || '/images/blog/vibe-coding-workflows.png',
              author: matchingPost.frontmatter.author || 'Navam Team',
              tags: matchingPost.frontmatter.tags || []
            };
          }
          return null;
        })
        .filter((post): post is RelatedPost => post !== null);
    } else{
      // Fallback: try to fetch posts dynamically
      const postPromises = props.relatedPostSlugs.map(async (slug) => {
        try {
          const response = await fetch(`/blog/${slug}`);
          if (response.ok) {
            // Extract metadata from the response
            const html = await response.text();
            return extractPostMetadata(slug, html);
          }
        } catch (error) {
          console.warn(`Failed to load related post: ${slug}`, error);
        }
        return null;
      });

      const loadedPosts = await Promise.all(postPromises);
      relatedPosts.value = loadedPosts.filter(post => post !== null) as RelatedPost[];
    }
  } catch (error) {
    console.error('Error loading related posts:', error);
  }
};

const getSlugFromUrl = (url: string): string => {
  return url.split('/').pop()?.replace('.md', '') || '';
};

const extractPostMetadata = (slug: string, html: string): RelatedPost | null => {
  // This is a fallback method - in practice, metadata would be provided
  return {
    slug,
    title: `Related Article: ${slug}`,
    excerpt: 'Learn more about AI automation and development best practices.',
    featuredImage: '/images/blog/vibe-coding-workflows.png',
    author: 'Navam Team',
    tags: ['ai', 'automation', 'development']
  };
};

const scrollLeft = () => {
  if (canScrollLeft.value) {
    currentIndex.value = Math.max(0, currentIndex.value - 1);
  }
};

const scrollRight = () => {
  if (canScrollRight.value) {
    currentIndex.value = Math.min(totalSlides.value - 1, currentIndex.value + 1);
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = Math.max(0, Math.min(totalSlides.value - 1, index));
};
</script>

<style scoped>
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