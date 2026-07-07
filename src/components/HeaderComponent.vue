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
        ? '0 0 1rem rgba(37, 99, 235, 0.15)'
        : '0 0 0rem rgba(37, 99, 235, 0.15)',
      transition: 'box-shadow .4s ease',
    }"
  >
    <div class="header-bg"></div>
    <div class="header-inner">
      <div class="name-cnt">
        <div class="logo-mark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="21 16 21 21 16 21"/>
            <line x1="15" y1="15" x2="21" y2="21"/>
            <line x1="4" y1="4" x2="9" y2="9"/>
          </svg>
        </div>
        <h1 class="name">Elktrum Elk</h1>
      </div>

      <nav class="nav-cnt">
        <ul class="nav-list">
          <RouterLink
            to="/home"
            :class="activePage === 1 ? 'router active' : 'router'"
            @click="() => setActivePage(1)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </RouterLink>
          <RouterLink
            :class="activePage === 2 ? 'router active' : 'router'"
            @click="() => setActivePage(2)"
            to="/projects"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Projects
          </RouterLink>
          <RouterLink
            :class="activePage === 3 ? 'router active' : 'router'"
            @click="() => setActivePage(3)"
            to="/contact"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Contact
          </RouterLink>
        </ul>
      </nav>

      <div class="cl-md-btn-cnt">
        <button class="cl-md-btn" @click="() => toggleColorMode()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="isDarkMode" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            <g v-else>
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </g>
          </svg>
          <span>{{ isDarkMode ? 'Dark' : 'Light' }}</span>
        </button>

        <button class="menu-btn click" @click="() => setMenu(!isMenu)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line v-if="!isMenu" x1="3" y1="6" x2="21" y2="6"/>
            <line v-if="!isMenu" x1="3" y1="12" x2="21" y2="12"/>
            <line v-if="!isMenu" x1="3" y1="18" x2="21" y2="18"/>
            <line v-if="isMenu" x1="18" y1="6" x2="6" y2="18"/>
            <line v-if="isMenu" x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          <span>{{ isMenu ? 'Close' : 'Menu' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>

.header {
  display: flex;
  width: 90%;
  border-radius: 4rem;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 0 1rem rgba(37, 99, 235, 0.1);
  position: fixed;
  z-index: 100;
  border: 1px solid rgba(37, 99, 235, 0.08);
}

.header-bg {
  position: absolute;
  inset: 0;
  border-radius: 4rem;
  background: var(--global-component-bg);
  opacity: 0.7;
  z-index: -1;
}

.header-inner {
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
}

.name-cnt {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.6rem;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(13, 148, 136, 0.12));
}

.name {
  color: var(--global-txt-cl);
  font-size: 1rem;
  font-weight: 700;
}

.nav-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-list {
  display: flex;
  gap: 0.25rem;
  list-style: none;
}

.nav-list .router {
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  color: var(--global-txt-cl);
  cursor: pointer;
  text-decoration: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  align-items: center;
}

.nav-list .router:hover {
  background: rgba(37, 99, 235, 0.06);
}

.router.active {
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  color: #fff;
}

.cl-md-btn-cnt {
  display: flex;
  gap: 0.5rem;
}

.cl-md-btn {
  background: none;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--global-txt-cl);
  transition: all 0.25s ease;
  font-size: 0.85rem;
}

.cl-md-btn:hover {
  border-color: rgba(37, 99, 235, 0.4);
  background: rgba(37, 99, 235, 0.06);
}

.menu-btn {
  display: none;
  background: none;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  color: var(--global-txt-cl);
  font-size: 0.85rem;
  transition: all 0.25s ease;
}

.menu-btn:hover {
  border-color: rgba(37, 99, 235, 0.4);
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
