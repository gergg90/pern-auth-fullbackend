import { PrismaClient } from "@prisma/client";
import mongoose from "mongoose";

export const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("mongodb connected");
  } catch (e) {
    console.log(e);
  }
};

// main()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
