<script lang="ts" setup>
const projects = [
  {
    id: 1,
    name: 'Front Devs',
    description:
      'A showcase platform for front-end developers and graphic designers to display their work and connect with peers.',
    repoLink: 'https://github.com/ElktrumElk/front-devs',
    previewLink: 'https://front-devs.vercel.app',
    imgLinke: '/front-devs.jpeg',
    tags: ['React', 'TypeScript', 'MongoDB'],
  },

  {
    id: 2,
    name: 'GCBC App',
    description:
      'A church application for uploading and streaming Sunday service recordings and teaching videos.',
    repoLink: 'https://github.com/ElktrumElk/gcbc-app',
    previewLink: 'https://gcbc-app.vercel.app',
    imgLinke: '/gcbc.png',
    tags: ['Vue', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Merchant Core',
    description:
      'A management app that helps businesses track POS transactions and streamline operations.',
    repoLink: 'https://github.com/favmaclegend-opps/MerchantCore',
    previewLink: 'https://MerchantCore.vercel.app',
    imgLinke: '/merchant-core.jpeg',
    tags: ['TypeScript', 'React', 'MySQL'],
  },
  {
    id: 4,
    name: 'Easy RMS',
    description:
      'An educational platform where students access learning resources like modules and track academic progress.',
    repoLink: 'https://github.com/ElktrumElk/easy-rms-react',
    previewLink: 'https://front-devs.vercel.app',
    imgLinke: '',
    tags: ['React', 'TypeScript'],
  },
  {
    id: 5,
    name: 'Reminder',
    description:
      'A simple yet powerful app that helps you stay on top of your tasks with timely reminders.',
    repoLink: 'https://github.com/ElktrumElk/Reminder',
    previewLink: 'https://front-devs.vercel.app',
    imgLinke: '',
    tags: ['React Native', 'Expo'],
  },
]
</script>

<template>
  <section class="proj-section" id="project">
    <div class="header">
      <h1 class="gradient-heading">Projects</h1>
      <p>Explore my workflow and get inspired!</p>
    </div>

    <div class="proj-cnt">
      <div class="project-card" v-for="(project, idx) in projects" :key="idx">
        <div class="img-wrap">
          <div
            class="img"
            :style="{
              backgroundImage: project.imgLinke ? `url('${project.imgLinke}')` : undefined,
            }"
          >
            <div class="img-overlay"></div>
            <div class="img-placeholder" v-if="!project.imgLinke">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
          <div class="img-actions">
            <a :href="project.previewLink" target="_blank" class="action-btn primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Preview
            </a>
            <a :href="project.repoLink" target="_blank" class="action-btn secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Repo
            </a>
          </div>
        </div>

        <section class="proj-cnt-sec">
          <div class="title-cnt">
            <h1>{{ project.name }}</h1>
          </div>

          <div class="desc-cnt">
            <p>{{ project.description }}</p>
          </div>

          <div class="tags" v-if="project.tags?.length">
            <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.proj-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 95%;
  max-width: 1500px;
  align-self: center;
  min-height: 100dvh;
  overflow: hidden;
  height: auto;
  flex: 0 0 auto;
  padding-top: 10rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.proj-section .header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.gradient-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.proj-section .header p {
  color: gray;
  font-size: 0.95rem;
}

.proj-cnt {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.25rem;
}

.project-card {
  display: flex;
  padding: 0;
  border-radius: 1.25rem;
  flex-direction: column;
  background: var(--global-component-bg);
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.35s ease;
}

.project-card:hover {
  border-color: rgba(102, 126, 234, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.12);
}

.img-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18rem;
  width: 100%;
  background: var(--global-section-component-bg);
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s ease;
}

.project-card:hover .img {
  transform: scale(1.03);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5));
  pointer-events: none;
}

.img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(128, 128, 128, 0.3);
  z-index: 1;
}

.img-actions {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  border-radius: 0.6rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn:hover {
  transform: translateY(-1px);
}

.action-btn.primary:hover {
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.25);
}

.proj-cnt-sec {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
}

.title-cnt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-cnt h1 {
  color: var(--global-txt-cl);
  font-size: 1.2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desc-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.desc-cnt p {
  color: var(--global-txt-cl);
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.75;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-block-start: 0.25rem;
}

.tag {
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.75rem;
  background: rgba(102, 126, 234, 0.12);
  color: #667eea;
}

@media (max-width: 600px) {
  .proj-cnt {
    grid-template-columns: 1fr;
    width: 100%;
    overflow: hidden;
    scale: 0.95;
  }
  .project-card {
    flex: 1 1 auto;
    width: 100%;
  }
}
</style>
