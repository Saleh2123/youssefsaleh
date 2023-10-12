import { db } from "~/server/db.js";

export const GET = async (_) => {
  const result = await db.pendingPharmacist.findMany({
    include: {
      pharmacist: {
        include: {
          profile: { select: { username: true } },
        },
      },
    },
  });
  console.log(result);
  return Response.json(result);
};
