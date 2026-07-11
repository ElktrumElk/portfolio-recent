<script setup lang="ts">
import { useRerender } from '@/modules/render-vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const [activeSkill, setActiveSkill] = useRerender<number>(0)
const [isOpen, setIsOpen] = useRerender<boolean>(false)
const [scale, setScale] = useRerender(0)

const { el, isVisible } = useScrollReveal({ threshold: 0.08 })

const toggleSkill = (key: number) => {
  const willOpen = activeSkill.value !== key || !isOpen.value
  setIsOpen(willOpen)
  setActiveSkill(willOpen ? key : 0)
  if (willOpen) {
    setTimeout(() => setScale(1), 10)
  } else {
    setTimeout(() => setScale(0), 100)
  }
}
</script>

<template>
  <section
    class="skill-section"
    id="skill"
    :ref="el"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="header">
      <div class="section-badge">Expertise</div>
      <h1 class="gradient-heading">Skills &amp; Tools</h1>
      <p>Know what I'm good at</p>
    </div>
    <div class="skill-cnt" id="skill-cnt">
      <section class="tech-skills">
        <div class="section-label">
          <span class="label-dot"></span>
          <h1>Technical Skills</h1>
        </div>
        <ul>
          <li class="skill-card">
            <div class="skill-card-inner">
              <div class="x-1">
                <div class="icon-wrap">
                  <img
                    class="img"
                    src="https://img.icons8.com/?size=100&id=11240&format=png&color=7a7a7a"
                  />
                </div>
                <span>Frontend Development</span>
              </div>
              <div class="skill-level">
                <div class="level-bar"><div class="level-fill fill-90"></div></div>
              </div>
            </div>
          </li>

          <li
            class="skill-card expandable"
            :class="{ active: activeSkill === 1 && isOpen }"
            @click="toggleSkill(1)"
          >
            <div class="skill-card-inner">
              <div class="f-cnt">
                <div class="x-1">
                  <div class="icon-wrap">
                    <img
                      src="https://img.icons8.com/?size=100&id=1765&format=png&color=7a7a7a"
                      class="img"
                    />
                  </div>
                  <span>Frontend Framework</span>
                </div>
                <span class="arrow" :class="{ rotated: activeSkill === 1 && isOpen }">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="skill-level">
                <div class="level-bar"><div class="level-fill fill-85"></div></div>
              </div>
            </div>

            <div
              class="sub-skills"
              v-if="activeSkill === 1 && isOpen"
              :style="{ transform: `scaleY(${scale})`, opacity: scale }"
            >
              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>React</span>
              </div>

              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>Vue</span>
              </div>

              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>Flutter</span>
              </div>
            </div>
          </li>

          <li
            class="skill-card expandable"
            :class="{ active: activeSkill === 2 && isOpen }"
            @click="toggleSkill(2)"
          >
            <div class="skill-card-inner">
              <div class="f-cnt">
                <div class="x-1">
                  <div class="icon-wrap">
                    <img
                      src="https://img.icons8.com/?size=100&id=33277&format=png&color=7a7a7a"
                      class="img"
                    />
                  </div>
                  <span>Version Control</span>
                </div>
                <span class="arrow" :class="{ rotated: activeSkill === 2 && isOpen }">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="skill-level">
                <div class="level-bar"><div class="level-fill fill-80"></div></div>
              </div>
            </div>

            <div
              class="sub-skills"
              v-if="activeSkill === 2 && isOpen"
              :style="{ transform: `scaleY(${scale})`, opacity: scale }"
            >
              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>Git</span>
              </div>
              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>GitHub</span>
              </div>
            </div>
          </li>

          <li
            class="skill-card expandable"
            :class="{ active: activeSkill === 3 && isOpen }"
            @click="toggleSkill(3)"
          >
            <div class="skill-card-inner">
              <div class="f-cnt">
                <div class="x-1">
                  <div class="icon-wrap">
                    <img
                      src="https://img.icons8.com/?size=100&id=11238&format=png&color=7a7a7a"
                      class="img"
                    />
                  </div>
                  <span>Cascading Style Sheet</span>
                </div>
                <span class="arrow" :class="{ rotated: activeSkill === 3 && isOpen }">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="skill-level">
                <div class="level-bar"><div class="level-fill fill-85"></div></div>
              </div>
            </div>

            <div
              class="sub-skills"
              v-if="activeSkill === 3 && isOpen"
              :style="{ transform: `scaleY(${scale})`, opacity: scale }"
            >
              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>SCSS</span>
              </div>
              <div class="sub-skill">
                <span class="sub-dot"></span>
                <span>Tailwind</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="soft-skills">
        <div class="section-label">
          <span class="label-dot teal"></span>
          <h1>Soft Skills</h1>
        </div>
        <ul>
          <li class="skill-card">
            <div class="soft-card-content">
              <div class="icon-wrap soft-icon">
                <img
                  class="img"
                  src="https://img.icons8.com/?size=100&id=2070&format=png&color=7a7a7a"
                />
              </div>
              <div class="soft-text">
                <span class="soft-name">Critical Thinking</span>
                <span class="soft-desc">Analytical approach to complex problems</span>
              </div>
            </div>
          </li>

          <li class="skill-card">
            <div class="soft-card-content">
              <div class="icon-wrap soft-icon">
                <img
                  class="img"
                  src="https://img.icons8.com/?size=100&id=18636&format=png&color=7a7a7a"
                />
              </div>
              <div class="soft-text">
                <span class="soft-name">Quick Adaptation</span>
                <span class="soft-desc">Fast learner in changing environments</span>
              </div>
            </div>
          </li>

          <li class="skill-card">
            <div class="soft-card-content">
              <div class="icon-wrap soft-icon">
                <img
                  class="img"
                  src="https://img.icons8.com/?size=100&id=uxYsjiIaIErJ&format=png&color=7a7a7a"
                />
              </div>
              <div class="soft-text">
                <span class="soft-name">Problem Solving</span>
                <span class="soft-desc">Creative solutions for tough challenges</span>
              </div>
            </div>
          </li>

          <li class="skill-card">
            <div class="soft-card-content">
              <div class="icon-wrap soft-icon">
                <img
                  class="img"
                  src="https://img.icons8.com/?size=100&id=123780&format=png&color=7a7a7a"
                />
              </div>
              <div class="soft-text">
                <span class="soft-name">Deep Research</span>
                <span class="soft-desc">Thorough investigation and analysis</span>
              </div>
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
  width: 95%;
  flex-direction: column;
  margin-bottom: 0rem;
  max-width: 1500px;
  align-self: center;
  gap: 3rem;
  min-height: 100%;
  justify-content: center;
  flex: 0 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.skill-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-section .header > *,
