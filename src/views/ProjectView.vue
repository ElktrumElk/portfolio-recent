<script setup lang="ts">
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import { setActivePage } from '@/context/general'
import { onMounted } from 'vue'

onMounted(() => {
  setActivePage(2)
})
</script>

<template>
  <div class="project">
    <ProjectsComponent />
  </div>
</template>

<style lang="css" scoped>
.project {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 10rem;
  scrollbar-color: rgba(128, 128, 128, 0.317);
  scrollbar-width: 1px;
  overflow-y: auto;
}
</style>
