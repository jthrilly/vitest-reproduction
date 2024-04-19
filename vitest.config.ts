import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "node",
    globals: true,
  },
  // resolve: {
  //   alias: {
  //     react: "next/dist/compiled/react/cjs/react.development.js",
  //   },
  // },
});
