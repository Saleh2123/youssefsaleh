import argon2 from "@node-rs/argon2";
import { z } from "zod";
import * as _mode from "../../mode.js";
import { prisma } from "../../prisma.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  register: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        name: z.string(),
        email: z.string(),
        password: z.string(),
        birthYear: z.string(),
        birthMonth: z.string(),
        birthDay: z.string(),
        gender: z.string(),
        mobileNumber: z.string(),
        emergencyContact: z.object({
          fullName: z.string(),
          relation: z.string(),
          emergencyMobile: z.string(),
        }),
      }),
    )
    .mutation(async ({ input }) =>
      prisma.patient.create({
        data: {
          name: input.name,
          birthYear: input.birthYear,
          birthMonth: input.birthMonth,
          birthDay: input.birthDay,
          gender: input.gender,
          mobileNumber: input.mobileNumber,
          contactFullName: input.emergencyContact.fullName,
          contactRelation: input.emergencyContact.relation,
          contactMobile: input.emergencyContact.emergencyMobile,
          profile: {
            create: {
              username: input.username,
              email: input.email,
              password: await argon2.hash(input.password),
              mode: _mode.PATIENT,
            },
          },
        },
      }),
    ),

  find: _bound.trpc.procedure.query(() => prisma.patient.findMany()),

  getWallet: _bound.trpc.procedure.input(z.string()).query(async ({ input }) =>
    prisma.profile.findUnique({
      where: { username: input },
      include: { patient: true },
    }),
  ),

  setWallet: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        wallet: z.number(),
      }),
    )
    .mutation(({ input }) =>
      prisma.profile.update({
        where: { username: input.username },
        data: { patient: { update: { wallet: input.wallet } } },
      }),
    ),
});
