export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "../src/module"],
  compatibilityDate: "2024-10-01",
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "vuetify/styles",
  ],
  build: {
    transpile: ["vuetify"]
  }
});
