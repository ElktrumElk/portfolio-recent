<script lang="ts" setup>
import { useRerender } from '@/modules/render-vue'
import { onMounted } from 'vue'

const [scale, setScale] = useRerender(0.8)
const [opacity, setOpacity] = useRerender(0)
onMounted(() => {
  const id = setTimeout(() => {
    setScale(1)
    setOpacity(1)
  }, 100)

  return () => clearTimeout(id)
})
</script>

<template>
  <section
    class="about-section anim"
    id="about"
    :style="{
      opacity: `${opacity} !important`,
      transform: `scale(${scale})`,
      transition: 'opacity 1s ease, transform 1s ease !important',
      willChange: 'transform',
    }"
  >
    <div class="about-cnt">
      <div class="about-info">
        <h1 class="greetings">Hi!</h1>
        <p class="description">
          I am Elkanah Cole who goes by the name Elktrum Elk. Passionate in building user
          accessibility website that can adapt on various screen device. Less Complexity is great
          for an appication who care about their users comfortability. Hope to get in touch with
          you!
        </p>

        <div class="button-cnt">
          <router-link to="/projects" class="vw-pj-btn">
            <span>View Projects</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.about-section {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  height: 100%;
  flex: 0 0 auto;
  align-items: center;
}

.about-cnt {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  align-items: center;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--global-txt-cl);
  flex: 1;
  width: 100%;
}

.button-cnt {
  margin-block-start: 1rem;
  display: flex;
  gap: 1rem;
}
.vw-pj-btn {
  display: flex;
  background: none;
  color: var(--global-txt-cl);
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  border: var(--global-border);
  cursor: pointer;
  box-shadow: 0 0 0rem 0rem rgb(0, 208, 255);
  transition: box-shadow 0.5s ease;
  text-decoration: none;
}

.vw-pj-btn:hover {
  box-shadow:
    0 0 1rem rgb(0, 208, 255),
    0 0 2rem rgb(0, 130, 185);
}

@media (max-width: 600px) {
  .about-cnt {
    grid-template-columns: 1fr;
  }
}
</style>
