<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="error-message" role="alert">
    <span class="icon" aria-hidden="true">⚠️</span>
    <span class="text">{{ message }}</span>
  </div>
</template>

<style lang="scss" scoped>
.error-message {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  color: var(--error);
  background: rgba(239, 68, 68, 0.1);
  border-radius: var(--radius-base);
  animation: slideIn 0.3s var(--ease-out);
}

.icon {
  font-size: 1.2em;
  line-height: 1;
}

.text {
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
