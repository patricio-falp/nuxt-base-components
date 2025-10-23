<script setup>
const { label = "", placeholder = "" } = defineProps({
  label: { type: String, required: false },
  placeholder: { type: String, required: false }
});
</script>

<template>
  <v-text-field
    variant="outlined"
    density="comfortable"
    base-color="text-400"
    :label="label"
    :placeholder="placeholder"
    type="text"
  />
</template>
