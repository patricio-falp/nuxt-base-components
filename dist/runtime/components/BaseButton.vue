<script setup>
defineOptions({
  inheritAttrs: true
});
const props = defineProps({
  label: { type: String, required: false },
  spanClass: { type: String, required: false },
  color: { type: String, required: false }
});
</script>

<template>
  <v-btn :color="props.color" elevation="0" rounded="lg" class="text-none">
    <span v-if="props.label || props.spanClass" :class="props.spanClass">
      {{ props.label }}
    </span>
    <slot />
  </v-btn>
</template>
