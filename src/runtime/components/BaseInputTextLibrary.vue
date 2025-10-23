<script setup lang="ts">
// [Props]
interface IProps {
  label?: string;
  placeholder?: string;
}
const { label = '', placeholder = '' } = defineProps<IProps>();
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
