import { z } from "zod";

export const username = z.string().min(6);
export const password = z.string().min(6);
