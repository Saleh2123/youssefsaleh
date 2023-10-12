import { db } from "~/server/db.js";

export const GET = async (_) => {
  const result = await db.acceptedPharmacist.findMany({
    include: {
      pharmacist: {
        select: {
          profile: { select: { id: true } },
        },
      },
    },
  });
  console.log(result);
  return Response.json(result);
};
