import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = auth.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = auth.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        if (decoded.permission !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
        }
        (req as any).user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}