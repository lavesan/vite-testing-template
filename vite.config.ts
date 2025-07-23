/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      dirs: "src/pages",
      extensions: ["tsx"],
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: [
      "playwright.config.ts",
      "src/types/**",
      "src/containers/**",
      "src/pages/**",
      "tests/**",
      "**/tests/**",
      "cypress.config.*",
      "cypress/**",
      "src/test/setup.ts",
      "**/*.d.ts",
      "**/dist/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    coverage: {
      provider: "v8",
      exclude: [
        "playwright.config.ts",
        "vite.config.ts",
        "eslint.config.js",
        "src/types/**",
        "src/containers/**",
        "src/pages/**",
        "src/main.tsx",
        "tests/**",
        "**/tests/**",
        "cypress.config.*",
        "cypress/**",
        "src/test/setup.ts",
        "**/*.d.ts",
        "**/dist/**",
        "**/.{idea,git,cache,output,temp}/**",
      ],
    },
  },
});
