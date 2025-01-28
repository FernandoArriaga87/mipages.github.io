// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://fernandoarriaga87.github.io/mipages.github.io/",
  base: '/mipages.github.io/',
  integrations: [tailwind()]
});