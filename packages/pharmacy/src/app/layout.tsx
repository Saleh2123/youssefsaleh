import type { Metadata } from "next";

import type { Slots } from "</core/types/next.d.js";

import * as font from "./font.js";
import "./globals.css";

export const metadata: Metadata = {
  title: "@topp/pharmacy",
};

const Layout = (slots: Slots): React.JSX.Element => (
  <html lang="en" className={`${font.mono.variable} ${font.sans.variable} ${font.serif.variable}`}>
    <body className="m-2 subpixel-antialiased">{slots.children}</body>
  </html>
);

export default Layout;
