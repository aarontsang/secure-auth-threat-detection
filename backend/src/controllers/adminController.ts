import { Request, Response } from "express";
import * as authService from "../services/adminService";

export async function logs(req: Request, res: Response) {
  const result = await authService.logs();
  res.json(result);
}

export async function alerts(req: Request, res: Response) {
  const result = await authService.alerts();
  res.json(result);
}