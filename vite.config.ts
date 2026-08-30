import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos: funciona tanto em subpasta (GitHub Pages)
  // quanto na raiz de um domínio (Vercel, Netlify).
  base: "./",
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
});
