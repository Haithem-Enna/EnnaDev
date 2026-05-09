import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/EnnaDev/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // Questa riga è fondamentale: dice a Vite che "@" significa "cartella principale"
        '@': path.resolve(__dirname, '.'),
      },
      // AGGIUNGI QUESTA PARTE:
      extensions: ['.js', '.jsx', '.json'] 
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      host: true, // Permette all'iPad di mostrare il sito sulla rete locale
    },
  };
});
