import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/runtime/components/**/*.{vue,js,ts}',
    './playground/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        'secondary-400': '#6366f1'
      }
    }
  }
} satisfies Config
