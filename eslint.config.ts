import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: ['public/**', 'eslint.config.ts'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "eol-last": ["error", "always"],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],          // <-- COMILLAS SIMPLES
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      'no-undef': 'error',
      'prefer-const': 'warn',
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  tseslint.configs.recommended,
]);
