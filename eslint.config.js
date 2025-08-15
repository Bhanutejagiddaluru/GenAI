// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // ESLint recommended rules
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: { ...globals.browser }, // window, document, etc.
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"]
    }
  }
];
