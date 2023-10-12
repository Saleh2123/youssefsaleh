import { db } from "~/server/db.js";

export const GET = async (_) => {
  const result = await db.patient.findMany({});
  console.log(result);
  return Response.json(result);
};
