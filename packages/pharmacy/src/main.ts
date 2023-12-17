import { Effect } from "effect";
import * as _express from "./server/express.js";
import { prisma } from "./server/prisma.js";

Effect.runSync(
  Effect.gen(function* ($) {
    const server = yield* $(_express.listen);

    const exit = async (): Promise<void> => {
      await Promise.allSettled([server.close(), prisma.$disconnect()]);
      process.exit(0);
    };

    process.once("SIGINT", exit);
    process.once("SIGTERM", exit);
  }),
);
