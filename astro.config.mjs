import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    purgecss({
      fontFace: true,
      variables: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon({
      iconDir: "src/icons",
    }),
  ],

  outDir: 'build',

  build: {
    format: 'preserve',
    inlineStylesheets: 'never'
  },

  assets: {
    basePath: "/",
  },

  adapter: cloudflare()
});