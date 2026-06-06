<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="overlay-hover-2"></div>
  <div class="overlay-hover"></div>
  <div class="app">
    <HeaderComponent />
    <RouterView />
  </div>
</template>
