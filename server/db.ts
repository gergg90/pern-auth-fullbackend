import { PrismaClient } from "@prisma/client";
import mongoose from "mongoose";

//! instance Prisma
export const prisma = new PrismaClient();

//! instance MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("mongodb connected");
  } catch (e) {
    console.log(e);
  }
};
