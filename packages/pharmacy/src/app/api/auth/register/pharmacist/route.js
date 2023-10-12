import { db } from "~/server/db.js";

export const POST = async (req) => {
  const {
    // password,
    username,
    name,
    email,
    birthYear,
    birthMonth,
    birthDay,
    hourlyRate,
    affiliation,
    educationalBackground,
  } = await req.json();
  const result = await db.pendingPharmacist.create({
    data: {
      pharmacist: {
        create: {
          name,
          email,
          dob: [birthYear, birthMonth, birthDay],
          profile: { create: { username, password: "[redacted]" } },
          hourlyRate: +hourlyRate,
          affiliation,
          education: educationalBackground,
        },
      },
    },
  });
  console.log(result);
  return Response.json(result);
};
