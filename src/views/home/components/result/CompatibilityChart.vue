<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Compatibility } from '../../types'

const props = defineProps<{
  compatibility: Compatibility
}>()

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="compatibility-chart" :class="{ visible: isVisible }">
    <h3 class="title">兼容性分析</h3>
    <div class="chart">
      <div
        v-for="(value, key) in compatibility"
        :key="key"
        class="bar-item"
        :style="{ '--delay': `${Object.keys(compatibility).indexOf(key) * 0.1}s` }"
      >
        <div class="label">{{ key }}</div>
        <div class="bar">
          <div class="bar-value" :style="{ width: `${value}%` }" />
        </div>
        <div class="value">{{ value }}%</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.compatibility-chart {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
}

.chart {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.bar-item {
  display: grid;
  grid-template-columns: 80px 1fr 48px;
  align-items: center;
  gap: var(--spacing-3);
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s var(--ease-out);
  transition-delay: var(--delay);

  .visible & {
    opacity: 1;
    transform: translateX(0);
  }
}

.label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  text-align: right;
}

.bar {
  height: 8px;
  background: var(--border-color);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.bar-value {
  height: 100%;
  background: var(--primary-color);
  border-radius: var(--radius-full);
  transition: width 1s var(--ease-out);
}

.value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-lg);
  }

  .bar-item {
    grid-template-columns: 60px 1fr 40px;
    gap: var(--spacing-2);
  }

  .label,
  .value {
    font-size: var(--font-size-xs);
  }

  .bar {
    height: 6px;
  }
}
</style>
