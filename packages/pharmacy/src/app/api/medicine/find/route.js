import { db } from "~/server/db.js";

export const GET = async (req) => {
  const name = req?.nextUrl?.searchParams?.get("name");
  const filter = name
    ? {
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      }
    : {};
  const result = await db.medicine.findMany(filter);
  console.log(result);
  return Response.json(result);
};
