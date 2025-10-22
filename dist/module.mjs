import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "nuxt-base-components",
    configKey: "baseComponents"
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);
    addComponentsDir({
      path: resolve("./runtime/components"),
      pathPrefix: false
    });
  }
});

export { module as default };
