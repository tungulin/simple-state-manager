import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: [{ find: /^simple-state$/, replacement: resolve("./src/index.ts") }],
  },
  test: {
    name: "simple-test",
    globals: true,
    environment: "jsdom",
    dir: "tests",
  },
});
