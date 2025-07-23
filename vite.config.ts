/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: [
      "playwright.config.ts",
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
