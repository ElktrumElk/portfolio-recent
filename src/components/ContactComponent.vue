<script lang="ts" setup>
import { contact } from '@/data/conatcts'
import { useRerender } from '@/modules/render-vue'

const [activeContact, setActiveContact] = useRerender<number | null>(null)

const toggleContact = (key: number) => {
  setActiveContact(activeContact.value === key ? null : key)
}
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="header">
      <h1>Contacts</h1>
    </div>
    <div class="contact-cnt">
      <ul class="ulist">
        <li
          v-for="(item, index) in [
            { label: 'Email', value: contact.email, icon: 'https://img.icons8.com/?size=100&id=30&format=png&color=7a7a7a' },
            { label: 'Github', value: contact.github },
            { label: 'Phone', value: contact.phone },
          ]"
          :key="index"
          class="contact-card"
          :class="{ active: activeContact === index }"
        >
          <div class="card-header" @click="toggleContact(index)">
            <div class="f-cnt">
              <span>{{ item.label }}</span>
            </div>
            <div class="r-cnt">
              <span class="arrow" :class="{ rotated: activeContact === index }">
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
          </div>
          <transition name="dropdown">
            <div v-if="activeContact === index" class="card-body">
              <span class="n">{{ item.value }}</span>
              <div class="l-cnt">
                <span>Copy</span>
              </div>
            </div>
          </transition>
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
  min-height: 100%;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header h1 {
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-cnt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  background: var(--global-component-bg);
  width: 100%;
  padding: 1rem;
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
  border-color: rgba(102, 126, 234, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.12);
}

.contact-card.active {
  border-color: rgba(102, 126, 234, 0.4);
  box-shadow: 0 4px 24px rgba(102, 126, 234, 0.15);
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
  color: #667eea;
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
  border-top: 1px solid rgba(102, 126, 234, 0.15);
}

.n {
  color: var(--global-txt-cl);
  font-size: 0.9rem;
  opacity: 0.85;
  word-break: break-all;
}

.l-cnt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.l-cnt span {
  color: var(--global-txt-cl);
  font-size: 0.8rem;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease;
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
