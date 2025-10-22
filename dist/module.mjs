import { createJiti } from "file:///Users/mac/Desktop/FALP/nuxt-base-components/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "nuxt-base-components": "/Users/mac/Desktop/FALP/nuxt-base-components"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/Users/mac/Desktop/FALP/nuxt-base-components/src/module.js")} */
const _module = await jiti.import("/Users/mac/Desktop/FALP/nuxt-base-components/src/module.ts");

export default _module?.default ?? _module;