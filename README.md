# nuxt-base-components

Librería de componentes base reutilizables para proyectos Nuxt 3. Está pensada para convivir con Vuetify y Tailwind CSS.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0` (recomendado).

- Nuxt `^3.17.0` en los proyectos consumidores.

- Vuetify `^3.7.0` como dependencia obligatoria.

- Tailwind CSS `^3.4.0` como dependencia obligatoria.

Revisa la documentación de [Nuxt](https://nuxt.com/docs/getting-started/introduction) para aprender más.

## Recursos utilizados

- Para la contrucción y compilación de los modulos: [build-module](https://nuxt.com/docs/3.x/api/commands/build-module)
- Conjunto de utilidades para la creación de módulos Nuxt: [Kit Nuxt](https://nuxt.com/docs/3.x/api/kit/modules)

## Instalación de la librería en un proyecto Nuxt

### Desde GitHub

Asegúrate de instalar las dependencias:

```bash
npm install github:patricio-falp/nuxt-base-components
```
o si prefieres una versión específica:

```bash
npm install github:patricio-falp/nuxt-base-components#v1.0.0
```

Asegúrate de tener instaladas las peerDependencies (Vue, Vuetify y, si lo necesitas, Tailwind CSS).

Luego, agrega el módulo en `nuxt.config.ts`:

```bash
  modules: [
    'nuxt-base-components',
  ],
```

### Uso rápido

Como ya esta disponible en el proyecto, puedes usar los componentes directamente en tus vistas o componentes Nuxt.

Por ejemplo, para usar el componente `BaseButtonLibrary`:

```vue
<template>
  <BaseButtonLibrary color="#993379" label="Botón con label" />
</template>
```

**Nota:** Si quieres visualizar los componentes disponibles, puedes ejecutar el proyecto de pruebas (playground) siguiendo las instrucciones en la sección de Setup más abajo.

## Flujo de trabajo en este repositorio

- **Importante:** al instalar desde GitHub, los consumidores no ejecutan el build; por eso `dist/` debe incluirse en cada commit.

- Verifica que los cambios en `src/` y `dist/` estén agregados antes de `git push`.

### Proceso de publicación de una nueva versión:
Cada vez que se publique una nueva versión, sigue este flujo:
```bash
    # Construir el módulo
    npm run build

    # Agregar cambios
    git add .

    # Crear commit
    git commit -m "Release vX.Y.Z"

    # Publicar cambios
    git push origin main

    # Crear tag y publicarlo
    git tag vX.Y.Z
    git push origin vX.Y.Z

    # Crear release en GitHub con el tag creado    

    # Instalar en el proyecto con la nueva versión
    npm install github:patricio-falp/nuxt-base-components#vX.Y.Z
```
## Estructura

Elementos principales del repositorio:

- `src/module.ts`: módulo Nuxt que registra los componentes.

- `src/runtime/components/`: componentes expuestos por la librería para ser usados.

- `playground/`: proyecto Nuxt para probar los componentes de la librería con Vuetify y Tailwind configurados.

- `dist/`: salida compilada (se genera con `npm run build`).

## Setup

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (Playground)
npm run dev

# Build del módulo para publicar los cambios o componentes agregados
npm run build
```
