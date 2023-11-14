import type { NextAuthConfig } from "next-auth";
import type { NextRequest } from "next/server.js";

import * as _href from "./_href.js";

export const config: NextAuthConfig = {
  pages: { signIn: _href.auth.login },
  providers: [],

  callbacks: {
    authorized: ({ auth, request: _request }) => {
      const request = _request as NextRequest;
      if (!auth?.user && request.nextUrl.pathname.startsWith(_href.user.home)) {
        const url = new URL(_href.auth.login, request.nextUrl);
        url.searchParams.set("callbackURL", request.nextUrl.pathname);
        return Response.redirect(url);
      }
      return true;
    },

    jwt: ({ token, user }) => {
      Boolean(user) && Object.assign(token, { user });
      return token;
    },

    session: ({ session, token }) => Object.assign(session, { user: token["user"] }),
  },
};
