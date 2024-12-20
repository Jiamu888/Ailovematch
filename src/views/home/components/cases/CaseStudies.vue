<script setup lang="ts">
import { ref } from 'vue'
import CaseCard from './CaseCard.vue'

interface Case {
  id: number
  names: string[]
  genders: string[]
  score: number
  description: string
}

const cases = ref<Case[]>([
  {
    id: 1,
    names: ['张三', '李四'],
    genders: ['男', '女'],
    score: 95,
    description: '天生一对，命中注定的缘分让他们相遇...',
  },
  {
    id: 2,
    names: ['王五', '赵六'],
    genders: ['男', '女'],
    score: 88,
    description: '浪漫邂逅，他们的故事充满了美好...',
  },
  {
    id: 3,
    names: ['小明', '小红'],
    genders: ['男', '女'],
    score: 92,
    description: '默契十足，仿佛上天安排的相遇...',
  },
])
</script>

<template>
  <section class="case-studies">
    <h2 class="section-title">成功案例</h2>
    <div class="cases-grid">
      <CaseCard
        v-for="item in cases"
        :key="item.id"
        :names="item.names"
        :genders="item.genders"
        :score="item.score"
        :description="item.description"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.case-studies {
  padding: 4rem 0;
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  margin-bottom: 3rem;
  @include gradient-text;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .case-studies {
    padding: 3rem 0;
  }

  .section-title {
    font-size: var(--font-size-xl);
    margin-bottom: 2rem;
  }
}
</style>
