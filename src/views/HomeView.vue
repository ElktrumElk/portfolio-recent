<script setup lang="ts">
import AboutComponent from '@/components/AboutComponent.vue'
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import GithubStatsComponent from '@/components/GithubStatsComponent.vue'
import LeaveReview from '@/components/LeaveReview.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import SkillsComponet from '@/components/SkillsComponet.vue'
import { scrollEnd, scrollStart, setActivePage } from '@/context/general'
import { onMounted } from 'vue'

onMounted(() => {
  setActivePage(1)
})
</script>

<template>
  <div
    id="home"
    class="home"
    @scroll="
      () => {
        scrollStart()
      }
    "
    @scrollend="() => scrollEnd()"
  >
    <WelcomeComponent />
    <AboutComponent />
    <SkillsComponet />
    <GithubStatsComponent />
    <ProjectsComponent />
    <CommentsComponent />
    <ContactComponent />
    <LeaveReview />
    <FooterComponent />
  </div>
</template>

<style lang="css" scoped>
.home {
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 10rem;
  scrollbar-color: rgba(128, 128, 128, 0.317);
  scrollbar-width: 1px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
@media (max-width: 600px) {
  .home {
    padding: 0 1rem;
  }
}
</style>
