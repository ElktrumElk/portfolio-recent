<script setup lang="ts">
import { useRerender } from '@/modules/render-vue'

const [isSubSkillDisplay, setSkillDisplay] = useRerender<number>(0)
const [isDisplay, setDisplay] = useRerender<boolean>(false)

const handleDispla = (key: number) => {
  setSkillDisplay(key)
}

const handleSkillToggle = (key: number, state: boolean) => {
  setDisplay(!state)
  handleDispla(isDisplay ? key : 0)
}
</script>

<template>
  <section
    class="skill-section"
    id="skill"
    :style="{ opacity: '0', transition: 'opacity 9s ease, transform .5s ease' }"
  >
    <div class="header">
      <h1>Skills</h1>
      <p>Know what i'm good at</p>
    </div>
    <div class="skill-cnt" id="skill-cnt">
      <section class="tech-skills">
        <h1>Technical Skills</h1>
        <ul>
          <li @click="() => handleDispla(0)">
            <div class="x-1">
              <img
                class="img"
                src="https://img.icons8.com/?size=100&id=11240&format=png&color=7a7a7a"
              />
              <span>Frontend Development</span>
            </div>
          </li>

          <li
            class="fend-frme-work"
            :style="{
              transition: 'all 1s ease',
            }"
            @click="() => handleSkillToggle(1, isDisplay)"
          >
            <div class="f-cnt">
              <div class="x-1">
                <img
                  src="https://img.icons8.com/?size=100&id=1765&format=png&color=7a7a7a"
                  class="img"
                  :style="{ color: '#fff' }"
                />
                <span>Frontend framework</span>
              </div>
              <span>></span>
            </div>

            <div class="frame-work l-cnt" v-if="isSubSkillDisplay === 1 && isDisplay">
              <strong>React</strong>
              <strong>Vue</strong>
            </div>
          </li>

          <li @click="() => handleSkillToggle(2, isDisplay)">
            <div class="f-cnt">
              <div class="x-1">
                <img
                  src="https://img.icons8.com/?size=100&id=33277&format=png&color=7a7a7a"
                  class="img"
                />
                <span>Version Control</span>
              </div>
              <span>></span>
            </div>

            <div class="version-cnt l-cnt" v-if="isSubSkillDisplay === 2 && isDisplay">
              <strong>Git</strong>
              <strong>Github</strong>
            </div>
          </li>

          <li @click="() => handleSkillToggle(3, isDisplay)">
            <div class="f-cnt">
              <div class="x-1">
                <img
                  src="https://img.icons8.com/?size=100&id=11238&format=png&color=7a7a7a"
                  class="img"
                />
                <span>Cascading Style Sheet</span>
              </div>
              <span>></span>
            </div>

            <div class="css l-cnt" v-if="isSubSkillDisplay === 3 && isDisplay">
              <span>SCSS</span>
              <span>Tailwind</span>
            </div>
          </li>
        </ul>
      </section>

      <section class="soft-skills">
        <h1>Soft Skills</h1>
        <ul>
          <li>
            <div class="x-1">
              <img
                class="img"
                src="https://img.icons8.com/?size=100&id=2070&format=png&color=7a7a7a"
              />
              <span>Critical Thinking</span>
            </div>
          </li>

          <li>
            <div class="x-1">
              <img
                class="img"
                src="https://img.icons8.com/?size=100&id=18636&format=png&color=7a7a7a"
              />
              <span>Quick Adaptation</span>
            </div>
          </li>

          <li>
            <div class="x-1">
              <img
                class="img"
                src="https://img.icons8.com/?size=100&id=uxYsjiIaIErJ&format=png&color=7a7a7a"
              />
              <span>Problem Solving</span>
            </div>
          </li>

          <li>
            <div class="x-1">
              <img
                class="img"
                src="https://img.icons8.com/?size=100&id=123780&format=png&color=7a7a7a"
              />
              <span>Deep Resaerch</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style lang="css" scoped>
.skill-section {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 4rem;
  max-width: 1500px;
  align-self: center;
  gap: 3rem;
  min-height: 100% !important;
  color: #6dbdfbde;
  justify-content: center;
}

.skill-section .header {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.x-1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.x-1 .img,
.img {
  display: flex;
  padding: 0.2rem;
  width: 30px;
  height: 30px;
  border-radius: 0.5rem;
}

.skill-section .header h1 {
  color: var(--global-txt-cl);
}
.skill-section .header p {
  color: gray;
}

.skill-cnt {
  display: grid;
  grid-template-columns: var(--skill-grid-column);
  gap: 2rem;
  width: 100%;

  height: auto;
}

.tech-skills,
.soft-skills {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--global-component-bg);
  gap: 1rem;
  overflow: hidden;
}

.tech-skills h1,
.soft-skills h1 {
  color: var(--global-txt-cl);
  font-size: 150%;
}

ul {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  color: var(--global-txt-cl);
  list-style: none;
  padding: 0;
}

ul li {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem 1rem;
  background: var(--global-section-component-bg);
  cursor: pointer;
  user-select: none;
}

.f-cnt {
  display: flex;
  justify-content: space-between;
}

.l-cnt {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

@media (max-width: 600px) {
  .skill-cnt {
    grid-template-columns: 1fr;
  }
}
</style>
