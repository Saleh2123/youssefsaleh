import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

export const config = {
  links: [httpBatchLink({ url: "http://localhost:3000/trpc" })],
};

export const client = createTRPCReact();

export const vanilla = createTRPCProxyClient(config);
