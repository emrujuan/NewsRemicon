import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },  
    },
    server: {
        port: 3000,
        open: true,
    },
    base: '/NewsRemicon/',
    build: {
    assetsDir: 'assets', 
    rollupOptions: {
      external: [
        '/assets/js/jquery-*', 
        '/assets/plugins/revolution/**'
      ]
    }
  }
});
