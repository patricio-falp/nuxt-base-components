<script setup lang="ts">
const textInput = ref("");

const itemsBaseSelectLibrary = ref(["option1", "option2", "option3"]);
</script>
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
            >src/components</code
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
              <th class="text-center text-[16px]">Componentes renderizado</th>
              <th class="text-left text-[16px]">Props disponibles</th>
            </tr>
          </thead>
          <tbody>
            <!-- BaseButton -->
            <tr>
              <td class="text-[16px] text-orange-400">BaseButtonLibrary</td>
              <td class="pa-4 text-center">
                <BaseButtonLibrary color="#993379" label="Botón con label" />
              </td>
              <td>
                <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
                  >{ label?: string; spanClass?: string; color?: string; }</code
                >
              </td>
            </tr>
            <!-- BaseCardLibrary -->
            <tr>
              <td class="text-[16px] text-orange-400">BaseCardLibrary</td>
              <td class="pa-4 text-center">
                <BaseCardLibrary class="pa-3">Test de BaseCard</BaseCardLibrary>
              </td>
              <td>sin datos</td>
            </tr>
            <!-- BaseChipLibrary -->
            <tr>
              <td class="text-[16px] text-orange-400">BaseChipLibrary</td>
              <td class="pa-4 text-center">
                <BaseChipLibrary>Test de BaseChip</BaseChipLibrary>
              </td>
              <td>< Slot ></td>
            </tr>
            <!-- BaseInputTextLibrary -->
            <tr>
              <td class="text-[16px] text-orange-400">BaseInputTextLibrary</td>
              <td class="pa-4">
                <BaseInputTextLibrary
                  v-model="textInput"
                  label="Nombre"
                  rounded="lg"
                  placeholder="Ingresa tu nombre"
                />
                <span class="mt-n2">Salida: {{ textInput }}</span>
              </td>
              <td>
                <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
                  >{ label?: string; placeholder?: string; }</code
                >
              </td>
            </tr>
            <!-- BaseSelectLibrary -->
            <tr>
              <td class="text-[16px] text-orange-400">BaseSelectLibrary</td>
              <td class="pa-4">
                <BaseSelectLibrary
                  label="Selecciona una opción"
                  :items="itemsBaseSelectLibrary"
                />
              </td>
              <td>
                <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
                  >{ <br />label?: string; <br />
                  items?: Array<{ text: string; value: string; }> <br />}</code
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </main>
</template>
