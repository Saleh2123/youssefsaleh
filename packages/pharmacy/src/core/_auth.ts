import type { NextAuthConfig } from "next-auth";
import type { NextRequest } from "next/server.js";

import * as _href from "./_href.js";

export const config: NextAuthConfig = {
  pages: { signIn: _href.auth.login },
  providers: [],

  callbacks: {
    authorized: ({ auth, request: _request }) => {
      const request = _request as NextRequest;
      const _home = (): Response => Response.redirect(new URL(_href.user.home, request.nextUrl));

      if (request.nextUrl.pathname.startsWith(_href.user.home)) {
        if (!auth?.user) {
          const url = new URL(_href.auth.login, request.nextUrl);
          url.searchParams.set("callbackURL", request.nextUrl.pathname);
          return Response.redirect(url);
        }

        const mode = RegExp(`${_href.user.mode}/([0-9]+)`);
        const result = mode.exec(request.nextUrl.pathname);
        if (result && result[1] && !(+result[1] & auth.user.mode)) {
          return _home();
        }
      }

      if (request.nextUrl.pathname.startsWith(_href.auth._this) && auth?.user) {
        return _home();
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
