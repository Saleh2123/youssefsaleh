import { db } from "~/server/db.js";

export const POST = async (req) => {
  const data = await req.json();
  const result = await db.medicine.update({
    where: { name: data.name },
    data,
  });
  console.log(result);
  return Response.json(result);
};
