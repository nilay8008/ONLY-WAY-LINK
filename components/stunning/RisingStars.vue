<template>
  <div
    class="rising-stars absolute inset-0 -z-10 overflow-hidden w-screen h-screen bg-gradient-to-b from-black via-black/80 to-transparent"
  >
    <!-- Small Stars -->
    <div
      class="relative animate-risingstar [animation-duration:333s] w-px h-px"
      :style="{ boxShadow: smallStars.join(',') }"
    />

    <!-- Medium Stars -->
    <div
      class="relative animate-risingstar [animation-duration:666s] w-[2px] h-[2px]"
      :style="{ boxShadow: mediumStars.join(',') }"
    />

    <!-- Large Stars -->
    <div
      class="relative animate-risingstar [animation-duration:999s] w-[3px] h-[3px]"
      :style="{ boxShadow: largeStars.join(',') }"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ size?: number; width?: number; height?: number }>(),
  {
    size: 1024,
    width: 3840,
    height: 3840,
  }
)

const { size, width, height } = toRefs(props)

const random = (max: number) => Math.floor(Math.random() * max)

// Small stars (reactive)
const smallStars = computed(() =>
  Array.from({ length: size.value }, () => {
    return `${random(width.value)}px ${random(height.value)}px #FFF`
  })
)

// Medium stars (reactive)
const mediumStars = computed(() =>
  Array.from({ length: size.value / 2 }, () => {
    return `${random(width.value)}px ${random(height.value)}px #FFF`
  })
)

// Large stars (reactive)
const largeStars = computed(() =>
  Array.from({ length: size.value / 4 }, () => {
    return `${random(width.value)}px ${random(height.value)}px #FFF`
  })
)
</script>

<style scoped></style>