.skill-section .tech-skills,
.skill-section .soft-skills {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.skill-section .header > *:nth-child(1) { transform: translateY(16px); }
.skill-section .header > *:nth-child(2) { transform: translateY(16px); }
.skill-section .header > *:nth-child(3) { transform: translateY(16px); }
.skill-section .tech-skills { transform: translateX(-30px); }
.skill-section .soft-skills { transform: translateX(30px); }

.skill-section.is-visible .header > *:nth-child(1) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
.skill-section.is-visible .header > *:nth-child(2) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}
.skill-section.is-visible .header > *:nth-child(3) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}
.skill-section.is-visible .tech-skills {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.3s;
}
.skill-section.is-visible .soft-skills {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.4s;
}

.skill-section .skill-card {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
  transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.skill-section.is-visible .skill-card:nth-child(1) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.4s; }
.skill-section.is-visible .skill-card:nth-child(2) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.5s; }
.skill-section.is-visible .skill-card:nth-child(3) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.6s; }
.skill-section.is-visible .skill-card:nth-child(4) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.7s; }

.skill-section .header {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.9rem;
  border-radius: 2rem;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2563eb;
  margin-bottom: 0.3rem;
}

.gradient-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  background: var(--title-txt);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-section .header p {
  font-size: 0.95rem;
}

.skill-cnt {
  display: grid;
  grid-template-columns: var(--skill-grid-column);
  gap: 2rem;
  width: 100%;
  height: auto;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.label-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  flex-shrink: 0;
}

.label-dot.teal {
  background: linear-gradient(135deg, #2563eb, #0d9488);
}

.tech-skills,
.soft-skills {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1.25rem;
  background: transparent;
  gap: 1.25rem;
  overflow: hidden;
  box-shadow: var(--global-component-shadow);
  border: 1px solid rgba(37, 99, 235, 0.06);
  backdrop-filter: blur(1px);
}

.tech-skills h1,
.soft-skills h1 {
  color: var(--global-txt-cl);
  font-size: 130%;
  background: linear-gradient(135deg, var(--title-txt), #d9d9d9);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

ul {
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  color: var(--global-txt-cl);
  list-style: none;
  padding: 0;
}

.skill-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  background: var(--global-section-component-bg);
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.skill-card:hover {
  border-color: rgba(37, 99, 235, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);
}

.skill-card.expandable.active {
  border-color: rgba(37, 99, 235, 0.4);
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.15);
}

.skill-card-inner {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.x-1 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.6rem;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(13, 148, 136, 0.15));
  flex-shrink: 0;
}

.icon-wrap .img,
.img {
  display: flex;
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(36%) sepia(98%) saturate(1648%) hue-rotate(213deg)
    brightness(97%) contrast(91%);
}

.soft-icon {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(13, 148, 136, 0.12));
}

.soft-icon .img {
  filter: brightness(0) saturate(100%) invert(48%) sepia(83%) saturate(548%) hue-rotate(143deg)
    brightness(93%) contrast(85%);
}

.f-cnt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.arrow {
  display: flex;
  align-items: center;
  color: #2563eb;
  transition: transform 0.3s ease;
  opacity: 0.6;
}

.arrow.rotated {
  transform: rotate(180deg);
  opacity: 1;
}

.skill-level {
  padding-left: 2.85rem;
}

.level-bar {
  width: 100%;
  height: 5px;
  border-radius: 4px;
  background: rgba(128, 128, 128, 0.15);
  overflow: hidden;
}

.level-fill {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, #2563eb, #0d9488);
  transition: width 0.6s ease;
}

.fill-90 {
  width: 90%;
}
.fill-85 {
  width: 85%;
}
.fill-80 {
  width: 80%;
}

.sub-skills {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0 0 2.85rem;
  transform-origin: top;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.sub-skill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(37, 99, 235, 0.08);
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.sub-skill:hover {
  background: rgba(37, 99, 235, 0.15);
}

.sub-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  flex-shrink: 0;
}

.soft-card-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.soft-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.soft-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.soft-desc {
  font-size: 0.8rem;
  color: var(--global-txt-secondary);
}

@media (max-width: 600px) {
  .skill-cnt {
    grid-template-columns: 1fr;
  }
  .skill-section {
    padding-block-start: 9rem;
  }
  .skill-level {
    padding-left: 0;
  }
  .sub-skills {
    padding-left: 0;
  }
}
</style>
