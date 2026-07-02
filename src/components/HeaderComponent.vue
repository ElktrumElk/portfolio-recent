<script setup lang="ts">
import {
  activePage,
  isBoxShadow,
  isDarkMode,
  isMenu,
  setActivePage,
  setMenu,
  toggleColorMode,
} from '@/context/general'
import { RouterLink } from 'vue-router'
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
        <img
          :src="
            !isDarkMode
              ? 'https://img.icons8.com/?size=100&id=9313&format=png&color=7a7a7a'
              : 'https://img.icons8.com/?size=100&id=45475&format=png&color=7a7a7a'
          "
          width="30"
          height="30"
        />
        <span>{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
      </button>

      <button class="menu-btn click" @click="() => setMenu(!isMenu)">
        <span>{{ isMenu ? 'Close' : 'Menu' }}</span>
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>

.header {
  display: flex;
  width: 90%;
  border-radius: 4rem;
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
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-items: center;
  display: flex;
  gap: 0.5rem;
}
.cl-md-btn span {
  color: var(--global-txt-cl);
}

.menu-btn {
  display: none;
  background: none;
  border: var(--global-border);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
}

.menu-btn span {
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
  .menu-btn {
    display: flex;
  }
}
</style>
