import type { Profile } from "@prisma/client";

import argon2 from "@node-rs/argon2";

import { _mode } from "../../core.js";
import { prisma } from "./client.js";

const id = function* (): Generator<number, never> {
  for (let count = 0; ; ++count) {
    yield count;
  }
};

const _id = {
  product: id(),
  profile: id(),
};

const gen = {
  profile: async <T extends object>(
    data: T,
  ): Promise<T & Pick<Profile, "username" | "password">> => {
    const username = `user-${_id.profile.next().value}`;
    return Object.assign(data, {
      username,
      password: await argon2.hash(username),
    });
  },
};

await prisma.$transaction([
  prisma.profile.createMany({
    data: [await gen.profile({ mode: _mode.ADMIN })],
  }),
  prisma.profile.create({
    data: await gen.profile({
      mode: _mode.PHARMACIST,
      pharmacist: { create: {} },
    }),
  }),
  prisma.profile.create({
    data: await gen.profile({
      mode: _mode.PATIENT,
      patient: { create: {} },
    }),
  }),
  prisma.pendingPharmacist.createMany({
    data: [await gen.profile({})],
  }),
  prisma.product.createMany({
    data: [
      {
        name: `product-${_id.product.next().value}`,
        price: 10,
        quantity: 10,
      },
      {
        name: `product-${_id.product.next().value}`,
        price: 20,
        quantity: 20,
      },
    ],
  }),
]);
