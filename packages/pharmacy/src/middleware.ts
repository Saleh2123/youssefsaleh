import NextAuth from "next-auth";

import { _auth } from "./core.js";

const _result = NextAuth(_auth.config);

export const middleware: typeof _result.auth = _result.auth;

export const config = {
  matcher: ["/((?!_next/image|_next/static).*)"],
};
