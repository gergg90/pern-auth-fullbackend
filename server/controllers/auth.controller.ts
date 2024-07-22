import { Request, Response } from "express";
import { UserModelPrisma } from "../models/userPrisma.model";
import { validateUser } from "../schemas/userSchema";

import User from "../models/userMongo.model";

export class AuthController {
  static register = async (req: Request, res: Response) => {
    //! zod validations
    const result = validateUser(req.body);

    //! validation error
    if (!result.success) {
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });
    }
    //! create user prisma
    const newUserPrisma = await UserModelPrisma.createUser(result.data);
    console.log(newUserPrisma);

    //! create user mongodb

    let newUserMongoDB;

    try {
      newUserMongoDB = new User(result.data);
      await newUserMongoDB.save();
    } catch (e) {
      console.log(e);
    }

    res.json({ userPrisma: newUserPrisma, userMongoDB: newUserMongoDB });
  };

  static login = (req: Request, res: Response) => {
    res.json({ message: "Hello world auth login" });
  };
}
