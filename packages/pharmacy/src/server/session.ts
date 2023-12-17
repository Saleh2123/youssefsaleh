import type { IronSession } from "iron-session";
import type * as _bound from "./trpc/bound.js";

import { getIronSession } from "iron-session";
import { z } from "zod";

type Session = IronSession<{ id: string; mode: number }>;

const _options = z
  .object({ _TOPP_AUTH_SECRET: z.string().min(32) })
  .transform(({ _TOPP_AUTH_SECRET }) => ({
    cookieName: "@topp/pharmacy",
    password: _TOPP_AUTH_SECRET,
  }))
  .parse(process.env);

export const get = (opts: Pick<_bound.Ctx, "req" | "res">): Promise<Session> =>
  getIronSession(opts.req, opts.res, _options);
