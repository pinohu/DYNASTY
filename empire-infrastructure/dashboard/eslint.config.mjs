import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Custom rules for code quality
  {
    rules: {
      // Enforce consistent return types
      "@typescript-eslint/explicit-function-return-type": "off",
      // Warn on unused variables (error in production)
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // Prefer const over let when possible
      "prefer-const": "error",
      // No console.log in production (warn for now)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Enforce consistent spacing
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
  },
]);

export default eslintConfig;
