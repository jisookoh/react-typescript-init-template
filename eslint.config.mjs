import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import airbnbConfig from "eslint-config-airbnb";
import airbnbTypescriptConfig from "eslint-config-airbnb-typescript";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig, // Prettier 규칙을 적용
  {
    plugins: {
      prettier: pluginPrettier, // Prettier 플러그인 추가
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@assets", "./src/assets"],
            ["@constants", "./src/constants"],
            ["@components", "./src/components"],
            ["@hooks", "./src/hooks"],
            ["@pages", "./src/pages"],
            ["@queries", "./src/queries"],
            ["@routes", "./src/routes"],
            ["@utils", "./src/utils"],
            ["@styles", "./src/styles"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...airbnbConfig.rules, // Airbnb ESLint 규칙 적용
      ...airbnbTypescriptConfig.rules, // Airbnb TypeScript 규칙 추가
      "prettier/prettier": "warn", // Prettier 포맷팅 오류를 ESLint 경고로 표시
    },
  },
];
