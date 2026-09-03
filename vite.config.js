import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/ball-playground-game/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
