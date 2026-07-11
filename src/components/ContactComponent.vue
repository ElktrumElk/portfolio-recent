<script lang="ts" setup>
import { contact } from '@/data/conatcts'
import { useRerender } from '@/modules/render-vue'
import { computed } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const [activeContact, setActiveContact] = useRerender<number | null>(null)

const toggleContact = (key: number) => {
  setActiveContact(activeContact.value === key ? null : key)
}

const { el, isVisible } = useScrollReveal({ threshold: 0.15, repeat: false })

const transProperties = computed(() => {
  if (isVisible.value) {
    return ['translateX(0%)', 'translateY(0%)', 'translateY(0%)']
  }
  return ['translateX(-90%)', 'translateY(100%)', 'translateY(-100%)']
})
</script>

<template>
  <section class="contact-section" id="contact" :ref="el" :class="{ 'is-visible': isVisible }">
    <div class="header">
      <div class="section-badge">Connect</div>
      <h1>Get In Touch</h1>
      <p>I'd love to hear from you</p>
    </div>
    <div class="contact-cnt">
      <ul class="ulist">
        <li
          v-for="(item, index) in [
            {
              label: 'Email',
              value: contact.email,
              icon: 'https://img.icons8.com/?size=100&id=30&format=png&color=7a7a7a',
            },
            { label: 'Github', value: contact.github },
            { label: 'Phone', value: contact.phone },
          ]"
          :key="index"
          class="contact-card"
          :style="{ transform: transProperties[index], transition: 'transform .4s ease' }"
          :class="{ active: activeContact === index }"
        >
          <div class="card-header" @click="toggleContact(index)">
            <div class="f-cnt">
              <span>{{ item.label }}</span>
            </div>
            <div class="r-cnt">
              <button class="copy-btn">Copy</button>
            </div>
          </div>

          <div class="card-body">
            <span class="n">{{ item.value }}</span>
            <div class="l-cnt"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="css" scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  min-height: auto;
  justify-content: center;
  padding: 10rem 1rem;
}

.contact-section .header > * {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.contact-section.is-visible .header > *:nth-child(1) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
.contact-section.is-visible .header > *:nth-child(2) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}
.contact-section.is-visible .header > *:nth-child(3) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  background: var(--title-txt);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  font-size: 0.95rem;
}

.contact-cnt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  background: var(--global-component-bg);
  width: 100%;
  padding: 1rem;
  box-shadow: var(--global-component-shadow);
  border: 1px solid rgba(37, 99, 235, 0.06);
}

.ulist {
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  list-style: none;
}

.contact-card {
  display: flex;
  flex-direction: column;
  background: var(--global-section-component-bg);
  border-radius: 1rem;
  padding: 1rem 1rem;
  gap: 0.75rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.contact-card:hover {
  border-color: rgba(37, 99, 235, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);
}

.contact-card.active {
  border-color: rgba(37, 99, 235, 0.4);
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.15);
}

.contact-card:nth-child(2) {
  border-color: rgba(37, 99, 235, 0.25);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);
}

.contact-section.is-visible .contact-card {
  animation: float 5s ease-in-out infinite;
}

.contact-section.is-visible .contact-card:nth-child(1) {
  animation-delay: 0.6s;
}
.contact-section.is-visible .contact-card:nth-child(2) {
  animation-delay: 0.8s;
}
.contact-section.is-visible .contact-card:nth-child(3) {
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.contact-card:nth-child(2):hover {
  transform: scale(1.2);
}

.contact-section.is-visible .contact-card:nth-child(2):hover {
  animation: none;
  transform: scale(1.2);
}

.card-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.f-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.f-cnt span {
  color: var(--global-txt-cl);
  font-weight: 600;
  font-size: 0.95rem;
}

.r-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(37, 99, 235, 0.15);
}

.n {
  font-size: 0.9rem;
  word-break: break-all;
}

.l-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.copy-btn {
  color: var(--global-txt-secondary);
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  border: none;
  border-radius: 1rem;
  background-color: transparent;
}

.copy-btn:hover {
  color: var(--global-txt-cl);
}

.l-cnt span:hover {
  opacity: 1;
}

.dropdown-enter-active {
  animation: dropdown-in 0.25s ease forwards;
}

.dropdown-leave-active {
  animation: dropdown-in 0.2s ease reverse;
}

@keyframes dropdown-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 800px) {
  .ulist {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .ulist {
    grid-template-columns: 1fr;
  }
}
</style>
