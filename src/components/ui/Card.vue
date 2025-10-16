<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'glass' | 'gradient' | 'featured' | 'outlined'
  gradient?: 'cyan' | 'blue' | 'purple' | 'green' | 'orange'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  gradient: 'blue',
  hover: true,
  padding: 'md'
})

const cardClasses = computed(() => {
  const base = 'rounded-3xl transition-all duration-300'

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const variants = {
    default: 'bg-white shadow-lg border border-gray-200',
    glass: 'backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl',
    gradient: getGradientClasses(),
    featured: 'bg-gradient-to-br from-white to-gray-50 shadow-xl ring-2 ring-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300'
  }

  const hoverEffect = props.hover ? 'hover:scale-105 hover:shadow-2xl' : ''

  return `${base} ${paddings[props.padding]} ${variants[props.variant]} ${hoverEffect}`
})

function getGradientClasses() {
  const gradients = {
    cyan: 'backdrop-blur-xl bg-gradient-to-br from-cyan-600 to-teal-600 border border-cyan-300/30 shadow-2xl hover:shadow-cyan-500/20',
    blue: 'backdrop-blur-xl bg-gradient-to-br from-blue-600 to-indigo-600 border border-blue-300/30 shadow-2xl hover:shadow-blue-500/20',
    purple: 'backdrop-blur-xl bg-gradient-to-br from-purple-600 to-pink-600 border border-purple-300/30 shadow-2xl hover:shadow-purple-500/20',
    green: 'backdrop-blur-xl bg-gradient-to-br from-green-600 to-emerald-600 border border-green-300/30 shadow-2xl hover:shadow-green-500/20',
    orange: 'backdrop-blur-xl bg-gradient-to-br from-orange-600 to-red-600 border border-orange-300/30 shadow-2xl hover:shadow-orange-500/20'
  }
  return gradients[props.gradient]
}
</script>
