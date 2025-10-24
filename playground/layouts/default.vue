<script setup lang="ts">
// [Reactive]
const loadApp = ref(false);

// [Lifecycle]
onNuxtReady(async () => {
  // Executes after the application has finished initializing
  // Load the application
  loadApp.value = true;
});
</script>

<template>
  <v-app>
    <div v-show="loadApp">
      <Header order="1" />
      <Sidebar order="2" />
      <v-main class="ma-10">
        <slot />
      </v-main>
    </div>
  </v-app>
</template>
