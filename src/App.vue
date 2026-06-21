<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import { isMenu } from './context/general.ts'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="overlay-hover-2"></div>
  <div class="overlay-hover"></div>
  <div class="app">
    <HeaderComponent />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <MenuComponent v-if="isMenu" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>
