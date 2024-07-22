import mongoose from "mongoose";
import { prisma } from "../db";
import { User } from "../interface/user";

export class UserModelPrisma {
  static createUser = async (data: User) => {
    try {
      const newUser = prisma.user.create({
        data: data,
      });
      return newUser;
    } catch (e) {
      console.log(e);
    }
  };
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.model("user", userSchema);
