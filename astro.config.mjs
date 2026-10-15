import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dimliaro.github.io',
  server: { host: true, port: 4321 },
  devToolbar: { enabled: false },
});
