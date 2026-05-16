<template>
  <div class="dotted-background">
    <!-- This slot acts as a placeholder for your index page content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
// Pure CSS background component
</script>

<style scoped>
.dotted-background {
  background-color:rgb(0, 0, 0);
  
  /* Create the dot pattern */
  background-image: radial-gradient(hsla(0, 100.00%, 47.50%, 0.88) 1px, transparent 1px);
  background-size: 24px 24px;
  
  width: 100%;
  min-height: 1vh; 
  margin: 0;
  padding: 0;
}
</style>
