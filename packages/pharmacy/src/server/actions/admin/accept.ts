"use server";

import { revalidatePath } from "next/cache.js";
import { z } from "zod";

import { _href, _mode, _parser } from "</core.js";
import { prisma } from "</server/prisma/client.js";

export const pharmacist = async (data: FormData): Promise<void> => {
  const result = z.object({ username: _parser.username }).safeParse(Object.fromEntries(data));
  if (!result.success) {
    return;
  }
  const { username } = result.data;

  const pharmacist = await prisma.pendingPharmacist.delete({
    where: { username },
  });

  await prisma.profile.upsert({
    where: { username: pharmacist.username },
    create: {
      username: pharmacist.username,
      email: pharmacist.email,
      password: pharmacist.password,
      mode: _mode.PHARMACIST,
      pharmacist: { create: {} },
    },
    update: {
      mode: { increment: _mode.PHARMACIST },
      pharmacist: { create: {} },
    },
  });

  revalidatePath(_href.admin.pharmacists);
};
