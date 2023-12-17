import argon2 from "@node-rs/argon2";
import { z } from "zod";
import { prisma } from "../../prisma.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  apply: _bound.trpc.procedure
    .input(
      z.object({
        username: z.string(),
        name: z.string(),
        email: z.string(),
        password: z.string(),
        birthYear: z.string(),
        birthMonth: z.string(),
        birthDay: z.string(),
        hourlyRate: z.string().transform((s) => +s),
        affiliation: z.string(),
        educationalBackground: z.string(),
        idDocument: z.string().nullish().default(null),
        degreeDocument: z.string().nullish().default(null),
        licenseDocument: z.string().nullish().default(null),
      }),
    )
    .mutation(async ({ input }) =>
      prisma.pendingPharmacist.create({
        data: {
          name: input.name,
          dateofbirth: `${input.birthDay} ${input.birthMonth} ${input.birthYear}`,
          hourlyRate: input.hourlyRate,
          affiliation: input.affiliation,
          educationalBackground: input.educationalBackground,
          username: input.username,
          email: input.email,
          password: await argon2.hash(input.password),
          idDocument: input.idDocument,
          degreeDocument: input.degreeDocument,
          licenseDocument: input.licenseDocument,
        },
      }),
    ),

  applications: _bound.trpc.procedure.query(() => prisma.pendingPharmacist.findMany()),

  accept: _bound.trpc.procedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
    const application = await prisma.pendingPharmacist.delete({ where: { id: input.id } });
    return prisma.pharmacist.create({
      data: {
        affiliation: application.affiliation,
        dateofbirth: application.dateofbirth,
        educationalBackground: application.educationalBackground,
        hourlyRate: application.hourlyRate,
        name: application.name,
        idDocument: application.idDocument,
        degreeDocument: application.degreeDocument,
        licenseDocument: application.licenseDocument,
        profile: {
          create: {
            email: application.email,
            mode: application.mode,
            password: application.password,
            username: application.username,
          },
        },
      },
    });
  }),

  reject: _bound.trpc.procedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => prisma.pendingPharmacist.delete({ where: { id: input.id } })),

  find: _bound.trpc.procedure.query(() => prisma.pharmacist.findMany()),
});
