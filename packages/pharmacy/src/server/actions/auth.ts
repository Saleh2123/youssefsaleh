"use server";

import argon2 from "@node-rs/argon2";
import { z } from "zod";

import { _href, _parser } from "</core.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

export const logIn = async (data: FormData): Promise<void> => {
  try {
    await auth.signIn("credentials", Object.fromEntries(data));
  } catch (err) {
    const { message } = err as Error;
    if (message === "NEXT_REDIRECT") {
      throw err;
    }
  }
};

export const logOut = auth.signOut;

export const updatePassword = async (data: FormData): Promise<{ error: string }> => {
  const user = await auth._unsafe.user();

  const result = await z
    .object({
      prev: _parser.password,
      new0: _parser.password,
      new1: _parser.password,
    })
    .superRefine(async (input, ctx) => {
      if (input.new0 != input.new1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "passwords did not match",
        });
      }

      const profile = await prisma.profile.findUnique({
        where: { id: user.id },
        select: { password: true },
      });

      if (!profile || !(await argon2.verify(profile.password, input.prev))) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "invalid credentials",
        });
      }
    })
    .safeParseAsync(Object.fromEntries(data));

  if (!result.success) {
    return { error: result.error.message };
  }

  const { new0: password } = result.data;

  const [{ username }] = await Promise.all([
    prisma.profile.update({
      where: { id: user.id },
      data: { password: await argon2.hash(password) },
    }),

    auth.signOut({ redirect: false }),
  ]);

  await auth.signIn("credentials", {
    username,
    password,
    redirectTo: _href.user.home,
  });

  throw Error();
};
