import { FlatCompat } from "@eslint/eslintrc";
import { base } from "./base.js";

export const next = new FlatCompat({}).extends("next/core-web-vitals");
next.push.apply(next, base);

export default next;
