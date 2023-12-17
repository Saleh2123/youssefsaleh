import argon2 from "@node-rs/argon2";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../prisma.js";
import * as _session from "../../session.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  logIn: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const profile = await prisma.profile.findUniqueOrThrow({
        where: { username: input.username },
        select: { id: true, mode: true, password: true },
      });

      if (!(await argon2.verify(profile.password, input.password))) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const session = await _session.get(ctx);
      session.id = profile.id;
      session.mode = profile.mode;
      await session.save();
    }),
});
