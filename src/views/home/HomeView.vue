<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IntroFeatures from './components/intro/IntroFeatures.vue'
import CalculationForm from './components/form/CalculationForm.vue'

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <main class="home-view" :class="{ visible: isVisible }">
    <section class="intro-section">
      <div class="container">
        <div class="content-wrapper">
          <!-- 标题部分 -->
          <div class="hero-section">
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
          </div>

          <!-- 表单部分 -->
          <div class="form-wrapper">
            <CalculationForm />
          </div>

          <!-- 功能特性部分 -->
          <div class="features-wrapper">
            <IntroFeatures />
          </div>
        </div>
      </div>
    </section>

    <!-- 背景装饰 -->
    <div class="background-decoration" aria-hidden="true" />
  </main>
</template>

<style lang="scss" scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  opacity: 0;
  transition: opacity 0.5s ease-out;

  &.visible {
    opacity: 1;
  }
}

.intro-section {
  width: 100%;
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-12);
}

.hero-section {
  max-width: 640px;
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

.form-wrapper {
  width: 100%;
  max-width: 480px;
}

.background-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(124, 58, 237, 0.1) 0%,
    rgba(124, 58, 237, 0) 50%
  );
  pointer-events: none;
  z-index: -1;
}

.features-wrapper {
  width: 100%;
  margin-top: var(--spacing-16);
  padding-top: var(--spacing-16);
  border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .container {
    padding: var(--spacing-4);
  }

  .content-wrapper {
    gap: var(--spacing-8);
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

  .features-wrapper {
    margin-top: var(--spacing-8);
    padding-top: var(--spacing-8);
  }
}
</style>
