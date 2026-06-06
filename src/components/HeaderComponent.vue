<script setup lang="ts">
import { activePage, isBoxShadow, setActivePage } from '@/context/general'
import { useRerender } from '@/modules/render-vue'

import { RouterLink } from 'vue-router'

const [isDarkMode, setDarkMode] = useRerender<boolean>(
  window.matchMedia('prefer-color-scheme: dark').matches,
)

const toggleColorMode = () => {
  setDarkMode(!isDarkMode.value)
  if (isDarkMode.value) {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  } else {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  }
  console.log(isDarkMode.value)
}
</script>

<template>
  <header
    id="head"
    class="header"
    :style="{
      boxShadow: isBoxShadow
        ? '0 0 1rem rgba(128, 128, 128, 0.354)'
        : '0 0 0rem rgba(128, 128, 128, 0.354)',
      transition: 'box-shadow .4s ease',
    }"
  >
    <div class="name-cnt">
      <h1 class="name">Elktrum Elk</h1>
    </div>

    <nav class="nav-cnt">
      <ul class="nav-list">
        <RouterLink
          to="/home"
          :class="activePage === 1 ? 'router active' : 'router'"
          @click="() => setActivePage(1)"
          >Home</RouterLink
        >
        <RouterLink
          :class="activePage === 2 ? 'router active' : 'router'"
          @click="() => setActivePage(2)"
          to="/projects"
          >Projects</RouterLink
        >
        <RouterLink
          :class="activePage === 3 ? 'router active' : 'router'"
          @click="() => setActivePage(3)"
          to="/contact"
          >Contact</RouterLink
        >
      </ul>
    </nav>

    <div class="cl-md-btn-cnt">
      <button class="cl-md-btn" @click="() => toggleColorMode()">
        <span>{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1rem rgba(128, 128, 128, 0.354);

  position: fixed;
  z-index: 100;
}

.name-cnt {
  display: flex;
  gap: 1rem;
}

.name {
  color: var(--global-txt-cl);
  font-size: 1rem;
  line-height: 1rem;
}

.nav-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.nav-list .router {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  color: var(--global-txt-cl);
  cursor: pointer;
  text-decoration: none;
}

.router.active {
  border-bottom: var(--global-border);
}

.cl-md-btn-cnt {
  display: flex;
  gap: 1rem;
}

.cl-md-btn {
  background: none;
  border: var(--global-border);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.cl-md-btn span {
  color: var(--global-txt-cl);
}

@media (max-width: 600px) {
  .nav-cnt {
    display: none;
  }

  .cl-md-btn {
    display: none;
  }
  .header {
    box-shadow: none !important;
  }
}
</style>
