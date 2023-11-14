import type { Session } from "next-auth";

import argon2 from "@node-rs/argon2";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { _auth, _parser } from "</core.js";
import { prisma } from "</server/prisma/client.js";

const _result = NextAuth({
  ..._auth.config,
  providers: [
    Credentials({
      authorize: async (data) => {
        const result = z
          .object({
            username: _parser.username,
            password: _parser.password,
          })
          .safeParse(data);

        if (!result.success) {
          return null;
        }

        const { username, password } = result.data;

        const known = await prisma.profile.findUnique({
          where: { username },
          select: { id: true, mode: true, password: true },
        });

        if (!known || !(await argon2.verify(known.password, password))) {
          return null;
        }

        return { id: known.id, mode: known.mode };
      },
    }),
  ],
});

export const get: typeof _result.auth = _result.auth;
export const signIn = _result.signIn.bind(_result);
export const signOut = _result.signOut.bind(_result);

export const _unsafe = {
  user: async (): Promise<Session["user"]> => {
    const session = await get();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return session!.user;
  },
};
