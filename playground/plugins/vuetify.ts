import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Configura Vuetify para el playground, incluyendo un color secundario
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          'secondary-400': '#6366f1'
        }
      }
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify)
})
