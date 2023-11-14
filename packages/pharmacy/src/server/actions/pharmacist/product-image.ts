"use server";

import { revalidatePath } from "next/cache.js";
import { z } from "zod";

import { _href } from "</core.js";
import * as auth from "</server/auth.js";
import * as dufs from "</server/dufs.js";
import { prisma } from "</server/prisma/client.js";

export const add = async (data: FormData): Promise<void> => {
  const user = await auth._unsafe.user();
  const result = z
    .object({ file: z.object({}).passthrough(), productId: z.string() })
    .transform((input) => input as unknown as { file: File } & Omit<typeof input, "file">)
    .refine(({ file }) => file.size > 0)
    .safeParse(Object.fromEntries(data));

  if (!result.success) {
    return;
  }
  const { file, productId } = result.data;

  const { id } = await prisma.file.create({
    data: {
      name: file.name,
      product: {
        connect: { id: productId },
      },
    },
  });

  await fetch(dufs.url(dufs.path({ user: user.id, file: { id, name: file.name } })), {
    method: "PUT",
    body: data.get("file"),
  });

  revalidatePath(_href.pharmacist.products);
};
