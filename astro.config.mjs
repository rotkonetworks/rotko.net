import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rotko.net/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
});
