<script setup lang="ts">
defineProps<{
  size?: 'small' | 'medium' | 'large'
}>()
</script>

<template>
  <div class="loading" :class="size || 'medium'" role="status">
    <div class="spinner">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    <span class="sr-only">加载中...</span>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.small {
    --dot-size: 4px;
    --dot-space: 4px;
  }

  &.medium {
    --dot-size: 6px;
    --dot-space: 6px;
  }

  &.large {
    --dot-size: 8px;
    --dot-space: 8px;
  }
}

.spinner {
  display: flex;
  align-items: center;
  gap: var(--dot-space);
}

.dot {
  width: var(--dot-size);
  height: var(--dot-size);
  background: currentColor;
  border-radius: var(--radius-full);
  animation: bounce 0.5s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
