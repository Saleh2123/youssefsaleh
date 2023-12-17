import argon2 from "@node-rs/argon2";
import * as _mode from "../../mode.js";
import { prisma } from "../../prisma.js";

export const seed = async (): Promise<void> => {
  const password = await argon2.hash("xyz");

  const base = {
    profile: { mode: _mode.PHARMACIST, password },
    pharmacist: {
      affiliation: "Magdy hospital",
      dateofbirth: "5 jan 2002",
      hourlyRate: 4,
    },
  };

  await Promise.all([
    prisma.pharmacist.create({
      data: {
        ...base.pharmacist,
        profile: {
          create: {
            ...base.profile,
            username: "user-pharmacist-1",
            email: "user-pharmacist-1@example.com",
          },
        },
        name: "Ahmed",
        age: 20,
        educationalBackground: "harvard",
        chatID: "100004055503418",
      },
    }),

    prisma.pharmacist.create({
      data: {
        ...base.pharmacist,
        profile: {
          create: {
            ...base.profile,
            username: "user-pharmacist-2",
            email: "user-pharmacist-2@example.com",
          },
        },
        name: "Mohamed",
        age: 20,
        educationalBackground: "harvard",
        chatID: "1410580089244711",
      },
    }),

    prisma.pharmacist.create({
      data: {
        ...base.pharmacist,
        profile: {
          create: {
            ...base.profile,
            username: "user-pharmacist-3",
            email: "user-pharmacist-3@example.com",
          },
        },
        name: "Ali",
        age: 20,
        educationalBackground: "harvard",
        chatID: "100064015083080",
      },
    }),

    prisma.pharmacist.create({
      data: {
        ...base.pharmacist,
        profile: {
          create: {
            ...base.profile,
            username: "user-pharmacist-4",
            email: "user-pharmacist-4@email.com",
          },
        },
        name: "zeyad",
        age: 20,
        educationalBackground: "harvard",
        chatID: "100009481298399",
      },
    }),

    prisma.pendingPharmacist.createMany({
      data: [
        {
          username: "khelo",
          name: "khaled",
          email: "khaled@gmail.com",
          password,
          dateofbirth: "5 jan 2002",
          hourlyRate: 4,
          affiliation: "Magdy hospital",
          educationalBackground: "abc",
        },
        {
          username: "zozz",
          name: "zozz",
          email: "ziad@gmail.com",
          password,
          dateofbirth: "5 jan 2002",
          hourlyRate: 4,
          affiliation: "Magdy hospital",
          educationalBackground: "abc",
        },
        {
          username: "mo",
          name: "mo",
          email: "omar@gmail.com",
          password,
          dateofbirth: "5 jan 2002",
          hourlyRate: 4,
          affiliation: "Magdy hospital",
          educationalBackground: "abc",
        },
        {
          username: "zozo",
          name: "zozo",
          email: "zeyad@gmail.com",
          password,
          dateofbirth: "5 jan 2002",
          hourlyRate: 4,
          affiliation: "Magdy hospital",
          educationalBackground: "abc",
        },
      ],
    }),
  ]);
};
