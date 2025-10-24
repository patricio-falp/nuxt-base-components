// [Imports]
import { defineNuxtModule, addComponentsDir, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  // Module meta information
  meta: {
    name: "nuxt-base-components",
    version: "0.0.4",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Module setup function
  // Add components directory to Nuxt
  setup() {
    const { resolve } = createResolver(import.meta.url);
    addComponentsDir({
      path: resolve("./runtime/components"),
      pathPrefix: false,
    });
  },
});
