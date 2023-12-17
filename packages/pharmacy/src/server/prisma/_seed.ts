import argon2 from "@node-rs/argon2";
import * as _mode from "../mode.js";
import { prisma } from "../prisma.js";
import * as _medicine from "./_seed/medicine.js";
import * as _patient from "./_seed/patient.js";
import * as _pharmacist from "./_seed/pharmacist.js";

await Promise.all([
  prisma.profile.create({
    data: {
      username: "evaladmin",
      email: "evaladmin@example.com",
      password: await argon2.hash("evaladmin"),
      mode: _mode.ADMIN,
    },
  }),

  prisma.patient.create({
    data: {
      profile: {
        create: {
          username: "evalpatient",
          email: "evalpatient@example.com",
          password: await argon2.hash("evalpatient"),
          mode: _mode.PATIENT,
        },
      },
      name: "evalpatient",
      gender: "evalpatient",
      birthDay: "1",
      birthMonth: "1",
      birthYear: "1970",
      mobileNumber: "0000",
      contactFullName: "evalpatientcontact",
      contactRelation: "evalpatientcontact",
      contactMobile: "1111",
      wallet: 1000,
    },
  }),

  prisma.pharmacist.create({
    data: {
      profile: {
        create: {
          username: "evalpharmacist",
          email: "evalpharmacist@example.com",
          password: await argon2.hash("evalpharmacist"),
          mode: _mode.PHARMACIST,
        },
      },
      name: "evalpharmacist",
      hourlyRate: 100,
      affiliation: "evalhospital",
      dateofbirth: "01 January 1970",
      educationalBackground: "evaluni",
      wallet: 1000,
    },
  }),

  _medicine.seed(),
  _patient.seed(),
  _pharmacist.seed(),
]);
