import argon2 from "@node-rs/argon2";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../prisma.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  logIn: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
        mode: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const profile = await prisma.profile.findUniqueOrThrow({
        where: { username: input.username, mode: input.mode },
        select: { id: true, mode: true, password: true },
      });

      if (!(await argon2.verify(profile.password, input.password))) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
    }),

  create: _bound.trpc.procedure
    .input(
      z
        .object({
          username: z.string(),
          password: z.string(),
          mode: z.number(),
          email: z.string().optional(),
        })
        .transform((input) => Object.assign({ email: `${input.username}@example.com` }, input)),
    )
    .mutation(async ({ input }) =>
      prisma.profile.create({
        data: {
          username: input.username,
          password: await argon2.hash(input.password),
          mode: input.mode,
          email: input.email,
        },
      }),
    ),

  delete: _bound.trpc.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => prisma.profile.delete({ where: { id: input.id } })),

  updatePassword: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        old: z.string(),
        new: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const profile = await prisma.profile.findUniqueOrThrow({
        where: { username: input.username },
      });

      if (!(await argon2.verify(profile.password, input.old))) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      return prisma.profile.update({
        where: { username: input.username },
        data: { password: await argon2.hash(input.new) },
      });
    }),
});
