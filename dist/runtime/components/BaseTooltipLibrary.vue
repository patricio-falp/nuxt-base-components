<script setup>
const props = defineProps({
  text: { type: String, required: true },
  maxWidth: { type: String, required: false, default: "200" }
});
</script>

<template>
  <v-tooltip
    activator="parent"
    location="top"
    :max-width="props.maxWidth"
    :text="props.text"
  />
</template>
