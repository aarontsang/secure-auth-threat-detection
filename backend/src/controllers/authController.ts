import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await authService.signup(email, password);
  res.json(result);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json(result);
}