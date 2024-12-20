<script setup lang="ts">
defineProps<{
  names: string[]
  genders: string[]
  score: number
  description: string
}>()
</script>

<template>
  <article class="case-card">
    <div class="card-header">
      <div class="names">
        <span class="name">{{ names[0] }}</span>
        <span class="gender">{{ genders[0] }}</span>
        <span class="separator">❤️</span>
        <span class="name">{{ names[1] }}</span>
        <span class="gender">{{ genders[1] }}</span>
      </div>
      <div class="score">
        <span class="score-value">{{ score }}</span>
        <span class="score-label">缘分指数</span>
      </div>
    </div>
    <div class="card-content">
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-decoration" aria-hidden="true">
      <div class="decoration-circle"></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.case-card {
  @include glass-effect;
  position: relative;
  padding: 1.5rem;
  overflow: hidden;
  transition: all var(--transition-fast) var(--ease-out);

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.07);

    .decoration-circle {
      transform: scale(1.1);
    }
  }
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.names {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-lg);
  color: var(--text-primary);

  .name {
    font-weight: var(--font-weight-medium);
  }

  .gender {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }

  .separator {
    margin: 0 0.25rem;
    font-size: var(--font-size-base);
    animation: pulse 2s ease-in-out infinite;
  }
}

.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  .score-value {
    @include gradient-text;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
  }

  .score-label {
    font-size: var(--font-size-xs);
    color: var(--text-hint);
  }
}

.description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.decoration-circle {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--primary-color) 0%, transparent 70%);
  opacity: 0.05;
  transition: transform var(--transition-fast) var(--ease-out);
}

@media (max-width: 480px) {
  .case-card {
    padding: 1rem;
  }

  .names {
    font-size: var(--font-size-base);
  }

  .score {
    .score-value {
      font-size: var(--font-size-lg);
    }
  }
}
</style>
