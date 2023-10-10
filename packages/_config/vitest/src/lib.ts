import { defineConfig } from "vitest/config";

export const base = defineConfig({
  test: {
    include: ["./tests/**/*.ts"],
    passWithNoTests: true,
  },
});

export default base;
