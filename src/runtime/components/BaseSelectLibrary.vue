<script setup lang="ts">
// [Imports]
// - Interface
interface ISelectMapping {
  label: string;
  value: any;
}
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
