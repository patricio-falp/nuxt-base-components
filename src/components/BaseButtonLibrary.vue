<script setup lang="ts">
// [Options]
defineOptions({
  inheritAttrs: true,
});

// [Props]
interface IProps {
  label?: string;
  spanClass?: string;
  color?: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <v-btn :color="props.color" elevation="0" rounded="lg" class="text-none">
    <span v-if="props.label || props.spanClass" :class="props.spanClass">
      {{ props.label }}
    </span>
    <slot />
  </v-btn>
</template>
