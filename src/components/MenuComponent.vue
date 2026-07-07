<script setup lang="ts">
import { isDarkMode, toggleColorMode } from '@/context/general'
import { useRerender } from '@/modules/render-vue'
import { onMounted } from 'vue'

const [menuScale, setMenuScale] = useRerender<number>(0)

onMounted(() => {
  requestAnimationFrame(() => {
    const id = setTimeout(() => {
      setMenuScale(1)
    }, 10)

    return () => clearTimeout(id)
  })
})
</script>

<template>
  <menu
    class="menu click"
    :style="
      menuScale === 0 && {
        transform: `scale(${menuScale})`,
        transition: 'transform .3s ease',
        willChange: 'transform',
      }
    "
  >
    <nav class="nav">
      <ul>
        <RouterLink class="link" to="/home">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Home
        </RouterLink>
        <RouterLink class="link" to="/projects">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          Projects
        </RouterLink>
        <RouterLink class="link" to="/contact">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Contact
        </RouterLink>
      </ul>
    </nav>
    <div class="tg-btn-cnt">
      <button class="tg-mode-btn" @click="() => toggleColorMode()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
      </button>
    </div>
  </menu>
</template>

<style lang="css" scoped>
.menu {
  width: 80%;
  align-self: center;
  z-index: 1000;
  background: var(--global-component-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  padding: 1rem;
  align-items: center;
  position: fixed;
  top: 5rem;
  border: 1px solid rgba(37, 99, 235, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  align-items: center;
  flex: 1;
}

.nav ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  width: 100%;
}
.nav ul .link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--global-txt-cl);
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}

.nav ul .link:hover {
  background: rgba(37, 99, 235, 0.08);
}

.tg-btn-cnt {
  display: flex;
  align-items: center;
}

.tg-mode-btn {
  background: none;
  border: none;
  border-radius: 1rem;
  padding: 0.2rem 1rem;
  color: var(--global-txt-cl);
  cursor: pointer;
}
</style>
