import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://triador.github.io',
  base: '/portfolio',
  output: 'static',
  devToolbar: { enabled: false },
});
