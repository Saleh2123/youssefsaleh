import { db } from "~/server/db.js";

export const POST = async (req) => {
  const { id } = await req.json();
  const result = await db.profile.delete({ where: { id } });
  console.log(result);
  return Response.json(result);
};
