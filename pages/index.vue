<script setup lang="ts">
const { profile } = useProfile()
</script>

<template>
  <main class="min-h-screen bg-surface flex flex-col items-center px-4 py-16">
    <div class="w-full max-w-[520px] flex flex-col items-center gap-6">

      <!-- Avatar -->
      <div class="animate-fade-up animation-fill-both animation-delay-100">
        <div class="relative">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
          <!-- subtle ring decoration -->
          <span class="absolute inset-0 rounded-full ring-1 ring-ink/10" />
        </div>
      </div>
 <div>
    <BackgroundLinesDemo />
  </div>
      <!-- Name -->
      <div class="text-center animate-fade-up animation-fill-both animation-delay-150">
        <h1 class="font-serif text-[28px] font-normal text-ink tracking-tight leading-tight">
          {{ profile.name }}
        </h1>
      </div>

      <!-- Bio -->
      <p class="text-center text-ink-muted text-[15px] leading-relaxed max-w-xs animate-fade-up animation-fill-both animation-delay-200">
        {{ profile.bio }}
      </p>

      <!-- Socials row -->
      <div class="flex items-center gap-1 flex-wrap justify-center animate-fade-up animation-fill-both animation-delay-300">
        <SocialIcon
          v-for="social in profile.socials"
          :key="social.id"
          :icon="social.icon"
          :label="social.label"
          :href="social.href"
        />
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-ink/5 animate-fade-up animation-fill-both animation-delay-350" />

      <!-- Link cards -->
      <div class="w-full flex flex-col gap-3">
        <LinkCard
          v-for="(link, i) in profile.links"
          :key="link.id"
          :icon="link.icon"
          :label="link.label"
          :href="link.href"
          :delay="400 + i * 60"
        />
      </div>

      <!-- Footer -->
      <p class="text-ink-faint text-xs mt-4 animate-fade-up animation-fill-both animation-delay-800">
        Made with ♥ · Built with Nuxt & Tailwind
      </p>

    </div>
  </main>
</template>
