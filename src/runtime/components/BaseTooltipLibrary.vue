<script lang="ts" setup>
// [Props]
interface IProps {
  text: string;
  maxWidth?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  maxWidth: '200',
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
