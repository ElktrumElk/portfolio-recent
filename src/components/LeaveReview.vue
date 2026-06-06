<template>
  <section class="leave-review" id="review">
    <div class="header">
      <h1>Review</h1>
      <p>Leave a review</p>
    </div>
    <form>
      <div>
        <div class="top-grid">
          <div>
            <label for="name">Name</label>
            <input id="name" placeholder="Enter name" required type="text" />
          </div>

          <div>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" required type="email" />
          </div>
        </div>

        <div class="bottom-grid">
          <input placeholder="Say something..." required type="text" />
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
  border-radius: 1rem;
  max-width: 700px;
  align-self: center;
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
  background: rgba(0, 145, 255, 0.624);
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
