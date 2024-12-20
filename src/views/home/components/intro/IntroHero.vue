<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const scrollToForm = () => {
  const formElement = document.getElementById('calculation-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="intro-hero" :class="{ visible: isVisible }">
    <h1 class="title">
      <span class="highlight">AI姓名配对</span>
      <br />
      探索你们的缘分密码
    </h1>
    <p class="description">
      基于先进的AI算法，深入分析姓名中蕴含的能量场，
      <br />
      为你揭示两个人之间独特的缘分联系。
    </p>
    <button class="cta-button" @click="scrollToForm">
      开始测算
      <span class="icon" aria-hidden="true">✨</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.intro-hero {
  text-align: center;
  padding: var(--spacing-16) 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: var(--spacing-6);

  .highlight {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.description {
  font-size: var(--font-size-xl);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-8);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: white;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: var(--radius-full);
  transition: all var(--transition-fast) var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  .icon {
    font-size: 1.2em;
  }
}

@media (max-width: 768px) {
  .intro-hero {
    padding: var(--spacing-8) var(--spacing-4);
  }

  .title {
    font-size: var(--font-size-3xl);
  }

  .description {
    font-size: var(--font-size-lg);
    br {
      display: none;
    }
  }

  .cta-button {
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--font-size-base);
  }
}
</style>
