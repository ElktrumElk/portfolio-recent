<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const timer = setTimeout(() => {
    isVisible.value = true
  }, 200)
  return () => clearTimeout(timer)
})
</script>

<template>
  <section class="welcome" id="welcome">
    <div class="welcome-bg">
      <span class="blob blob-1"></span>
      <span class="blob blob-2"></span>
      <span class="blob blob-3"></span>
    </div>

    <div class="welcome-content" :class="{ visible: isVisible }">
      <p class="greeting">Hello, I'm</p>
      <h1 class="name">Elkanah Cole</h1>
      <p class="title">Full-Stack Developer &amp; UI Engineer</p>
      <div class="cta-group">
        <RouterLink to="/projects" class="btn btn-primary">
          <span>View My Work</span>
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary">
          <span>Get In Touch</span>
        </RouterLink>
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
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.welcome-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: -10%;
  left: -5%;
  animation: float 20s ease-in-out infinite;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  bottom: -5%;
  right: -5%;
  animation: float 25s ease-in-out infinite reverse;
}

.blob-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 18s ease-in-out infinite 2s;
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
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 30px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: transparent;
  color: var(--global-txt-cl);
  border: 1px solid rgba(128, 128, 128, 0.3);
}

.btn-secondary:hover {
  border-color: rgba(102, 126, 234, 0.6);
  background: rgba(102, 126, 234, 0.05);
  transform: translateY(-2px);
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
