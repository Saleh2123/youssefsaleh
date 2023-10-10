import type { Metadata } from "next";

import React from "react";

type Children = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "@topp/pharmacy",
};

const RootLayout = ({ children }: Children): JSX.Element => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
