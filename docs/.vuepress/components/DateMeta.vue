<template>
  <div v-if="git.createdTime || git.updatedTime" class="vp-date-meta">
    <button class="vp-copy-link" @click="copyLink" :title="copied ? '복사됨!' : '링크 복사'">
      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      <span v-else class="vp-copy-check">✓</span>
    </button>
    <span class="vp-date-sep-spacer" />
    <span v-if="git.createdTime">작성 {{ formatDate(git.createdTime) }}</span>
    <span v-if="git.createdTime && git.updatedTime" class="vp-date-sep">·</span>
    <span v-if="git.updatedTime">수정 {{ formatDate(git.updatedTime) }}</span>
  </div>
</template>

<script setup>
import { usePageData } from 'vuepress/client'
import { computed, ref } from 'vue'

const page = usePageData()
const git = computed(() => page.value.git ?? {})
const copied = ref(false)

function formatDate(timestamp) {
  const d = new Date(timestamp)
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  })
}
</script>

<style>
.vp-date-meta {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  opacity: 0.6;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  align-items: center;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.vp-date-sep {
  opacity: 0.5;
}

.vp-date-sep-spacer {
  flex: 1;
}

.vp-copy-link {
  background: none;
  border: none;
  padding: 0.15rem 0.3rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: opacity 0.15s;
  line-height: 1;
}

.vp-copy-link:hover {
  opacity: 1.5;
}

.vp-copy-check {
  font-size: 0.75rem;
}
</style>
