<script lang="ts" setup>
// [Composable]
const { items } = useSideBar();

// [Reactive]
const drawer = ref<boolean>(true);

// [Reactive state]
const opened = ref([]);
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="false"
    theme="light"
    permanent
    elevation="1"
  >
    <!-- Item list -->
    <BaseListLibrary
      v-model="opened"
      :items="items"
      active-class="bg-primary-500 opacity-100"
      class="mt-n2"
    />
  </v-navigation-drawer>
</template>
