import { Request, Response } from "express";

export class AuthController {
  static register = (req: Request, res: Response) => {
    res.json({ message: "Hello world auth register" });
  };

  static login = (req: Request, res: Response) => {
    res.json({ message: "Hello world auth login" });
  };
}
