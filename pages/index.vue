<script setup lang="ts">
import DottedBackground from '../components/BackgroundLinesDemo.vue'

const { profile } = useProfile()
</script>

<template>
  <DottedBackground>
    <!-- REMOVED min-h-screen from main to avoid container layering clashes -->
    <main class="relative w-full">
      
      <!-- HERO / BACKGROUND SECTION -->
      <!-- Added absolute positioning so particles float behind the profile content instead of taking up separate vertical block space -->
      <TyndallEffect class="absolute inset-0 min-h-screen bg-black-to-br from-black/50 to-white/10 pointer-events-none z-10">
        <template #particles>
          <ParticlesEffect
            :density="256"
            :size="1.5"
            class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </template>
      </TyndallEffect>

      <!-- PROFILE SECTION -->
      <!-- CHANGED: Replaced 'bg-surface' with 'bg-transparent' so the dots show through. Added relative z-20 layout stack. -->
      <section class="min-h-screen text-white bg-transparent flex flex-col items-center px-4 py-16 relative z-20">
        <div class="w-full max-w-[520px] flex flex-col items-center gap-3">

          <!-- Avatar -->
          <div class="animate-fade-up animation-fill-both animation-delay-100">
            <div class="relative text-white">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
              <span class="absolute inset-0 rounded-full ring-1 ring-ink/10" />
            </div>
          </div>

          <!-- Name -->
          <div class="text-center text-white animate-fade-up animation-fill-both animation-delay-150">
            <h1 class="font-serif text-[28px] font-normal text-white tracking-tight leading-tight">
              {{ profile.name }}
            </h1>
          </div>

          <!-- Bio -->
          <p class="text-center text-white text-[15px] leading-relaxed max-w-xs animate-fade-up animation-fill-both animation-delay-200">
            {{ profile.bio }}
          </p>

          <!-- Socials -->
         <div class="flex items-center text-white gap-1 flex-wrap justify-center animate-fade-up animation-fill-both animation-delay-300"> 
  <SocialIcon 
    v-for="social in profile.socials"
    :key="social.id"
    :icon="social.icon"
    :label="social.label"
    :href="social.href"
    class="text-white fill-current" 
  />
</div>

          <!-- Divider -->
          <div class="w-full h-px bg-ink/5 animate-fade-up animation-fill-both animation-delay-350 my-1" />

          <!-- Links -->
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
          <p class="text-white text-xs mt-4 animate-fade-up animation-fill-both animation-delay-800">
            Made with ♥ · Built with Nuxt & Tailwind 
          </p>

        </div>
      </section>

    </main>
  </DottedBackground>
</template>