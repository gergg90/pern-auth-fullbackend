import { prisma } from "../db";
import { User } from "../interface/user";

export class UserModel {
  static createUser = async (data: User) => {
    const newUser = prisma.user.create({
      data: data,
    });
    return newUser;
  };
}
