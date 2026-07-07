<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import { isMenu } from './context/general.ts'
import { RouterView } from 'vue-router'
import MouseDustComponent from './components/MouseDustComponent.vue'
import RIppleWaterComponent from './components/RIppleWaterComponent.vue'
</script>

<template>
  <div class="overlay-hover-2"></div>
  <div class="overlay-hover"></div>
  <MouseDustComponent />
  <RIppleWaterComponent />

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
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

.can {
  inset: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
}
</style>
