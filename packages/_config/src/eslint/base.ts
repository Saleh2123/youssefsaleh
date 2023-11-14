import type { ESLint, Linter } from "eslint";

import js from "@eslint/js";
import _tsPlugin from "@typescript-eslint/eslint-plugin";
import _tsParser from "@typescript-eslint/parser";

const ts = { parser: _tsParser, plugin: _tsPlugin };

const rules = {
  default: {
    "import/no-anonymous-default-export": "off",
    "prefer-spread": "off",
  },
} satisfies Record<string, Linter.RulesRecord>;

export const base: Linter.FlatConfig[] = [
  { ignores: ["target/**"] },
  js.configs.recommended,
  {
    files: ["*.*js"],
    rules: rules.default,
  },
  {
    files: ["*.*ts", "src/**/*.*ts{,x}"],

    plugins: {
      "@typescript-eslint": ts.plugin as unknown as ESLint.Plugin,
    },

    languageOptions: {
      parser: ts.parser as Linter.ParserModule,
      parserOptions: { project: ["tsconfig.json"] },
    },

    rules: Object.assign(
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      ts.plugin.configs["eslint-recommended"]!.overrides![0]!.rules as Linter.RulesRecord,
      ts.plugin.configs["strict-type-checked"]!.rules,
      /* eslint-enable */

      rules.default,
      {
        // `error`
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          { ignoreArrowShorthand: true },
        ],

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
