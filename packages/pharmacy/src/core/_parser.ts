import isStrongPassword from "validator/es/lib/isStrongPassword.js";
import { z } from "zod";

const _isStrongPassword = isStrongPassword as unknown as (
  s: string,
  opt?: typeof _opt.password,
) => boolean;

const _opt = {
  password: {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  },
};

export const _schema = {
  password: JSON.stringify(_opt.password, null, 1),
};

export const username = z.string().min(6);
export const password = z.string().refine((p) => _isStrongPassword(p, _opt.password));
