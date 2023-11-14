"use server";

import type { Prisma } from "@prisma/client";

import { OrderMethod } from "@prisma/client";
import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation.js";
import { z } from "zod";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";

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

export const checkout = async (data: FormData): Promise<void> => {
  const user = await auth._unsafe.user();

  const result = z
    .object({
      address: z.string(),
      method: z.union([
        z.literal(OrderMethod.Cash),
        z.literal(OrderMethod.Stripe),
        z.literal(OrderMethod.Wallet),
      ]),
    })
    .safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { address, method } = result.data;

  const patient = await prisma.patient.findUnique({
    where: { profileId: user.id },
    select: {
      cart: {
        select: {
          quantity: true,
          productId: true,
          product: { select: { price: true } },
        },
      },
    },
  });

  if (!patient) {
    return;
  }

  const { total, products } = await patient.cart.reduce(
    async (acc, item) => {
      const _acc = await acc;

      _acc.total += item.quantity * item.product.price;

      _acc.products.push({
        productId: item.productId,
        quantity: item.quantity,
      });

      await prisma.product.update({
        where: { id: item.productId },
        data: {
          sales: { increment: item.quantity },
        },
      });

      return _acc;
    },
    Promise.resolve({ total: 0, products: [] } as {
      total: number;
      products: Omit<Prisma.OrderProductCreateManyInput, "id" | "orderId">[];
    }),
  );

  const [order, stripe] = await Promise.all([
    prisma.order.create({
      data: {
        address,
        method,
        total,
        patient: { connect: { profileId: user.id } },
      },
      select: { id: true },
    }),

    (async (): Promise<boolean> => {
      switch (method) {
        case OrderMethod.Wallet:
          await prisma.patient.update({
            where: { profileId: user.id },
            data: { wallet: { decrement: total } },
          });
          return false;

        case OrderMethod.Stripe:
          return true;

        default:
          method satisfies typeof OrderMethod.Cash;
          return false;
      }
    })(),

    prisma.cartProduct.deleteMany({
      where: { patient: { profileId: user.id } },
    }),
  ]);

  await prisma.orderProduct.createMany({
    data: products.map((product) => Object.assign(product, { orderId: order.id })),
  });

  if (stripe) {
    redirect(_href.patient.stripe);
  }

  redirect(_href.patient.orders);
};
