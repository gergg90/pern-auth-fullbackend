import { z } from "zod";
import { User } from "../interface/user";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  post: z.number().optional(),
});

export const validateUser = (input: User) => {
  return userSchema.safeParse(input);
};

export const validatePartialUser = (input: User) => {
  return userSchema.partial().safeParse(input);
};
