import { defineConfig } from 'astro/config';

// Замени 'portfolio' на имя твоего репозитория на GitHub
// Если репозиторий называется triador.github.io — убери base полностью
export default defineConfig({
  site: 'https://triador.github.io',
  base: '/portfolio',
  output: 'static',
});
