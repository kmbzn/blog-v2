<template>
  <ClientOnly>
    <div
      class="applause-wrap"
      :class="{ 'applause-used': hasLiked }"
      @click="onFirstClick"
    >
      <applause-button :key="url" :url="url" style="width: 52px; height: 52px;" />
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({ url: String })
const hasLiked = ref(false)

function storageKey() { return `liked:${props.url}` }

function checkLiked() {
  hasLiked.value = !!localStorage.getItem(storageKey())
}

onMounted(checkLiked)
watch(() => props.url, checkLiked)

function onFirstClick() {
  if (!hasLiked.value) {
    hasLiked.value = true
    localStorage.setItem(storageKey(), '1')
  }
}
</script>

<style scoped>
.applause-used {
  pointer-events: none;
  opacity: 0.5;
}
</style>
