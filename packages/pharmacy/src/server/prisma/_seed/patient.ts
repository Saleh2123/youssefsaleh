import argon2 from "@node-rs/argon2";
import * as _mode from "../../mode.js";
import { prisma } from "../../prisma.js";

export const seed = async (): Promise<void> => {
  const password = await argon2.hash("xyz");

  const base = {
    profile: { mode: _mode.PATIENT, password },
    patient: {
      gender: "_",
      birthDay: "1",
      birthYear: "1970",
      birthMonth: "1",
      mobileNumber: "0000",
      contactMobile: "0000",
      contactFullName: "contact",
      contactRelation: "friend",
    },
  };

  await Promise.all([
    prisma.patient.create({
      data: {
        ...base.patient,
        profile: {
          create: {
            ...base.profile,
            username: "user-patient-1",
            email: "user-patient-1@example.com",
          },
        },
        name: "kiro",
        age: 20,
        reason: "headache",
        chatID: "100004055503418",
        wallet: 1000,
      },
    }),

    prisma.patient.create({
      data: {
        ...base.patient,
        profile: {
          create: {
            ...base.profile,
            username: "user-patient-2",
            email: "user-patient-2@example.com",
          },
        },
        name: "Ali",
        age: 20,
        reason: "headache",
        chatID: "100004055503418",
      },
    }),

    prisma.patient.create({
      data: {
        ...base.patient,
        profile: {
          create: {
            ...base.profile,
            username: "user-patient-3",
            email: "user-patient-3@example.com",
          },
        },
        name: "zeyad",
        age: 20,
        reason: "headache",
        chatID: "100004055503418",
      },
    }),
  ]);
};
