import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function profile(req: Request, res: Response) {
  const user_id = req.body;
  const result = await userService.profile(user_id);
  res.json(result);
}