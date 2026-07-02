<script setup lang="ts">
import { comments } from '@/data/comments'
</script>

<template>
  <section class="comment-sec" id="comments">
    <div class="header">
      <h1>What people say</h1>
      <p>Elktrum Elk</p>
    </div>
    <div class="cmt-div">
      <div class="overlay"></div>
      <div class="horizontal-scroll" id="horizontal-scroll">
        <div class="horiz-cnt">
          <article class="card" v-for="(data, idx) in comments" :key="idx" :id="`art_${idx}`">
            <div class="profile"></div>

            <section class="info">
              <h1>{{ data.username }}</h1>
              <p>{{ data.comment }}</p>
            </section>
          </article>

          <article class="card" v-for="(data, idx) in comments" :key="idx" :id="`art_${idx}`">
            <div class="profile"></div>

            <section class="info">
              <h1>{{ data.username }}</h1>
              <p>{{ data.comment }}</p>
            </section>
          </article>
        </div>
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
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.header h1 {
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  color: gray;
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
}

.card:hover {
  border: 1px solid;
  border-color: rgba(102, 126, 234, 0.648);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.12);
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info p {
  color: var(--global-txt-cl);
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
