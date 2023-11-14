import { Roboto_Flex, Roboto_Mono, Roboto_Serif } from "next/font/google";

export const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font__mono",
});

export const sans = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font__sans",
});

export const serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font__serif",
});
