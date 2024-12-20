<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CalculationResult } from '../../types'
import ScoreChart from './ScoreChart.vue'
import CompatibilityChart from './CompatibilityChart.vue'
import SuggestionList from './SuggestionList.vue'

const props = defineProps<{
  result: CalculationResult
}>()

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="result-view" :class="{ visible: isVisible }">
    <h2 class="title">分析结果</h2>

    <div class="charts">
      <ScoreChart :score="result.score" />
      <CompatibilityChart :compatibility="result.compatibility" />
    </div>

    <SuggestionList :suggestions="result.suggestions" />

    <button class="reset-button" @click="$emit('reset')">
      重新测算
      <span class="icon" aria-hidden="true">🔄</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.result-view {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--text-primary);
  margin-bottom: var(--spacing-8);
}

.charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
}

.reset-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin: var(--spacing-8) auto 0;
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal) var(--ease-out);

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.2em;
    transition: transform var(--transition-normal) var(--ease-out);
  }

  &:hover .icon {
    transform: rotate(180deg);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-6);
  }

  .charts {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
    margin-bottom: var(--spacing-6);
  }

  .reset-button {
    margin-top: var(--spacing-6);
    padding: var(--spacing-2) var(--spacing-4);
    font-size: var(--font-size-sm);
  }
}
</style>
