import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signup(req: Request, res: Response) {
  const { email, password, firstName, lastName } = req.body;
  const result = await authService.signup(email, password, firstName, lastName);
  res.json(result);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  let ip = req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
  req.socket.remoteAddress ||
  req.ip;

  if (ip === "::1" || ip === "127.0.0.1") {
      ip = "127.0.0.1";
  }

  const userAgent = req.headers["user-agent"] || "unknown";
  const result = await authService.login(email, password, ip as string, userAgent as string);
  res.json(result);
}

export async function refresh(req: Request, res: Response) {
  const auth = req.headers.authorization;
  const result = await authService.refresh(auth as string);
  res.json(result);
}