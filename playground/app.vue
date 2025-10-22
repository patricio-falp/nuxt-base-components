<template>
  <main
    class="min-h-screen bg-slate-100 flex flex-col items-center gap-10 py-16 px-6"
  >
    <div class="w-[50%]">
      <div class="text-center space-y-6">
        <h1 class="text-4xl font-semibold">nuxt-base-components</h1>
        <p class="text-slate-600 leading-7">
          Los componentes en
          <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
            >src/runtime/components</code
          >
          se registran como globales. Usa este playground para validar estilos y
          comportamiento antes de publicarlos.
        </p>
      </div>
      <div class="rounded-lg mt-10">
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-[16px]">Nombre componente</th>
              <th class="text-left text-[16px]">Componentes renderizado</th>
              <th class="text-left text-[16px]">Props disponibles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-[16px] text-orange-400">BaseButton</td>
              <td><BaseButton color="#993379" label="Botón con label" /></td>
              <td>
                <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
                  >{ label?: string; spanClass?: string; color?: string; }</code
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </main>
</template>
