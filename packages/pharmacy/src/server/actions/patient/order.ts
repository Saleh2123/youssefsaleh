"use server";

import { OrderMethod } from "@prisma/client";
import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation.js";
import { z } from "zod";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";
import * as stripe from "</server/stripe.js";

export const cancel = async (data: FormData): Promise<void> => {
  const user = await auth._unsafe.user();

  const result = z.object({ id: z.string() }).safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { id } = result.data;

  const order = await prisma.order.delete({
    where: { id },
    include: { products: true },
  });

  await Promise.all([
    (async (): Promise<void> => {
      if (order.method !== OrderMethod.Cash) {
        await prisma.patient.update({
          where: { profileId: user.id },
          data: {
            wallet: { increment: order.total },
          },
        });
      }
    })(),

    (async (): Promise<void> => {
      for (const product of order.products) {
        await prisma.product.update({
          where: { id: product.productId },
          data: {
            quantity: { increment: product.quantity },
            sales: { decrement: product.quantity },
          },
        });
      }
    })(),
  ]);

  revalidatePath(_href.patient.orders);
};

export const _stripe = async (): Promise<void> => {
  const list = await stripe._dev.payouts.list();
  console.log(list.lastResponse);
  redirect(_href.patient.orders);
};
