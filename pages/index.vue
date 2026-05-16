<script setup lang="ts">
import { ref } from 'vue'
import DottedBackground from '../components/BackgroundLinesDemo.vue'

const { profile } = useProfile()

// Reactive state for theme tracking (defaults to dark mode as per your current setup)
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <!-- Pass the dark state down to the background component -->
  <DottedBackground :isDark="isDark">
    <main class="relative w-full">
      
      <!-- TOP LEFT DARK MODE BUTTON -->
    <!-- FIXED THEME TOGGLE BUTTON -->
<div class="absolute top-4 right-4 z-50">
  <button
    @click="toggleTheme"
    aria-label="Toggle theme"
    :class="[
      'relative w-16 h-8 rounded-full border-2 p-0.5 transition-colors duration-300 focus:outline-none select-none',
      isDark 
        ? 'bg-[#0f1d2a] border-[#0f1d2a]' 
        : 'bg-white border-[#0f1d2a]'
    ]"
  >
    <div class="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
      <svg 
        class="w-4 h-4 text-yellow-400 transition-opacity duration-200"
        :class="isDark ? 'opacity-40' : 'opacity-100'"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>

      <svg 
        class="w-4 h-4 text-yellow-400 transition-opacity duration-200"
        :class="isDark ? 'opacity-100' : 'opacity-0'"
        viewBox="0 0 24 24" fill="currentColor"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    </div>

    <div
      :class="[
        'w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out shadow-sm',
        isDark 
          ? 'translate-x-8 bg-transparent' 
          : 'translate-x-0 bg-[#0f1d2a]'
      ]"
    />
  </button>
</div>
      <!-- HERO / BACKGROUND SECTION -->
      <!-- Modified background gradient class dynamically to match light/dark moods -->
      <TyndallEffect 
        class="absolute inset-0 min-h-screen pointer-events-none z-10 transition-colors duration-300"
        :class="isDark ? 'bg-black-to-br from-black/50 to-white/10' : 'bg-gradient-to-br from-white/50 to-black/5'"
      >
        <template #particles>
          <ParticlesEffect
            :density="256"
            :size="1.5"
            class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </template>
      </TyndallEffect>

      <!-- PROFILE SECTION -->
      <!-- CHANGED: Swapped hardcoded 'text-white' for dynamic color bindings based on theme -->
      <section 
        class="min-h-screen bg-transparent flex flex-col items-center px-4 py-16 relative z-20 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-black'"
      >
        <div class="w-full max-w-[520px] flex flex-col items-center gap-3">

          <!-- Avatar -->
          <div class="animate-fade-up animation-fill-both animation-delay-100">
            <div class="relative">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-24 h-24 rounded-full object-cover ring-4 shadow-lg transition-all"
                :class="isDark ? 'ring-white' : 'ring-black'"
              />
              <span class="absolute inset-0 rounded-full ring-1 ring-ink/10" />
            </div>
          </div>

          <!-- Name -->
          <div class="text-center animate-fade-up animation-fill-both animation-delay-150">
            <h1 class="font-serif text-[28px] font-normal tracking-tight leading-tight">
              {{ profile.name }}
            </h1>
          </div>

          <!-- Bio -->
          <p class="text-center text-[15px] leading-relaxed max-w-xs animate-fade-up animation-fill-both animation-delay-200">
            {{ profile.bio }}
          </p>

          <!-- Socials -->
          <div class="flex items-center gap-1 flex-wrap justify-center animate-fade-up animation-fill-both animation-delay-300"> 
            <SocialIcon 
              v-for="social in profile.socials"
              :key="social.id"
              :icon="social.icon"
              :label="social.label"
              :href="social.href"
              class="fill-current transition-colors duration-300" 
              :class="isDark ? 'text-white' : 'text-black'"
            />
          </div>

          <!-- Divider -->
          <div 
            class="w-full h-px animate-fade-up animation-fill-both animation-delay-350 my-1 transition-colors duration-300" 
            :class="isDark ? 'bg-white/10' : 'bg-black/10'"
          />

          <!-- Links -->
          <!-- Note: Make sure LinkCard internally accepts a theme state or uses tailwind 'fill-current' / 'text-current' so it inherits color changes seamlessly -->
          <div class="w-full flex flex-col gap-3">
            <LinkCard
              v-for="(link, i) in profile.links"
              :key="link.id"
              :icon="link.icon"
              :label="link.label"
              :href="link.href"
              :delay="400 + i * 60"
              :class="isDark ? 'text-white border-white/20' : 'text-black border-black/20'"
            />
          </div>

          <!-- Footer -->
          <p class="text-xs mt-4 animate-fade-up animation-fill-both animation-delay-800 opacity-80">
            Made with ♥ · Built with Nuxt & Tailwind 
          </p>

        </div>
      </section>

    </main>
  </DottedBackground>
</template>