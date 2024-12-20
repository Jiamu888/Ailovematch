<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  suggestions: string[]
}>()

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="suggestion-list" :class="{ visible: isVisible }">
    <h3 class="title">关系建议</h3>
    <ul class="list">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        class="item"
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <span class="icon" aria-hidden="true">💡</span>
        <span class="text">{{ suggestion }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.suggestion-list {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
}

.list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.6s var(--ease-out);
  transition-delay: var(--delay);

  .visible & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-2px);
  }
}

.icon {
  font-size: 1.2em;
  line-height: 1.4;
}

.text {
  flex: 1;
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-lg);
  }

  .item {
    padding: var(--spacing-3);
    gap: var(--spacing-2);
  }

  .text {
    font-size: var(--font-size-sm);
  }
}
</style>
