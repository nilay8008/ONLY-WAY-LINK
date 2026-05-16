<template>
  <div class="relative w-full overflow-hidden" :class="className">
    <!-- Animated background lines -->
    <div class="absolute inset-0 z-0">
      <div class="lines"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.lines {
  width: 200%;
  height: 200%;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
  animation: moveLines 20s linear infinite;
}

/* Dark mode */
:global(.dark) .lines {
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    );
}

@keyframes moveLines {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-40px, -40px);
  }
}
</style>