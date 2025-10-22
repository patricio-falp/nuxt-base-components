<script lang="ts" setup>
// [Options]
defineOptions({
  inheritAttrs: true,
});
</script>

<template>
  <v-card v-bind="$attrs">
    <slot />
  </v-card>
</template>