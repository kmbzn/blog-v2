<template>
  <div v-if="git.createdTime || git.updatedTime" class="vp-date-meta">
    <span v-if="git.createdTime">작성 {{ formatDate(git.createdTime) }}</span>
    <span v-if="git.createdTime && git.updatedTime" class="vp-date-sep">·</span>
    <span v-if="git.updatedTime">수정 {{ formatDate(git.updatedTime) }}</span>
  </div>
</template>

<script setup>
import { usePageData } from 'vuepress/client'
import { computed } from 'vue'

const page = usePageData()
const git = computed(() => page.value.git ?? {})

function formatDate(timestamp) {
  const d = new Date(timestamp)
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`
}
</script>

<style>
.vp-date-meta {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  align-items: center;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
}

.vp-date-sep {
  opacity: 0.5;
}
</style>
