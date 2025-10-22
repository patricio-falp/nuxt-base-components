import { defineNuxtModule, addComponentsDir, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-base-components",
    configKey: "baseComponents",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({
      path: resolve("./components"),
      pathPrefix: false,
    });
  },
});
