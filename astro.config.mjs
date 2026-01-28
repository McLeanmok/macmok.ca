import purgecss from 'astro-purgecss';

import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

export default defineConfig({
  // Add purgecss support to Astro
  integrations: [purgecss({
    fontFace: true,
   variables: true,
  }), partytown({
    config: {
              forward: ["dataLayer.push"],
            },
  })],
  outDir: 'build',
  build: {
    format: 'preserve',
    inlineStylesheets: 'never'
  },
  assets: {
    basePath: "/",
  }
});