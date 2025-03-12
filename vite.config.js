import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      external: [
        'yup', 
        'react-toastify', 
        '@emailjs/browser' // Updated from 'emailjs-com' to '@emailjs/browser'
      ]
    }
  }
});
