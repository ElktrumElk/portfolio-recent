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
        <RouterLink class="link" to="/home">Home</RouterLink>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
      </ul>
    </nav>
    <div class="tg-btn-cnt">
      <button class="tg-mode-btn" @click="() => toggleColorMode()">
        <img
          :src="
            !isDarkMode
              ? 'https://img.icons8.com/?size=100&id=9313&format=png&color=7a7a7a'
              : 'https://img.icons8.com/?size=100&id=45475&format=png&color=7a7a7a'
          "
          width="30"
          height="30"
        />
      </button>
    </div>
  </menu>
</template>

<style lang="css" scoped>
.menu {
  width: 80%;
  align-self: center;
  z-index: 1000;
  background: rgba(78, 77, 77, 0.152);
  backdrop-filter: blur(10px);
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  padding: 1rem;
  align-items: center;
  position: fixed;
  top: 5rem;
  box-shadow: inset 0 0 20px grey;
}

.nav {
  display: flex;
  align-items: center;
}

.nav ul {
  padding: 0;
  display: flex;
  gap: 1rem;
  list-style: none;
}
.nav ul .link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--global-txt-cl);
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
}
</style>
