import { db } from "~/server/db.js";

export const POST = async (req) => {
  const {
    // _password
    username,
  } = await req.json();
  const result = await db.admin.create({
    data: { profile: { create: { username, password: "[redacted]" } } },
  });
  console.log(result);
  return Response.json(result);
};
