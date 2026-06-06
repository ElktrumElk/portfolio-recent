<script setup lang="ts">
import ContactComponent from '@/components/ContactComponent.vue'
</script>

<template>
  <div class="contact">
    <ContactComponent />
  </div>
</template>

<style scoped lang="css">
.contact {
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
