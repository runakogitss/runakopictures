import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 800,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        japantravel: 'public/japantravel.html',
        kotalama: 'public/kotalama.html',
        schoollife: 'public/schoollife.html',
        studiocology: 'public/studiocology-gallery.html'
      }
    }
  },
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
