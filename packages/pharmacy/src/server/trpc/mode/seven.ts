import * as _session from "../../session.js";
import * as _bound from "../bound.js";

export const router = _bound.trpc.router({
  logOut: _bound.trpc.protected.mutation(async ({ ctx }) => {
    const session = await _session.get(ctx);
    session.destroy();
  }),
});
