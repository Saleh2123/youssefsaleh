"use server";

import { z } from "zod";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";
import { revalidatePath } from "next/cache.js";

export const add = async (data: FormData): Promise<void> => {
  const user = await auth._unsafe.user();

  const increment = 1;

  const result = await z
    .object({ product: z.string() })
    .refine(async (input) => {
      const product = await prisma.product.findUnique({
        where: { id: input.product },
        select: { quantity: true },
      });
      return product && product.quantity >= increment;
    })
    .safeParseAsync(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { product } = result.data;

  await prisma.$transaction([
    prisma.patient.update({
      where: { profileId: user.id },
      data: {
        cart: {
          upsert: {
            where: { productId: product },
            create: { productId: product },
            update: { quantity: { increment } },
          },
        },
      },
    }),

    prisma.product.update({
      where: { id: product },
      data: { quantity: { decrement: increment } },
    }),
  ]);

  revalidatePath(_href.patient.products);
};

export const remove = async (data: FormData): Promise<void> => {
  const result = z.object({ cartProduct: z.string() }).safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { cartProduct } = result.data;

  const { quantity, productId } = await prisma.cartProduct.delete({
    where: { id: cartProduct },
  });

  await prisma.product.update({
    where: { id: productId },
    data: { quantity: { increment: quantity } },
  });

  revalidatePath(_href.patient.cart);
};

export const updateQuantity = async (data: FormData): Promise<void> => {
  const result = z
    .object({
      cartProduct: z.string(),
      newQuantity: z
        .string()
        .transform((s) => +s)
        .pipe(z.number().min(1)),
    })
    .safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { cartProduct, newQuantity } = result.data;

  const product = await prisma.cartProduct.findUnique({
    where: { id: cartProduct },
    select: {
      quantity: true,
      product: { select: { quantity: true } },
    },
  });

  if (!product || newQuantity > product.product.quantity + product.quantity) {
    return;
  }

  await prisma.cartProduct.update({
    where: { id: cartProduct },
    data: {
      quantity: newQuantity,
      product: {
        update: {
          quantity: { increment: product.quantity - newQuantity },
        },
      },
    },
  });

  revalidatePath(_href.patient.cart);
};
