# @tuusuario/nuxt-base-components# Nuxt Minimal Starter



Librería de componentes base reutilizables para proyectos Nuxt 3 con Vuetify.Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.



## Instalación## Setup



### Desde GitHubMake sure to install dependencies:



```bash```bash

npm install github:tuusuario/nuxt-base-components# npm

# onpm install

pnpm add github:tuusuario/nuxt-base-components

# o# pnpm

yarn add github:tuusuario/nuxt-base-componentspnpm install

```

# yarn

### Prerequisitosyarn install



Este módulo requiere las siguientes dependencias en tu proyecto:# bun

bun install

- **Nuxt** ^3.17.0 o superior```

- **Vue** ^3.3.0 o superior  

- **Vuetify** ^3.7.0 (requerido)## Development Server

- **Tailwind CSS** ^3.4.0 (opcional)

Start the development server on `http://localhost:3000`:

## Configuración

```bash

### 1. Instala Vuetify en tu proyecto Nuxt# npm

npm run dev

```bash

npm install vuetify @mdi/font# pnpm

```pnpm dev



### 2. Configura Vuetify en tu `nuxt.config.ts`# yarn

yarn dev

```typescript

export default defineNuxtConfig({# bun

  modules: [bun run dev

    '@tuusuario/nuxt-base-components'```

  ],

  css: [## Production

    'vuetify/styles',

    '@mdi/font/css/materialdesignicons.css'Build the application for production:

  ],

  build: {```bash

    transpile: ['vuetify']# npm

  }npm run build

})

```# pnpm

pnpm build

### 3. Crea un plugin de Vuetify `plugins/vuetify.ts`

# yarn

```typescriptyarn build

import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'# bun

import * as directives from 'vuetify/directives'bun run build

```

export default defineNuxtPlugin((nuxtApp) => {

  const vuetify = createVuetify({Locally preview production build:

    components,

    directives,```bash

    theme: {# npm

      themes: {npm run preview

        light: {

          colors: {# pnpm

            'secondary-400': '#your-color'pnpm preview

          }

        }# yarn

      }yarn preview

    }

  })# bun

  bun run preview

  nuxtApp.vueApp.use(vuetify)```

})

```Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Uso

Los componentes estarán disponibles globalmente sin necesidad de importarlos:

```vue
<template>
  <BaseButton label="Click me" />
  
  <BaseButton spanClass="font-bold text-lg">
    Custom content
  </BaseButton>
</template>
```

## Componentes Disponibles

### BaseButton

Botón basado en `v-btn` de Vuetify.

**Props:**
- `label` (string, opcional): Texto del botón
- `spanClass` (string, opcional): Clases CSS para el texto

**Slots:**
- `default`: Contenido personalizado del botón

## Desarrollo

### Setup del playground

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build del módulo
npm run prepare
```

## Licencia

MIT
