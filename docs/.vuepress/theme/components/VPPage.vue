<template>
  <ParentPage>
    <template #bottom>
      <div class="vp-footer-wrapper">
        <hr />
        <div class="vp-footer">
          <p class="built-with">BUILT WITH</p>
          <div class="tech-logos">
            <a href="https://www.cloudflare.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" />
            </a>
            <a href="https://nodejs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            </a>
            <a href="https://github.com/kmbzn" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>
            <a href="https://git-scm.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </a>
            <a href="https://code.visualstudio.com/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
            </a>
            <a href="https://openai.com/chatgpt" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/120px-ChatGPT-Logo.svg.png" alt="ChatGPT" />
            </a>
            <a href="https://katex.org/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/KaTeX_logo.svg/250px-KaTeX_logo.svg.png" alt="KaTeX" />
            </a>
          </div>
          <p class="copyright">
            All trademarks and logos are property of their respective owners.<br>
            © 2025 kmbzn ·
            <a href="https://github.com/kmbzn/blog/blob/master/LICENSE" target="_blank">MIT License</a><br>
          </p>
        </div>
      </div>
    </template>
  </ParentPage>
</template>

<script setup>
import ParentPage from '@vuepress/theme-default/lib/client/components/VPPage.vue'
</script>

<style scoped>
.vp-footer-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.vp-footer-wrapper hr {
  margin: 1rem 0 2rem;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

.vp-footer {
  text-align: center;
}

.built-with {
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
  letter-spacing: 0.05em;
}

.tech-logos {
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.tech-logos img {
  height: 24px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.tech-logos img:hover {
  opacity: 1;
}

.vp-footer a {
  text-decoration: none;
}

.vp-footer a:hover {
  text-decoration: underline;
}

.vp-footer .copyright {
  margin-top: 0.8rem;
  font-size: 0.7rem;
  line-height: 1.5;
}
</style>

<style>
/* 다크 모드에서 일부 로고 색 반전 */
html[data-theme='dark'] .tech-logos img[alt="GitHub"],
html[data-theme='dark'] .tech-logos img[alt="ChatGPT"],
html[data-theme='dark'] .tech-logos img[alt="KaTeX"] {
  filter: invert(100%);
}
</style>
