import type { Config } from "tailwindcss";

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export const base: Config = {
  content: ["./src/**/*.*{ts,tsx}"],
  important: true,

  plugins: [forms, typography],

  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font__mono)"],
        sans: ["var(--font__sans)"],
        serif: ["var(--font__serif)"],
      },
    },
  },
};

export default base;
