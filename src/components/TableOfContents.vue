<template>
  <div
    v-if="firstLevelHeadings && firstLevelHeadings.length > 0"
    :class="[
      'table-of-contents fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-50',
      'transition-all duration-300 ease-in-out',
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
    ]"
  >
    <!-- Collapsed Button Mode -->
    <button
      v-if="!isTocExpanded"
      @click="expandToc"
      class="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
      title="Show Table of Contents"
    >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Expanded Panel Mode -->
    <div v-else class="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      <!-- Toggle Button -->
      <button
        @click="collapseToc"
        class="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-gray-700 transition-colors duration-200 border-b border-gray-200"
      >
        <span>Table of Contents</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Content -->
      <nav class="p-4 space-y-2 max-w-xs max-h-96 overflow-y-auto">
        <a
          v-for="heading in firstLevelHeadings"
          :key="heading.id"
          :href="`#${heading.id}`"
          :class="[
            'toc-item block text-sm hover:text-blue-600 transition-colors duration-200',
            'font-medium text-gray-800'
          ]"
          @click="scrollToHeading(heading.id)"
        >
          {{ heading.text }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings?: Heading[];
}

const props = defineProps<Props>();
const headings = ref<Heading[]>(props.headings || []);
const firstLevelHeadings = ref<Heading[]>(
  props.headings ? props.headings.filter(h => h.level === 2) : []
);
const isVisible = ref(false); // Start hidden until scrolled past hero
const isTocExpanded = ref(false); // Start in collapsed button mode
const userHasManuallyToggled = ref(false); // Track if user has manually interacted

onMounted(() => {
  // If no headings are provided via props, extract them from the page
  if (!props.headings || props.headings.length === 0) {
    extractHeadingsFromPage();
  } else {
    // Set headings and filter to only show first-level (h2)
    headings.value = props.headings;
    filterFirstLevelHeadings();
  }

  // Set up scroll listener for visibility
  setupScrollListener();
});

const setupScrollListener = () => {
  // Add a small delay to ensure DOM is fully loaded
  setTimeout(() => {
    // Find the hero section (either with featured image or fallback header)
    const heroWithImage = document.querySelector('.relative.min-h-screen.overflow-hidden');
    const heroFallback = document.querySelector('.relative.py-24.bg-gradient-to-br');
    const heroSection = heroWithImage || heroFallback;

    if (heroSection) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          const heroEntry = entries[0];
          // Show TOC only when hero is completely out of view
          const heroScrolledPast = !heroEntry.isIntersecting || heroEntry.intersectionRatio === 0;

          // Only auto-show/hide if user hasn't manually toggled
          if (!userHasManuallyToggled.value) {
            isVisible.value = heroScrolledPast;
          } else {
            // If user has toggled, keep it visible when scrolled past hero
            if (heroScrolledPast) {
              isVisible.value = true;
            }
          }
        },
        {
          rootMargin: '-100px 0px 0px 0px', // Trigger only after hero is 100px out of view
          threshold: [0]
        }
      );

      heroObserver.observe(heroSection);
    } else {
      // Fallback: show TOC after scrolling past viewport height if no hero section found
      const handleScroll = () => {
        if (!userHasManuallyToggled.value) {
          isVisible.value = window.scrollY > window.innerHeight;
        } else if (window.scrollY > window.innerHeight) {
          isVisible.value = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  }, 200);
};

const extractHeadingsFromPage = () => {
  // Only extract h2 headings (first-level headings)
  const headingElements = document.querySelectorAll('.prose h2');
  const extractedHeadings: Heading[] = [];

  headingElements.forEach((element) => {
    const level = parseInt(element.tagName.charAt(1));
    const text = element.textContent?.trim() || '';
    let id = element.id;

    // Generate ID if not present
    if (!id) {
      id = generateHeadingId(text);
      element.id = id;
    }

    extractedHeadings.push({
      id,
      text,
      level
    });
  });

  headings.value = extractedHeadings;
  firstLevelHeadings.value = extractedHeadings;
};

const filterFirstLevelHeadings = () => {
  // Filter to only show h2 headings
  firstLevelHeadings.value = headings.value.filter(heading => heading.level === 2);
};

const expandToc = () => {
  isTocExpanded.value = true;
  userHasManuallyToggled.value = true;
};

const collapseToc = () => {
  isTocExpanded.value = false;
  userHasManuallyToggled.value = true;
};

const generateHeadingId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.toc-item {
  transition: all 0.2s ease;
}

.toc-item:hover {
  padding-left: 0.25rem;
}
</style>