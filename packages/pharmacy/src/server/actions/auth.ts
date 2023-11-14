"use server";

import type { Prisma } from "@prisma/client";

import argon2 from "@node-rs/argon2";
import { headers } from "next/headers.js";
import { redirect } from "next/navigation.js";
import crypto from "node:crypto";
import { z } from "zod";

import { _href, _parser } from "</core.js";
import * as auth from "</server/auth.js";
import * as mail from "</server/mail.js";
import { prisma } from "</server/prisma/client.js";

const _password = {
  update: async (profile: Prisma.ProfileWhereUniqueInput, password: string): Promise<never> => {
    const [{ username }] = await Promise.all([
      prisma.profile.update({
        where: profile,
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
  },
};

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

  return _password.update({ id: user.id }, result.data.new0);
};

export const otp = async (data: FormData): Promise<void> => {
  const result = z
    .object({
      username: _parser.username,
    })
    .safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { username } = result.data;

  const profile = await prisma.profile.findUnique({
    where: { username },
    select: { id: true, email: true },
  });

  if (!profile) {
    return;
  }

  const origin = headers().get("origin") as string | undefined;
  const otp = crypto.randomBytes(32).toString("base64");

  const message = {
    otp,
    link: new URL(_href.auth.otp, origin).href,
  };

  await Promise.all([
    mail.transporter.sendMail({
      from: "topp@example.com",
      to: [profile.email],
      text: JSON.stringify(message, null, 2),
    }),

    prisma.otp.upsert({
      where: { username },
      create: {
        value: otp,
        profile: { connect: { username } },
      },
      update: { value: otp },
    }),
  ]);

  redirect(_href.root);
};

export const otpUpdate = async (data: FormData): Promise<void> => {
  const result = z
    .object({
      username: _parser.username,
      otp: z.string(),
      new0: _parser.password,
      new1: _parser.password,
    })
    .refine(({ new0, new1 }) => new0 == new1)
    .safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { username, otp: password } = result.data;

  try {
    const otp = await prisma.otp.delete({
      where: { username },
      select: {
        value: true,
        profile: { select: { email: true } },
      },
    });
    if (otp.value !== password) {
      return;
    }

    return _password.update({ username }, result.data.new0);
  } catch (err) {
    const p2025 = z
      .object({
        code: z.literal("P2025"),
      })
      .safeParse(err).success;
    if (p2025) {
      return;
    }
    throw err;
  }
};
