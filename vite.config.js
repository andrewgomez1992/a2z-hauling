import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure hot reloading works for assets
    open: true,
  },
  build: {
    rollupOptions: {
      // Explicitly include the index.html as the main entry point
      input: {
        main: "./index.html",
      },
    },
  },
});
