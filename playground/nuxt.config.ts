import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-10-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css", "vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // scan nested modules
      "composables/*/**/*.ts",
    ],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "../src/module",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
