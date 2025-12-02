import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // Placeholder
  console.log("Auth check placeholder");
  next();
}