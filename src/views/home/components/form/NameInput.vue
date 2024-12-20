<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="name-input">
    <input
      v-model="inputValue"
      type="text"
      class="input"
      :class="{ error: !!error }"
      :placeholder="placeholder"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.name-input {
  width: 100%;
}

.input {
  width: 100%;
  padding: var(--spacing-3);
  font-size: var(--font-size-base);
  color: var(--text-primary);
  background: var(--bg-input);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-base);
  transition: all var(--transition-fast) var(--ease-out);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
  }

  &.error {
    border-color: var(--error);
  }
}

.error-message {
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  color: var(--error);
}
</style>
