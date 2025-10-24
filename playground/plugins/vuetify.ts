import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light'
    },
    defaults: {
      VTooltip: {
        // Configuración por defecto para tooltips
        openDelay: 150,
        closeDelay: 150
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
