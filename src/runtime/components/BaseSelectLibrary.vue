<script setup lang="ts">
// [Imports]
import type { ISelectMapping } from "../interfaces/common.interfaces";

// [Props]
interface IProps {
  label?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  label: "",
});

// [Reactive State]
const model = defineModel<
  string | null | undefined | object | ISelectMapping
>();
</script>

<template>
  <v-select
    v-model="model"
    base-color="text-400"
    variant="outlined"
    density="comfortable"
    :label="props.label"
  />
</template>
