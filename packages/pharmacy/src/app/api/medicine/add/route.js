import { db } from "~/server/db.js";

export const POST = async (req) => {
  const data = await req.json();
  const result = await db.medicine.create({ data });
  console.log(result);
  return Response.json(result);
};
