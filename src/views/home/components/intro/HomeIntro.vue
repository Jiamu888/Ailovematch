<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <header class="home-intro" :class="{ visible: isVisible }">
    <h1 class="title">
      <span class="gradient-text">缘分测算</span>
      <span class="highlight">AI版</span>
    </h1>
    <p class="subtitle">用科技解码你们的缘分密码</p>
    <div class="decoration" aria-hidden="true">
      <div class="star star-1">✨</div>
      <div class="star star-2">✨</div>
      <div class="star star-3">✨</div>
      <div class="star star-4">✨</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.home-intro {
  position: relative;
  text-align: center;
  padding: 4rem 0;
  overflow: hidden;

  &.visible {
    .title,
    .subtitle {
      opacity: 1;
      transform: translateY(0);
    }

    .star {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }
}

.title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-normal) var(--ease-out);

  @media (min-width: 768px) {
    font-size: calc(var(--font-size-3xl) * 1.5);
  }

  .gradient-text {
    @include gradient-text;
  }

  .highlight {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.2em 0.5em;
    font-size: 0.5em;
    color: white;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--radius-full);
    vertical-align: middle;
    animation: pulse 2s ease-in-out infinite;
  }
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-normal) var(--ease-out) 0.2s;

  @media (min-width: 768px) {
    font-size: var(--font-size-xl);
  }
}

.decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0;
  transition: all var(--transition-normal) var(--ease-out);

  &-1 {
    top: 20%;
    left: 15%;
    transform: translate(-50px, -50px) scale(0.5);
    transition-delay: 0.3s;
  }

  &-2 {
    top: 30%;
    right: 10%;
    transform: translate(50px, -50px) scale(0.5);
    transition-delay: 0.4s;
  }

  &-3 {
    bottom: 25%;
    left: 10%;
    transform: translate(-50px, 50px) scale(0.5);
    transition-delay: 0.5s;
  }

  &-4 {
    bottom: 35%;
    right: 15%;
    transform: translate(50px, 50px) scale(0.5);
    transition-delay: 0.6s;
  }
}

@media (max-width: 768px) {
  .home-intro {
    padding: 3rem 0;
  }

  .title {
    font-size: var(--font-size-2xl);
  }

  .subtitle {
    font-size: var(--font-size-base);
    padding: 0 1rem;
  }

  .star {
    font-size: 1.25rem;
  }
}
</style>
