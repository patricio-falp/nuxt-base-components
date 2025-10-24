<script lang="ts" setup>
// [Imports]
// - Interface
import type { IBaseListItems } from "../interfaces/common.interfaces";
import BaseTooltipLibrary from "./BaseTooltipLibrary.vue";

// [Props]
interface IProps {
  items: IBaseListItems[];
  divider?: boolean;
  activeClass?: string;
  tooltip?: boolean;
}
const props = defineProps<IProps>();

// [Model]
// Saves the active section or null if there is none
const openSection = ref<string[]>([]);
const itemSelected = defineModel<IBaseListItems | null>("itemSelected");

// [Method]
// Saves the opened section on click
function handleSectionClick(section: IBaseListItems): void {
  itemSelected.value = itemSelected.value === section ? null : section;
}
</script>

<template>
  <v-list v-model:opened="openSection" open-strategy="single" dense>
    <div v-for="(section, index) in props.items" :key="section.id">
      <!-- Item without subItems -->
      <v-list-item
        v-if="!section.items"
        :prepend-icon="section.icon"
        :to="section.path"
        :active-class="props.activeClass"
        @click="handleSectionClick(section)"
      >
        <v-list-item-title>
          <span class="text-[15px]">{{ section.title }}</span>
        </v-list-item-title>
        <BaseTooltipLibrary
          v-if="tooltip"
          :text="section.title"
          location="end"
        />
      </v-list-item>
      <!-- Item with subItems -->
      <v-list-group v-else>
        <template #activator="{ props: activatorProp }">
          <v-list-item
            v-bind="activatorProp"
            :prepend-icon="section.icon"
            :active-class="props.activeClass"
          >
            <v-list-item-title>
              <span class="text-size">{{ section.title }}</span>
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="subsection in section.items"
          :key="subsection.id"
          :prepend-icon="subsection.icon"
          :to="subsection.path"
          :active-class="props.activeClass"
          @click="handleSectionClick(subsection)"
        >
          <span class="text-[14px] font-medium">{{ subsection.title }}</span>
        </v-list-item>
      </v-list-group>
      <v-divider
        v-if="props.divider && index !== props.items.length - 1"
        class="mx-auto border-opacity-100 w-[90%]"
      />
    </div>
  </v-list>
</template>
