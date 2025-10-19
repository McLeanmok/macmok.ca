import purgecss from 'astro-purgecss';

import { defineConfig } from 'astro/config';

export default defineConfig({
  // Add purgecss support to Astro
  integrations: [
    purgecss({
      fontFace: true,
     variables: true,
    }),
    
  ],
  outDir: 'build',
  build: {
    format: 'preserve',
    inlineStylesheets: 'never'
  },
  assets: {
    basePath: "/",
  }
});