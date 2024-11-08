// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://zer0m4n.github.io',
  base: '/portfolio-dev/',
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'en',
  },
});
