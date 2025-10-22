# nuxt-base-components

Librería de componentes base reutilizables para proyectos Nuxt 3. Está pensada para convivir con Vuetify y Tailwind CSS.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0` (recomendado).

- Nuxt `^3.17.0` en los proyectos consumidores.

- Vuetify `^3.7.0` como dependencia obligatoria.## Instalación## Setup

- Tailwind CSS `^3.4.0` como dependencia opcional.

Revisa la documentación de [Nuxt](https://nuxt.com/docs/getting-started/introduction) para aprender más.

## Instalación de la librería en un proyecto Nuxt

### Desde GitHub

Asegúrate de instalar las dependencias:

```bash
npm install github:patricio-falp/nuxt-base-components
```

Asegúrate de tener instaladas las peerDependencies (Vue, Vuetify y, si lo necesitas, Tailwind CSS).

## Uso rápido

## Flujo de trabajo en este repositorio

- **Importante:** al instalar desde GitHub, los consumidores no ejecutan el build; por eso `dist/` debe incluirse en cada commit.

- Verifica que los cambios en `src/` y `dist/` estén agregados antes de `git push`.

## Estructura

- `src/module.ts`: módulo Nuxt que registra los componentes.

- `src/runtime/components/`: componentes expuestos por la librería. components,

- `playground/`: proyecto Nuxt de pruebas con Vuetify y Tailwind configurados.

- `dist/`: salida compilada (se genera con `npm run build` y debe versionarse). directives,```bash

- `tailwind.config.ts`: configuración compartida de Tailwind.

## Setup

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (Playground)
npm run dev

# Build del módulo para publicar los cambios o componentes agregados
npm run build
```