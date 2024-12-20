import { ref } from 'vue'
import type { AnimationState } from '../types'

interface AnimationOptions {
  duration?: number
  autoStart?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

export function useAnimation(options: AnimationOptions = {}) {
  const { duration = 300, autoStart = true, onEnter, onLeave } = options

  const state = ref<AnimationState>({
    isVisible: autoStart,
    isAnimating: false,
    direction: 'enter',
  })

  const enter = async () => {
    if (state.value.isVisible || state.value.isAnimating) return

    state.value.isAnimating = true
    state.value.direction = 'enter'
    state.value.isVisible = true

    await new Promise((resolve) => setTimeout(resolve, duration))

    state.value.isAnimating = false
    onEnter?.()
  }

  const leave = async () => {
    if (!state.value.isVisible || state.value.isAnimating) return

    state.value.isAnimating = true
    state.value.direction = 'leave'
    state.value.isVisible = false

    await new Promise((resolve) => setTimeout(resolve, duration))

    state.value.isAnimating = false
    onLeave?.()
  }

  return {
    state,
    enter,
    leave,
  }
}

// 滚动动画钩子
export const useScrollAnimation = (
  options = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
  },
) => {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const onIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    })
  }

  const observe = (element: Element) => {
    observer = new IntersectionObserver(onIntersect, options)
    observer.observe(element)
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    isVisible,
    observe,
  }
}

// 列表动画钩子
export const useListAnimation = (
  options = {
    duration: ANIMATION_CONFIG.duration.normal,
    delay: 100,
  },
) => {
  const items = ref<any[]>([])
  const animatedItems = ref<Set<number>>(new Set())

  const addItem = (item: any) => {
    const index = items.value.length
    items.value.push(item)

    setTimeout(() => {
      animatedItems.value.add(index)
    }, index * options.delay)
  }

  const removeItem = (index: number) => {
    animatedItems.value.delete(index)
    setTimeout(() => {
      items.value.splice(index, 1)
    }, options.duration)
  }

  return {
    items,
    animatedItems,
    addItem,
    removeItem,
  }
}
