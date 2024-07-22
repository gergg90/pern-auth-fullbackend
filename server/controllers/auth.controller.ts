import { Request, Response } from "express";
import { UserModelPrisma } from "../models/user.model";
import { validateUser } from "../schemas/userSchema";

export class AuthController {
  static register = async (req: Request, res: Response) => {
    const result = validateUser(req.body);

    if (!result.success) {
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });
    }

    const newUser = await UserModelPrisma.createUser(result.data);

    res.json(newUser);
  };

  static login = (req: Request, res: Response) => {
    res.json({ message: "Hello world auth login" });
  };
}
