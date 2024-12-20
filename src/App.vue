<script setup lang="ts">
import HomeView from './views/home/HomeView.vue'
</script>

<template>
  <HomeView />
</template>

<style>
@import './views/home/styles/variables.scss';

body {
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
}

* {
  box-sizing: border-box;
}
</style>
