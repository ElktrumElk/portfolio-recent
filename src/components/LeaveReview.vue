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
}

.header h1 {
  color: var(--global-txt-cl);
}

.header p {
  color: gray;
}

form {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  background: var(--global-component-bg);
  border: 1px solid rgba(102, 126, 234, 0);
  box-shadow: 0 0px 0px rgba(102, 126, 234, 0.12);
  transform: translateY(0);
  transition:
    box-shadow 0.4s ease,
    transform 0.4s ease;
  border-radius: 1rem;
  max-width: 700px;
  align-self: center;
}

form:hover {
  border: 1px solid rgba(102, 126, 234, 0.323);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.12);
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
  background: linear-gradient(19deg, #667eea, #3149b6);
  border: var(--global-border);
  border-radius: 1rem;
  color: var(--global-txt-cl);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

@media (max-width: 600px) {
  .bottom-grid {
    flex-direction: column;
  }
}
</style>
