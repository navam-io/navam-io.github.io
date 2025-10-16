<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'featured' | 'flagship' | 'success' | 'info' | 'warning'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md'
})

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center font-semibold rounded-full transition-all duration-200'

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }

  const variants = {
    default: 'bg-gray-100 text-gray-700',
    featured: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200',
    flagship: 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200',
    success: 'bg-green-100 text-green-700',
    info: 'bg-blue-100 text-blue-700',
    warning: 'bg-yellow-100 text-yellow-700'
  }

  return `${base} ${sizes[props.size]} ${variants[props.variant]}`
})
</script>
