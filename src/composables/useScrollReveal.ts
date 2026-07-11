import { ref, onBeforeUnmount, type ComponentPublicInstance } from 'vue'

export function useScrollReveal(options?: {
  threshold?: number
  rootMargin?: string
  repeat?: boolean
}) {
  const { threshold = 0.15, rootMargin = '0px', repeat = true } = options ?? {}

  const isVisible = ref(false)
  let element: Element | null = null
  let observer: IntersectionObserver | null = null

  const el = (ref: Element | ComponentPublicInstance | null) => {
    const node = ref instanceof Element ? ref : null
    if (element === node) return
    observer?.disconnect()
    element = node
    if (!node) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
          } else if (repeat) {
            isVisible.value = false
          }
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, isVisible }
}
