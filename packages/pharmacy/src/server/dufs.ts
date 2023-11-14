import { z } from "zod";

type PathInput = {
  user: string;
  file: { id: string; name: string };
};

const env = z.object({ _TOPP_DUFS_URL: z.string() }).parse(process.env);

export const url = (suffix: string): URL => new URL(suffix, env._TOPP_DUFS_URL);

export const path = (input: PathInput): string =>
  `/${input.user}/${input.file.id}-${input.file.name}`;
