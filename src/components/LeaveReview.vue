<script setup lang="ts">
import { leaveReview } from '@/network/postReview'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const content = ref('')

const handleReviewSubmint = (e: SubmitEvent) => {
  e.preventDefault()

  leaveReview({
    username: name.value,
    email: email.value,
    content: content.value,
  })
  
  name.value = ''
  email.value = ''
  content.value = ''
}
</script>

<template>
  <section class="leave-review" id="review">
    <div class="header">
      <div class="section-badge">Feedback</div>
      <h1>Review</h1>
      <p>Leave a review</p>
    </div>
    <form v-on:submit="(e) => handleReviewSubmint(e)">
      <div>
        <div class="top-grid">
          <div>
            <label for="name">Name</label>
            <input id="name" placeholder="Enter name" required type="text" v-model="name" />
          </div>

          <div>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" required type="email" v-model="email" />
          </div>
        </div>

        <div class="bottom-grid">
          <input placeholder="Say something..." required type="text" v-model="content" />
          <button class="click" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="css" scoped>
.leave-review {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.header {
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
  background: linear-gradient(135deg, #1e3a5f, #2563eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  color: var(--global-txt-secondary);
}

form {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  background: var(--global-component-bg);
  box-shadow: var(--global-component-shadow);
  border: 1px solid rgba(37, 99, 235, 0.08);
  transform: translateY(0);
  transition:
    box-shadow 0.4s ease,
    transform 0.4s ease;
  border-radius: 1rem;
  max-width: 700px;
  align-self: center;
}

form:hover {
  border: 1px solid rgba(37, 99, 235, 0.25);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);
  transform: translateY(-3%);
}
form > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.top-grid {
  display: flex;
  width: 100%;
  gap: 1rem;
}

.top-grid > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.top-grid > div label {
  display: flex;
  color: var(--global-txt-cl);
}

.top-grid > div input {
  width: 100%;

  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  color: var(--global-txt-cl);
  background: var(--global-section-component-bg);
  outline: none;
  border: none;
}

.bottom-grid {
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
}

.bottom-grid input {
  flex: 1;
  border: none;
  padding: 1rem;
  color: var(--global-txt-cl);
  background: none;
  border-radius: 1rem;
  outline: none;
  background: var(--global-section-component-bg);
  font-size: 1rem;
}

.bottom-grid button {
  padding: 0.5rem 4rem;
  background: linear-gradient(19deg, #1e3a5f, #2563eb);
  border: var(--global-border);
  border-radius: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.bottom-grid button:hover {
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
  transform: translateY(-1px);
}

@media (max-width: 600px) {
  .bottom-grid {
    flex-direction: column;
  }
}
</style>
