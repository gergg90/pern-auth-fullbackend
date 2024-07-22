import { prisma } from "../db";
import { User } from "../interface/user";

//! create user prisma
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
