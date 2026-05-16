<template>
  <!-- Dynamically bind the light-mode class if isDark is false -->
  <div class="dotted-background" :class="{ 'light-mode': !isDark }">
    <!-- This slot acts as a placeholder for your index page content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()
</script>

<style scoped>
.dotted-background {
  background-color: rgb(0, 0, 0);
  
  /* Create the dot pattern */
  background-image: radial-gradient(hsla(0, 100.00%, 47.50%, 0.88) 1px, transparent 1px);
  background-size: 24px 24px;
  
  width: 100%;
  min-height: 100vh; /* Changed from 1vh to 100vh to ensure it covers the full viewport */
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease; /* Smooth transition when switching */
}

/* Light mode overrides */
.dotted-background.light-mode {
  background-color: rgb(255, 255, 255);
}
</style>