import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function profile(req: any, res: Response) {
  const user_id = req.user.id;
  const result = await userService.profile(user_id);
  res.json(result);
}