import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-vendor': ['@material-tailwind/react'],
          'charts': ['apexcharts', 'react-apexcharts']
        }
      }
    },
    chunkSizeWarningLimit: 700 // Increase limit to 700kb for UI libraries
  }
});
