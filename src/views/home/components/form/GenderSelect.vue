<script setup lang="ts">
import { computed } from 'vue'
import type { Gender } from '../../types'

const props = defineProps<{
  modelValue: Gender
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Gender): void
}>()

const selectedValue = computed({
  get: () => props.modelValue,
  set: (value: Gender) => emit('update:modelValue', value),
})

const options = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
]
</script>

<template>
  <div class="gender-select">
    <label
      v-for="option in options"
      :key="option.value"
      class="option"
      :class="{ active: selectedValue === option.value }"
    >
      <input type="radio" :value="option.value" v-model="selectedValue" class="radio" />
      <span class="label">{{ option.label }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.gender-select {
  display: flex;
  gap: var(--spacing-2);
}

.option {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3);
  background: var(--bg-input);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: all var(--transition-fast) var(--ease-out);

  &:hover {
    border-color: var(--primary-color);
  }

  &.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
  }
}

.radio {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.label {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}
</style>
