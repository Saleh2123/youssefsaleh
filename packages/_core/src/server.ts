import type { NextServer, NextServerOptions } from "next/dist/server/next.js";

import compression from "compression";
import express from "express";
import helmet from "helmet";
import _next from "next";

export const serve = async (): Promise<void> => {
  const app = express();
  app.disable("x-powered-by");
  app.use("/", helmet(), compression());

  const next = (_next as unknown as (_: NextServerOptions) => NextServer)({});
  const handler = next.getRequestHandler();

  await next.prepare();

  app.all("*", (req, res) => handler(req, res));

  const server = app.listen();
  console.dir(server.address());
};
