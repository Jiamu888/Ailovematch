<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  score: number
}>()

const displayScore = ref(0)
const isVisible = ref(false)

// 分数动画
const animateScore = () => {
  const duration = 1500
  const steps = 60
  const stepDuration = duration / steps
  const increment = props.score / steps
  let currentStep = 0

  const animate = () => {
    if (currentStep < steps) {
      displayScore.value = Math.round(increment * currentStep)
      currentStep++
      setTimeout(animate, stepDuration)
    } else {
      displayScore.value = props.score
    }
  }

  animate()
}

onMounted(() => {
  isVisible.value = true
  animateScore()
})

watch(() => props.score, animateScore)
</script>

<template>
  <div class="score-chart" :class="{ visible: isVisible }">
    <h3 class="title">匹配得分</h3>
    <div class="chart">
      <div class="score">{{ displayScore }}</div>
      <div class="circle-progress">
        <svg viewBox="0 0 100 100">
          <circle class="circle-bg" cx="50" cy="50" r="45" fill="none" stroke-width="8" />
          <circle
            class="circle-value"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke-width="8"
            :style="{
              strokeDasharray: `${(displayScore / 100) * 283} 283`,
            }"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.score-chart {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: scale(1);
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
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.score {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);

  &::after {
    content: '分';
    font-size: 0.4em;
    margin-left: 4px;
  }
}

.circle-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);

  svg {
    width: 100%;
    height: 100%;
  }
}

.circle-bg {
  stroke: var(--border-color);
}

.circle-value {
  stroke: var(--primary-color);
  stroke-linecap: round;
  transition: stroke-dasharray 1.5s var(--ease-out);
}

@media (max-width: 768px) {
  .chart {
    width: 160px;
    height: 160px;
  }

  .score {
    font-size: var(--font-size-3xl);
  }

  .title {
    font-size: var(--font-size-lg);
  }
}
</style>
