// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"]
    }
  }
];
