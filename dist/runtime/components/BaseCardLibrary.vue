<script setup>
defineOptions({
  inheritAttrs: true
});
</script>

<template>
  <v-card v-bind="$attrs">
    <slot />
  </v-card>
</template>
