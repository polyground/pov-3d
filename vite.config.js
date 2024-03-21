import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/viewer.js",
      name: "pov-3d",
      fileName: "viewer",
      formats: ["es", "umd", "cjs"],
    },
    outDir: "examples/viewer_example_in_html/build",
    rollupOptions: {
      input: {
        viewer: "src/viewer.js",
      },
    },
  },
  server: {
    open: "/examples/index.html",
  },
});
