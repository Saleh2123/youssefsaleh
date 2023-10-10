import type { Linter } from "eslint";

import { base } from "./lib.js";

// @ts-expect-error
const { FlatCompat } = await import("@eslint/eslintrc");
const next: Linter.FlatConfig[] = new FlatCompat({}).extends("next/core-web-vitals");
next.push.apply(next, base);

export default next;
