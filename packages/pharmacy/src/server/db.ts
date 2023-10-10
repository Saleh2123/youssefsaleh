import { PrismaClient } from "@prisma/client";

const _global = globalThis as { db?: PrismaClient };

export const db = _global.db ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  _global.db = db;
}
