<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const features = [
  {
    icon: '🔮',
    title: '智能算法',
    description: '基于深度学习的姓名能量场分析',
  },
  {
    icon: '🎯',
    title: '精准匹配',
    description: '多维度评估两个人的契合程度',
  },
  {
    icon: '💫',
    title: '深度洞察',
    description: '提供详细的关系分析和建议',
  },
]

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="intro-features" :class="{ visible: isVisible }">
    <div class="features-grid">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-card"
        :style="{ '--delay': `${index * 0.2}s` }"
      >
        <div class="icon">{{ feature.icon }}</div>
        <h3 class="title">{{ feature.title }}</h3>
        <p class="description">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-features {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  padding: 0 var(--spacing-4);
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-6);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  opacity: 0;
  transform: translateY(20px);
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
  font-size: var(--font-size-3xl);
}

.title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin: var(--spacing-4) 0 var(--spacing-2);
}

.description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }

  .feature-card {
    padding: var(--spacing-4);
  }

  .icon {
    font-size: var(--font-size-2xl);
  }

  .title {
    font-size: var(--font-size-base);
    margin: var(--spacing-3) 0 var(--spacing-2);
  }

  .description {
    font-size: var(--font-size-sm);
  }
}
</style>
