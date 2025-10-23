<script setup>
const props = defineProps({
  label: { type: String, required: false, default: "" }
});
const model = defineModel({ type: null });
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
