<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { ToastType } from '../../types'

const props = defineProps<{
  type?: ToastType
  message: string
  duration?: number
  onClose?: () => void
}>()

const isVisible = ref(false)
let timer: number | null = null

const icons = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: '💡',
}

onMounted(() => {
  isVisible.value = true
  if (props.duration !== 0) {
    timer = window.setTimeout(() => {
      isVisible.value = false
      props.onClose?.()
    }, props.duration || 3000)
  }
})

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<template>
  <Transition name="toast">
    <div v-if="isVisible" class="toast" :class="[type]" role="alert" aria-live="polite">
      <span class="icon" aria-hidden="true">{{ icons[type || 'info'] }}</span>
      <span class="message">{{ message }}</span>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: var(--spacing-4);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-toast);

  &.success {
    color: #22c55e;
  }

  &.error {
    color: var(--error);
  }

  &.warning {
    color: var(--warning);
  }

  &.info {
    color: var(--primary-color);
  }
}

.icon {
  font-size: 1.2em;
  line-height: 1;
}

.message {
  font-size: var(--font-size-sm);
  color: var(--text-primary);
}

// 过渡动画
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s var(--ease-out);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
