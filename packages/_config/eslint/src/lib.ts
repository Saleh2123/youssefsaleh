import type { ESLint, Linter } from "eslint";

import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";

export const base: Linter.FlatConfig[] = [
  { ignores: ["target/**"] },
  js.configs.recommended,
  {
    files: ["*.ts", "**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": ts as unknown as ESLint.Plugin,
    },
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")) as Linter.ParserModule,
      parserOptions: { project: ["tsconfig.json"] },
    },
    rules: Object.assign(
      ts.configs["eslint-recommended"]!.overrides![0]!.rules as Linter.RulesRecord,
      ts.configs["strict-type-checked"]!.rules,
      {
        // `error`
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],

        // `warn`
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-unused-vars": "warn",

        // `off`
        "no-fallthrough": "off",
      },
    ),
  },
];

export default base;
