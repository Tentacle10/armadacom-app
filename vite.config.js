import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 1007,
  },
  preview: {
    port: 1007,
  }
});
