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
  accent?: 'none' | 'cyan' | 'violet' | 'teal' | 'orange' | 'green' | 'red' | 'blue'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  gradient: 'blue',
  accent: 'none',
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
    default: 'backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-lg',
    glass: 'backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-2xl',
    gradient: getGradientClasses(),
    featured: 'bg-white/[0.05] backdrop-blur-xl shadow-xl ring-2 ring-white/20',
    outlined: 'bg-transparent border-2 border-white/20'
  }

  const accentClasses = getAccentClasses()
  const hoverEffect = props.hover ? getHoverClasses() : ''

  return `${base} ${paddings[props.padding]} ${variants[props.variant]} ${accentClasses} ${hoverEffect}`
})

function getAccentClasses() {
  if (props.accent === 'none') return ''

  const accents: Record<string, string> = {
    cyan: 'border-t-2 border-t-cyan-500/50',
    violet: 'border-t-2 border-t-violet-500/50',
    teal: 'border-t-2 border-t-teal-500/50',
    orange: 'border-t-2 border-t-orange-500/50',
    green: 'border-t-2 border-t-green-500/50',
    red: 'border-t-2 border-t-red-500/50',
    blue: 'border-t-2 border-t-blue-500/50'
  }
  return accents[props.accent] || ''
}

function getHoverClasses() {
  if (props.accent === 'none') return 'hover:scale-105 hover:shadow-2xl'

  const hoverGlows: Record<string, string> = {
    cyan: 'hover:scale-105 hover:shadow-cyan-500/10 hover:shadow-2xl',
    violet: 'hover:scale-105 hover:shadow-violet-500/10 hover:shadow-2xl',
    teal: 'hover:scale-105 hover:shadow-teal-500/10 hover:shadow-2xl',
    orange: 'hover:scale-105 hover:shadow-orange-500/10 hover:shadow-2xl',
    green: 'hover:scale-105 hover:shadow-green-500/10 hover:shadow-2xl',
    red: 'hover:scale-105 hover:shadow-red-500/10 hover:shadow-2xl',
    blue: 'hover:scale-105 hover:shadow-blue-500/10 hover:shadow-2xl'
  }
  return hoverGlows[props.accent] || 'hover:scale-105 hover:shadow-2xl'
}

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
