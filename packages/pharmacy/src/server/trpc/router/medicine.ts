import { z } from "zod";
import { prisma } from "../../prisma.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  find: _bound.trpc.procedure.input(z.string().optional()).query(({ input }) =>
    input
      ? prisma.medicine.findMany({
          where: {
            name: { contains: input, mode: "insensitive" },
          },
        })
      : prisma.medicine.findMany(),
  ),

  create: _bound.trpc.procedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        use: z.string(),
        ingredients: z.string().array(),
        quantity: z.number(),
        picture: z.string(),
      }),
    )
    .mutation(({ input }) =>
      prisma.medicine.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          use: input.use,
          ingredients: input.ingredients,
          quantity: input.quantity,
          picture: input.picture,
        },
      }),
    ),

  update: _bound.trpc.procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        quantity: z.number(),
        picture: z.string().optional(),
      }),
    )
    .mutation(({ input }) =>
      prisma.medicine.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          quantity: input.quantity,
          picture: input.picture as string,
        },
      }),
    ),

  archive: _bound.trpc.procedure
    .input(
      z.object({
        id: z.string(),
        archived: z.boolean(),
      }),
    )
    .mutation(({ input }) =>
      prisma.medicine.update({
        where: { id: input.id },
        data: { archived: input.archived },
      }),
    ),
});
