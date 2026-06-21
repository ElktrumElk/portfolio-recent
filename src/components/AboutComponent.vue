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
    class="about-section"
    id="about"
    :style="{
      opacity: `${opacity}`,
      transform: `scale(${scale})`,
      transition: 'opacity 1s ease, transform 1s ease',
    }"
  >
    <div class="about-cnt">
      <div class="about-info">
        <h1 class="greetings">Hi, I'm Elkanah</h1>
        <p class="description">
          I'm a full-stack developer and UI engineer passionate about building accessible,
          performant web applications that adapt seamlessly across devices. I believe great software
          is both functional and delightful — where complexity takes a backseat to user comfort.
        </p>
        <p class="description">
          From crafting pixel-perfect interfaces to architecting scalable backend systems, I bring
          ideas to life with clean code and thoughtful design. Let's build something amazing
          together.
        </p>

        <div class="stats-cnt">
          <div class="stat">
            <span class="stat-num">5+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat">
            <span class="stat-num">50+</span>
            <span class="stat-label">Projects Delivered</span>
          </div>
          <div class="stat">
            <span class="stat-num">30+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
          <div class="stat">
            <span class="stat-num">15+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>

        <div class="button-cnt">
          <router-link to="/projects" class="vw-pj-btn">
            <span>View Projects</span>
          </router-link>
          <a href="mailto:elkanahcole@gmail.com" class="vw-pj-btn contact-btn">
            <span>Contact Me</span>
          </a>
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
  min-height: 100dvh;
  flex: 0 0 auto;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  justify-content: center;
}

.about-cnt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  height: 100%;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  align-items: start;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--global-txt-cl);
  width: 100%;
}

.greetings {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 540px;
}

.stats-cnt {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-block-start: 0.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  background: var(--global-component-bg);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.7;
}

.button-cnt {
  margin-block-start: 0.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.vw-pj-btn {
  display: flex;
  background: none;
  color: var(--global-txt-cl);
  border-radius: 2rem;
  padding: 0.6rem 1.5rem;
  border: var(--global-border);
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(0, 208, 255);
  transition:
    box-shadow 0.5s ease,
    transform 0.3s ease;
  text-decoration: none;
  font-size: 0.95rem;
}

.vw-pj-btn:hover {
  box-shadow:
    0 0 1rem rgb(0, 208, 255),
    0 0 2rem rgb(0, 130, 185);
  transform: translateY(-2px);
}

.contact-btn {
  border-color: rgba(128, 128, 128, 0.3);
}

.contact-btn:hover {
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: none;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.highlight-card {
  background: var(--global-component-bg);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateX(4px);
}

.highlight-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.highlight-card h3 {
  font-size: 1.05rem;
  color: var(--global-txt-cl);
}

.highlight-card p {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.5;
  color: var(--global-txt-cl);
}

@media (max-width: 800px) {
  .about-cnt {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .about-cnt {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .stats-cnt {
    grid-template-columns: 1fr 1fr;
  }

  .about-section {
    padding-top: 4rem;
  }
}
</style>
