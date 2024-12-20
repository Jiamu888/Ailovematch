<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header class="intro-header">
    <h1 class="title">
      <span class="gradient-text">{{ title }}</span>
    </h1>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="decoration" aria-hidden="true">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.intro-header {
  position: relative;
  text-align: center;
  padding: 2rem 0;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
}

.title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 1rem;
  line-height: var(--line-height-tight);

  @media (min-width: 768px) {
    font-size: calc(var(--font-size-3xl) * 1.5);
  }
}

.gradient-text {
  @include gradient-text;
  display: inline-block;
  animation: slideUp var(--transition-normal) var(--ease-out) forwards;
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: var(--line-height-relaxed);
  animation: slideUp var(--transition-normal) var(--ease-out) 0.2s forwards;

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
  z-index: -1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;

  &-1 {
    top: -20%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: var(--primary-color);
    animation-delay: 0s;
  }

  &-2 {
    top: 20%;
    right: -20%;
    width: 60%;
    height: 60%;
    background: var(--secondary-color);
    animation-delay: 1s;
  }

  &-3 {
    bottom: -30%;
    left: 30%;
    width: 50%;
    height: 50%;
    background: var(--primary-light);
    animation-delay: 2s;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
