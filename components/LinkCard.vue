<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  href: string
  delay?: number
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-surface-card border border-transparent
           transition-all duration-200 ease-out
           hover:bg-surface-hover hover:border-ink/5 hover:shadow-sm hover:-translate-y-0.5
           animate-fade-up animation-fill-both"
    :style="delay ? `animation-delay: ${delay}ms` : ''"
  >
    <!-- Icon wrapper -->
    <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm border border-ink/5 text-ink-muted group-hover:text-accent group-hover:border-accent/20 transition-colors duration-200 flex-shrink-0">
      <Icon :name="icon" class="w-5 h-5" />
    </span>

    <!-- Label -->
    <span class="font-medium text-[15px] text-ink tracking-[-0.01em] group-hover:text-ink transition-colors duration-200">
      {{ label }}
    </span>

    <!-- Arrow -->
    <span class="ml-auto text-ink-faint group-hover:text-ink-muted group-hover:translate-x-0.5 transition-all duration-200">
      <Icon name="uil:angle-right" class="w-4 h-4" />
    </span>
  </a>
</template>
