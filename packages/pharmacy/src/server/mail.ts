import nodemailer from "nodemailer";
import { z } from "zod";

const env = z
  .object({
    _TOPP_MAIL_HOST: z.string(),
    _TOPP_MAIL_SMTP_PORT: z.string().transform(Number),
  })
  .parse(process.env);

export const transporter = nodemailer.createTransport({
  host: env._TOPP_MAIL_HOST,
  port: env._TOPP_MAIL_SMTP_PORT,
});
