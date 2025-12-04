import js from "@eslint/js"
import globals from "globals"
import eslintPluginPrettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: ["node_modules/", "build/"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [js.configs.recommended, prettierConfig],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
])
