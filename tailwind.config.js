/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#f8f8f6',
          card: '#f0f0ec',
          hover: '#e8e8e4',
        },
        ink: {
          DEFAULT: '#1a1a18',
          muted: '#6b6b64',
          faint: '#a8a89e',
        },
        accent: {
          DEFAULT: '#2d5a3d',
          light: '#e8f0eb',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'scale-in': 'scaleIn 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
