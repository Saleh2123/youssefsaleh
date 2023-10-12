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
    gender,
    mobileNumber,
    emergencyContact: { fullName, relation, emergencyMobile },
  } = await req.json();
  const result = await db.patient.create({
    data: {
      name,
      email,
      dob: [birthYear, birthMonth, birthDay],
      gender,
      mobile: mobileNumber,
      profile: { create: { username, password: "[redacted]" } },
      contact: {
        connectOrCreate: {
          where: { mobile: emergencyMobile },
          create: {
            name: fullName,
            mobile: mobileNumber,
            relation,
          },
        },
      },
    },
  });
  console.log(result);
  return Response.json(result);
};
