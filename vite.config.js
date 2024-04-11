import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/pov_3d_viewer.js",
      name: "pov-3d",
      fileName: "pov-3d",
      formats: ["es", "cjs"],
    },
    outDir: "build",
    rollupOptions: {
      input: {
        viewer: "src/pov_3d_viewer.js",
      },
    },
  },
  optimizeDeps: { exclude: ["fsevents"] },
  server: {
    // open: "/examples/index.html",
    open: "index.html",
  },
});
