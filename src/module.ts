import { defineNuxtModule, addComponentsDir, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-base-components",
    version: "0.0.1",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);
    addComponentsDir({
      path: resolve("./runtime/components"),
      pathPrefix: false,
    });
  },
});
