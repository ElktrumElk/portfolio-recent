<script setup lang="ts">
import { comments, Content } from '@/data/comments'
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const obj = new Content()
const { el, isVisible } = useScrollReveal({ threshold: 0.1 })

onMounted(() => {
  obj.loadComment()
})
</script>

<template>
  <section class="comment-sec" id="comments" :ref="el" :class="{ 'is-visible': isVisible }">
    <div class="header">
      <div class="section-badge">Testimonials</div>
      <h1>What people say</h1>
      <p>Elktrum Elk</p>
    </div>

    <div class="cmt-div">
      <div class="overlay"></div>
      <div class="horizontal-scroll" id="horizontal-scroll" v-if="comments.length !== 0">
        <div class="horiz-cnt">
          <article class="card" v-for="(data, idx) in comments" :key="idx" :id="`art_${idx}`">
            <div class="profile"></div>

            <section class="info">
              <h1>{{ data.username }}</h1>
              <p>{{ data.content }}</p>
            </section>
          </article>

          <article
            class="card"
            v-for="(data, idx) in comments"
            :key="idx + 'dup'"
            :id="`art_${idx}`"
          >
            <div class="profile"></div>

            <section class="info">
              <h1>{{ data.username }}</h1>
              <p>{{ data.content }}</p>
            </section>
          </article>
        </div>
      </div>
      <div v-else :style="{ marginInline: 'auto' }">
        <span>No comment</span>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.comment-sec {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1500px;
  align-items: center;
  align-self: center;
  min-height: 100% !important;
  justify-content: center;
  flex: 0 0 auto;
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

}

.comment-sec.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.comment-sec .header > * {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.comment-sec.is-visible .header > *:nth-child(1) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
.comment-sec.is-visible .header > *:nth-child(2) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}
.comment-sec.is-visible .header > *:nth-child(3) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

.comment-sec .horizontal-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.comment-sec.is-visible .horizontal-scroll {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
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
  color: var(--global-txt-secondary);
}

.cmt-div {
  display: flex;
  position: relative;
  display: flex;
  width: 100%;
}
.horizontal-scroll {
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  padding: 1rem 5rem;
  width: 100%;
  scroll-snap-type: 100% 100%;
}

.horiz-cnt {
  display: flex;
  width: max-content;
  animation: c-scroll 20s linear infinite;
  will-change: transform;
  gap: 1rem;
}

@keyframes c-scroll {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(-150%);
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    var(--bg-gen-cl) 2%,
    transparent 8% 92%,
    var(--bg-gen-cl) 98%
  );
  z-index: 22;
}
.card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--global-component-bg);
  flex: 0 0 auto;
  width: 100%;
  max-width: 30rem;
  box-shadow: var(--global-component-shadow);
  border: 1px solid rgba(37, 99, 235, 0.06);
}

.card:hover {
  border: 1px solid;
  border-color: rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);
}

.profile {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 4rem;
  background: var(--global-section-component-bg);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.info h1 {
  color: var(--global-txt-cl);
  font-size: 1.2rem;
  line-height: 1.2rem;
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info p {
  color: var(--global-txt-secondary);
}
@media (max-width: 600px) {
  .card {
    width: 100%;
  }

  .horizontal-scroll {
    padding: 1rem 0rem;
    scroll-behavior: smooth;
    scroll-snap-type: mandatory;
    scroll-snap-align: start center;
    scroll-snap-stop: always;
  }
}
</style>
