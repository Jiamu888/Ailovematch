<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isVisible = ref(false)

const handleBack = () => {
  router.push('/')
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <main class="not-found" :class="{ visible: isVisible }">
    <div class="content">
      <div class="error-code">404</div>
      <h1 class="title">页面未找到</h1>
      <p class="description">抱歉，您访问的页面不存在或已被移除。</p>
      <button class="back-button" @click="handleBack">返回首页</button>
    </div>

    <div class="decoration" aria-hidden="true">
      <div class="star star-1">✨</div>
      <div class="star star-2">✨</div>
      <div class="star star-3">✨</div>
      <div class="star star-4">✨</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/views/home/styles/mixins.scss';

.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-normal) var(--ease-out);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.content {
  text-align: center;
  padding: 2rem;
  z-index: 1;
}

.error-code {
  font-size: 6rem;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  transform: scale(0.9);
  animation: fadeIn 0.5s var(--ease-out) forwards;
  animation-delay: 0.2s;
}

.title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0 0 1rem;
  opacity: 0;
  transform: translateY(10px);
  animation: slideUp 0.5s var(--ease-out) forwards;
  animation-delay: 0.4s;
}

.description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin: 0 0 2rem;
  opacity: 0;
  transform: translateY(10px);
  animation: slideUp 0.5s var(--ease-out) forwards;
  animation-delay: 0.6s;
}

.back-button {
  @include glass-effect;
  @include ripple;
  padding: 0.75rem 2rem;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  border: none;
  cursor: pointer;
  opacity: 0;
  transform: translateY(10px);
  animation: slideUp 0.5s var(--ease-out) forwards;
  animation-delay: 0.8s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
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
  animation: twinkle 2s ease-in-out infinite;

  &-1 {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
  }

  &-2 {
    top: 30%;
    right: 10%;
    animation-delay: 0.5s;
  }

  &-3 {
    bottom: 25%;
    left: 10%;
    animation-delay: 1s;
  }

  &-4 {
    bottom: 35%;
    right: 15%;
    animation-delay: 1.5s;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 4rem;
  }

  .title {
    font-size: var(--font-size-xl);
  }

  .description {
    font-size: var(--font-size-sm);
  }

  .star {
    font-size: 1.25rem;
  }
}
</style>
