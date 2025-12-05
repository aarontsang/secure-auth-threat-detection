import { Router } from "express";
import { profile } from "../controllers/userController";
import { requireAuth } from "../middleware/authMiddleware";

const router = Router();

router.get("/me", requireAuth, profile);

export default router;