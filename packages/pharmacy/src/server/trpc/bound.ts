import type { IncomingMessage } from "http";
import type _Express from "express-serve-static-core";

import { TRPCError, initTRPC } from "@trpc/server";
import * as _session from "../session.js";

export type Ctx = {
  req: IncomingMessage;
  res: _Express.Response;
};

const _trpc = initTRPC.context<Ctx>().create();

export const trpc = Object.assign(_trpc, {
  protected: _trpc.procedure.use(
    _trpc.middleware(async ({ ctx, path, next }) => {
      const session = await _session.get(ctx);
      if (!session.id) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const result = /^([0-9])+\./.exec(path);
      if (result?.[1] && !(+result[1] & session.mode)) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const _ctx = Object.assign(ctx, {
        id: session.id,
        mode: session.mode,
      });
      return next({ ctx: _ctx });
    }),
  ),
});
