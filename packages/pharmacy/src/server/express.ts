import compression from "compression";
import cors from "cors";
import { Config, Effect } from "effect";
import express from "express";
import helmet from "helmet";
import * as trpc from "./trpc.js";

export const listen = Effect.gen(function* ($) {
  const port = yield* $(Config.withDefault(Config.number("_TOPP_API_PORT"), 3000));

  const app = express();
  app.use(compression(), cors(), helmet());

  app.use("/trpc", trpc.middleware);

  return app.listen(port);
});
