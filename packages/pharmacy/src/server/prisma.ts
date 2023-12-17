import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { GlobalValue } from "effect";
import * as _mail from "./mail.js";
import * as _mode from "./mode.js";

const once =
  // biome-ignore lint/complexity/useLiteralKeys: tsc.noPropertyAccessFromIndexSignature
  process.env["NODE_ENV"] === "development"
    ? <V>(id: string, f: () => V): V => {
        const key = Symbol.for(path.join(import.meta.url, id));
        return GlobalValue.globalValue(key, f);
      }
    : <V>(_: unknown, f: () => V): V => f();

export const prisma = once("prisma", () =>
  new PrismaClient().$extends({
    query: {
      medicine: {
        update: async ({ query, args }) => {
          const result = await query(args);

          if (result.quantity === 0) {
            const users = await prisma.profile.findMany({
              where: { OR: [{ mode: _mode.ADMIN }, { mode: _mode.PHARMACIST }] },
              select: { email: true },
            });

            const message = {
              medicine: { id: result.id, name: result.name },
              event: "OUT_OF_STOCK",
            };
            await _mail.transporter.sendMail({
              from: "topp@example.com",
              to: users.map(({ email }) => email),
              text: JSON.stringify(message, null, 2),
            });
          }
        },
      },
    },
  }),
);
