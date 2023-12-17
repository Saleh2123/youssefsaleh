import type _Express from "express-serve-static-core";
import type { Ctx } from "./trpc/bound.js";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import * as _mode from "./mode.js";
import * as _bound from "./trpc/bound.js";
import * as _seven from "./trpc/mode/seven.js";
import * as _zero from "./trpc/mode/zero.js";
import * as _medicine from "./trpc/router/medicine.js";
import * as _patient from "./trpc/router/patient.js";
import * as _pharmacist from "./trpc/router/pharmacist.js";
import * as _profile from "./trpc/router/profile.js";

const ctx = (opts: Pick<Ctx, "req" | "res">): Ctx => ({
  req: opts.req,
  res: opts.res,
});

const router = _bound.trpc.router({
  [_mode.PUB]: _zero.router,
  [_mode.ADMIN | _mode.PATIENT | _mode.PHARMACIST]: _seven.router,

  medicine: _medicine.router,
  patient: _patient.router,
  pharmacist: _pharmacist.router,
  profile: _profile.router,
});
export type Router = typeof router;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const middleware: _Express.RequestHandler = createExpressMiddleware({
  router,
  createContext: ctx,
});
