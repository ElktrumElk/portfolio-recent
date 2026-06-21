<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface GithubData {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalForks: number
  topLanguages: string[]
}

const data = ref<GithubData | null>(null)
const error = ref(false)
const username = 'ElktrumElk'

onMounted(async () => {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
    ])

    if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch')

    const user = await userRes.json()
    const repos = await reposRes.json()
    console.log(repos)

    const totalStars = repos.reduce(
      (acc: number, r: { stargazers_count: number }) => acc + r.stargazers_count,
      0,
    )
    const totalForks = repos.reduce(
      (acc: number, r: { forks_count: number }) => acc + r.forks_count,
      0,
    )
    const langMap = new Map<string, number>()
    for (const r of repos) {
      if (r.language) {
        langMap.set(r.language, (langMap.get(r.language) || 0) + 1)
      }
    }
    const topLanguages = [...langMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang)

    data.value = {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      totalForks,
      topLanguages,
    }
  } catch {
    error.value = true
  }
})
</script>

<template>
  <section class="github-section" id="github">
    <div class="header">
      <h1>GitHub Statistics</h1>
      <p>My open source presence</p>
    </div>

    <div v-if="error" class="fallback">
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </span>
          <span class="stat-value">{{ data?.publicRepos || 0 }}</span>
          <span class="stat-label">Repositories</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon star">★</span>
          <span class="stat-value">{{ data?.totalStars || 0 }}</span>
          <span class="stat-label">Stars</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon fork">⑂</span>
          <span class="stat-value">{{ data?.totalForks || 0 }}</span>
          <span class="stat-label">Forks</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">👥</span>
          <span class="stat-value">{{ data?.followers || 0 }}</span>
          <span class="stat-label">Followers</span>
        </div>
      </div>

      <div v-if="data?.topLanguages.length" class="languages">
        <h3>Top Languages</h3>
        <div class="lang-list">
          <span v-for="lang in data?.topLanguages" :key="lang" class="lang-tag">{{ lang }}</span>
        </div>
      </div>
    </div>

    <div v-else class="cards">
      <img
        :src="`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&hide_border=true&theme=transparent&text_color=8b949e&icon_color=667eea&title_color=667eea`"
        alt="GitHub Stats"
        class="gh-card"
        loading="lazy"
      />
      <img
        :src="`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&theme=transparent&text_color=8b949e&stroke=667eea&ring=667eea&fire=764ba2&currStreakNum=8b949e`"
        alt="GitHub Streak"
        class="gh-card"
        loading="lazy"
      />
      <img
        :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=transparent&text_color=8b949e&title_color=667eea`"
        alt="Top Languages"
        class="gh-card"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped>
.github-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1500px;
  align-self: center;
  min-height: 100dvh;
  justify-content: center;
  padding-top: 5rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.header h1 {
  color: var(--global-txt-cl);
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.header p {
  color: gray;
  font-size: 0.95rem;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
}

.gh-card {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 0.75rem;
}

.fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 700px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  background: var(--global-component-bg);
  border-radius: 1rem;
  padding: 1.25rem 1rem;
}

.stat-icon {
  font-size: 1.5rem;
  line-height: 1;
  color: var(--global-txt-cl);
  opacity: 0.7;
}

.stat-icon svg {
  display: block;
}

.stat-icon.star {
  color: #f5a623;
  font-size: 1.8rem;
}

.stat-icon.fork {
  font-size: 1.8rem;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.7;
  color: var(--global-txt-cl);
}

.languages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.languages h3 {
  font-size: 1rem;
  color: var(--global-txt-cl);
  opacity: 0.8;
}

.lang-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.lang-tag {
  background: var(--global-component-bg);
  color: var(--global-txt-cl);
  padding: 0.35rem 0.9rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  border: 1px solid rgba(128, 128, 128, 0.2);
}

@media (max-width: 600px) {
  .github-section {
    padding-top: 4rem;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .gh-card {
    max-width: 100%;
  }
}

@media (min-width: 920px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: unset;
  }
  .gh-card {
    transform: scale(0.9);
    cursor: pointer;
    transition: transform 0.4s ease;
  }
  .gh-card:nth-child(2) {
    transform: scale(1.1);
  }
  
  .gh-card:hover {
    transform: scale(1.5);
    box-shadow: 0 10px 1rem 0.5rem rgb(8, 8, 8);
    z-index: 11;
    backdrop-filter: blur(5px);
  }
}
</style>
