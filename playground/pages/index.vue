<script setup lang="ts">
const textInput = ref("");

const itemsBaseSelectLibrary = ref(["option1", "option2", "option3"]);

const itemsBaseListLibrary = ref([
  {
    id: "1",
    title: "Inicio",
    icon: "mdi-home",
    items: [
      {
        id: "1-1",
        title: "Subinicio 1",
        icon: "subdirectory_arrow_right",
      },
      {
        id: "1-2",
        title: "Subinicio 2",
        icon: "subdirectory_arrow_right",
      },
    ],
  },
  {
    id: "2",
    title: "Perfil",
    icon: "user",
  },
  {
    id: "3",
    title: "Configuración",
    icon: "settings",
  },
]);
</script>
<template>
  <div>
    <div class="text-center space-y-6">
      <p class="text-slate-600 leading-7">
        Los componentes en
        <code class="bg-gray-200 text-orange-600 px-3 py-1 rounded"
          >src/runtime/components</code
        >
        se registran como globales. Usa este playground para validar estilos y
        comportamiento antes de publicarlos.
      </p>
    </div>
    <div class="rounded-lg mt-10 p-6">
      <v-table hover>
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
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full text-center">
                <BaseButtonLibrary color="#993379" label="Botón con label" />
              </div>
            </td>
            <td>
              <pre
                class="bg-[#F5F5F5] text-orange-600 rounded-lg py-2 ma-2 px-3"
              >
                    <span class="font-semibold text-[15px]">
                    { 
                        label?: string; 
                        spanClass?: string; 
                        color?: string; 
                    }
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseCardLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseCardLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full">
                <BaseCardLibrary class="pa-3">Test de BaseCard</BaseCardLibrary>
              </div>
            </td>
            <td>
              <pre
                class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2 h-[65px]"
              >
                    <span class="font-semibold text-[15px]">
                    < slot />
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseChipLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseChipLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full text-center">
                <BaseChipLibrary>Test de BaseChip</BaseChipLibrary>
              </div>
            </td>
            <td>
              <pre
                class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2 h-[65px]"
              >
                    <span class="font-semibold text-[15px]">
                    < slot />
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseInputTextLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseInputTextLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full">
                <BaseInputTextLibrary
                  v-model="textInput"
                  label="Nombre"
                  bg-color="white"
                  rounded="lg"
                  placeholder="Ingresa tu nombre"
                />
                <span class="mt-n2">Salida: {{ textInput }}</span>
              </div>
            </td>
            <td>
              <pre class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2">
                    <span class="font-semibold text-[15px]">
                    { 
                        label?: string; 
                        placeholder?: string; 
                    }
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseSelectLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseSelectLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full">
                <BaseSelectLibrary
                  label="Selecciona una opción"
                  bg-color="white"
                  :items="itemsBaseSelectLibrary"
                />
              </div>
            </td>
            <td>
              <pre class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2">
                    <span class="font-semibold text-[15px]">
                    { 
                        label?: string;
                        items?: Array<{ text: string; value: string; } 
                    }
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseListLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseListLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full">
                <BaseListLibrary :items="itemsBaseListLibrary" class="w-[300px]"/>
              </div>
            </td>
            <td>
              <pre class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2">
                    <span class="font-semibold text-[15px]">
                    {  
                        items: IBaseListItems[];
                        divider?: boolean;
                        activeClass?: string;
                        tooltip?: boolean;
                    }
                    </span>
                </pre>
            </td>
          </tr>
          <!-- BaseTooltipLibrary -->
          <tr>
            <td class="text-[16px] text-orange-400">BaseTooltipLibrary</td>
            <td>
              <div class="bg-[#F5F5F5] pa-6 rounded-lg w-full">
                Mueve el cursor sobre mí <v-icon>mdi-cursor-default</v-icon>
                <BaseTooltipLibrary text="Este es un tooltip" />
              </div>
            </td>
            <td>
              <pre class="bg-[#F5F5F5] text-orange-600 rounded-lg ma-2">
                    <span class="font-semibold text-[15px]">
                    {
                        text: string;
                        maxWidth?: string;
                    }
                    </span>
                </pre>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>
