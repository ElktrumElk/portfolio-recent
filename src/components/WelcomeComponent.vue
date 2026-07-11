<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const entranceDone = ref(false)
const { el, isVisible } = useScrollReveal({ threshold: 0.3, repeat: true })

onMounted(() => {
  const timer = setTimeout(() => {
    entranceDone.value = true
  }, 200)
  return () => clearTimeout(timer)
})
</script>

<template>
  <section
    class="welcome"
    id="welcome"
    :ref="el"
    :class="{ 'is-visible': isVisible, 'entrance-done': entranceDone }"
  >
    <div class="welcome-bg">
      <div class="grid-pattern"></div>
    </div>

    <div class="welcome-content" :class="{ visible: entranceDone }">
      <div class="badge">
        <span class="badge-dot"></span>
        <span>Available for work</span>
      </div>
      <p class="greeting">Hello, I'm</p>
      <h1 class="name">Elkanah Cole</h1>
      <p class="title">Full-Stack Developer &amp; UI Engineer</p>
      <div class="cta-group"> 
        <RouterLink to="/projects" class="btn btn-primary">
          <span>View My Work</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary">
          <span>Get In Touch</span>
        </RouterLink>
      </div>
      <div class="scroll-indicator">
        <span class="scroll-text">Scroll to explore</span>
        <span class="scroll-line"></span>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.welcome {
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 5rem;
  opacity: 1;
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.welcome:not(.is-visible) {
  opacity: 0.4;
  transform: scale(0.97);
}

.welcome-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #1e3a5f, #2564eb42);
  top: -15%;
  left: -10%;
  animation: float 20s ease-in-out infinite;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #0d9488, #0890b247);
  bottom: -10%;
  right: -8%;
  animation: float 25s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #2563eb, #0d9488);
  top: 40%;
  left: 60%;
  animation: float 18s ease-in-out infinite 2s;
}

.blob-4 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #1e3a5f, #0891b2);
  top: 70%;
  left: 15%;
  animation: float 22s ease-in-out infinite 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  33% {
    transform: translateY(-30px) scale(1.05);
  }
  66% {
    transform: translateY(20px) scale(0.95);
  }
}

.welcome-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.welcome-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  border-radius: 2rem;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 500;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #059669;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.greeting {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--global-txt-cl);
  opacity: 0.8;
  margin-bottom: 0.5rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.name {
  font-family: sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--title-txt) 40%, #ffffff 50%, var(--title-txt) 60%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 300;
  color: var(--global-txt-cl);
  opacity: 0.75;
  margin-bottom: 2.5rem;
  letter-spacing: 0.02em;
}

.cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.85rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 99, 235, 0.6);
}

.btn-secondary {
  background: transparent;
  color: var(--global-txt-cl);
  border: 1px solid rgba(128, 128, 128, 0.3);
}

.btn-secondary:hover {
  border-color: rgba(37, 99, 235, 0.6);
  background: rgba(37, 99, 235, 0.05);
  transform: translateY(-2px);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3.5rem;
}

.scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--global-txt-cl);
  opacity: 0.4;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--global-txt-cl), transparent);
  opacity: 0.3;
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.6;
    transform: scaleY(1.2);
  }
}

@media (max-width: 600px) {
  .welcome {
    padding-top: 4rem;
    min-height: 100dvh;
  }

  .blob-1 {
    width: 250px;
    height: 250px;
  }

  .blob-2 {
    width: 200px;
    height: 200px;
  }

  .blob-3 {
    display: none;
  }

  .blob-4 {
    display: none;
  }

  .welcome-content {
    padding: 1rem;
  }

  .cta-group {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
