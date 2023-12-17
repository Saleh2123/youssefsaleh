import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import * as trpc from "./trpc.js";

export const Provider = (slots) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() => trpc.client.createClient(trpc.config));
  return (
    <trpc.client.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{slots.children}</QueryClientProvider>
    </trpc.client.Provider>
  );
};
