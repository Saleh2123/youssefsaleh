import { PrismaClient } from "@prisma/client";

const _global = globalThis as { prisma?: PrismaClient };

export const prisma = _global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
  _global.prisma = prisma;
}
