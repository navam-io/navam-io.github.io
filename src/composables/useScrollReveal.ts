import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(threshold = 0.1): { target: Ref<HTMLElement | null>; isVisible: Ref<boolean> } {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // One-shot: disconnect after first trigger
            observer?.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
