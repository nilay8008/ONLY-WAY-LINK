<template>
  <div class="fixed top-6 right-6 z-50 flex items-center gap-2 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
    <select 
      v-model="selectedZone" 
      @change="updateTime"
      class="bg-transparent border-none outline-none cursor-pointer font-sans font-semibold text-neutral-800 dark:text-neutral-200"
    >
      <option v-for="zone in timezones" :key="zone.value" :value="zone.value" class="bg-white dark:bg-neutral-900 text-black dark:text-white">
        {{ zone.name }}
      </option>
    </select>
    <span class="opacity-40 text-neutral-400">|</span>
    <span class="text-neutral-900 dark:text-red-400 font-bold min-w-[75px] text-right transition-colors">{{ currentTime }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const selectedZone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone)
const currentTime = ref('')
let timer: any = null

const timezones = [
  { name: 'Local Time', value: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { name: 'London (GMT)', value: 'Europe/London' },
  { name: 'New York (EST)', value: 'America/New_York' },
  { name: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { name: 'Dubai (GST)', value: 'Asia/Dubai' }
]

const updateTime = () => {
  try {
    currentTime.value = new Intl.DateTimeFormat('en-US', {
      timeZone: selectedZone.value,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(new Date())
  } catch (e) {
    currentTime.value = new Date().toLocaleTimeString()
  }
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>