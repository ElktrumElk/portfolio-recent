<script lang="ts" setup>
const projects = [
  {
    id: 1,
    name: 'Front Devs',
    description:
      'Front Devs is a web application where front-end developers and graphic designers can show case there work and make connections.',
    repoLink: 'https://github.com/ElktrumElk/front-devs',
    previewLink: 'https://front-devs.vercel.app',
    imgLinke: '...',
  },
  {
    id: 2,
    name: 'GCBC App',
    description:
      'A church Application where sunday serveice and any other teaching videos can be uploaded.',
    repoLink: 'https://github.com/ElktrumElk/gcbc-app',
    previewLink: 'https://gcbc-app.vercel.app',
    imgLinke: '/gcbc_light.png',
  },
  {
    id: 3,
    name: 'Marchant Core',
    description:
      'A management app that helps your mange your business by keeping track of your POS',
    repoLink: 'https://github.com/favmaclegend-opps/MerchantCore',
    previewLink: 'https://MerchantCore.vercel.app',
    imgLinke: '...',
  },
  {
    id: 4,
    name: 'Easy RMS',
    description:
      'An Educational Platform where students can get educational resources like modules and can keep track of educational progress.',
    repoLink: 'https://github.com/ElktrumElk/easy-rms-react',
    previewLink: 'https://front-devs.vercel.app',
    imgLinke: '...',
  },
]
</script>

<template>
  <section class="proj-section" id="project">
    <div class="header">
      <h1>Projects</h1>
      <p>Explore my workflow and get inspired!</p>
    </div>

    <div class="proj-cnt">
      <div class="project-card click" v-for="(project, idx) in projects" :key="idx">
        <div class="img" :style="{ backgroundImage: `url('${project.imgLinke}')` }"></div>

        <section class="proj-cnt-sec">
          <div class="title-cnt">
            <h1>{{ project.name }}</h1>
            <button class="prev-btn">
              <a :href="project.previewLink">Preview</a>
            </button>
          </div>

          <div class="desc-cnt">
            <p>{{ project.description }}</p>
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
  width: 100%;
  max-width: 1500px;
  align-self: center;
  min-height: 100dvh;
  overflow: hidden;
  height: auto;
  flex: 0 0 auto;
  padding-top: 10rem;
}

.proj-section .header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.proj-section .header h1 {
  color: var(--global-txt-cl);
}

.proj-section .header p {
  color: gray;
}

.proj-cnt {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
}

.project-card {
  display: flex;
  padding: 1rem;
  border-radius: 1rem;
  flex-direction: column;
  background: var(--global-component-bg);
  gap: 1rem;
}

.img {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  height: 20rem;
  width: 100%;
  background: var(--global-section-component-bg);
  background-size: cover;
  background-position: center;
}

.proj-cnt-sec {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title-cnt {
  display: flex;
  justify-content: space-between;
}
.title-cnt h1 {
  color: var(--global-txt-cl);
}

.prev-btn {
  background: none;
  border: var(--global-border);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
}

.prev-btn a {
  text-decoration: none;
  color: var(--global-txt-cl);
}

.desc-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.desc-cnt p {
  color: var(--global-txt-cl);
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
