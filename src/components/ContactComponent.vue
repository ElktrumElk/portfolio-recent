<script lang="ts" setup>
import { contact } from '@/data/conatcts'
</script>

<template>
  <section class="contact-section">
    <div class="header">
      <h1>Contacts</h1>
    </div>
    <div class="contact-cnt">
      <ul class="ulist">
        <li>
          <div>
            <div class="f-cnt">
              <span>Email</span>
            </div>

            <div class="l-cnt">
              <span>Copy</span>
            </div>
          </div>
          <span>{{ contact.email }}</span>
        </li>

        <li>
          <div>
            <div class="f-cnt">
              <span>Github</span>
            </div>

            <div class="l-cnt">
              <span>Copy</span>
            </div>
          </div>
          <span>{{ contact.github }}</span>
        </li>

        <li>
          <div>
            <div class="f-cnt">
              <span>Phone</span>
            </div>

            <div class="l-cnt">
              <span>Copy</span>
            </div>
          </div>
          <span>{{ contact.phone }}</span>
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
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header h1 {
  color: var(--global-txt-cl);
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
}
.ulist li {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background: var(--global-section-component-bg);
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
}

.ulist li > div {
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

.ulist li span {
  color: var(--global-txt-cl);
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
