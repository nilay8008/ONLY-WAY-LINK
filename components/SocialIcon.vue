<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-surface-hover text-ink-muted hover:text-ink hover:scale-110"
  >
    <Icon :name="icon" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
  </a>
</template>
