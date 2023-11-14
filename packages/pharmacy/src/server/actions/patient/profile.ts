"use server";

import { z } from "zod";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";
import { prisma } from "</server/prisma/client.js";
import { revalidatePath } from "next/cache.js";

export const updateAddresses = async (data: FormData): Promise<void> => {
  const user = await auth._unsafe.user();

  const result = z
    .object({
      addresses: z
        .string()
        .min(1)
        .transform((addresses) => addresses.match(/[^\r\n]+/g)),
    })
    .safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { addresses } = result.data;

  if (!addresses) {
    return;
  }

  await prisma.patient.update({
    where: { profileId: user.id },
    data: { addresses: { push: addresses } },
  });

  revalidatePath(_href.patient.profile);
};
