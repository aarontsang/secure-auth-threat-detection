import { Router } from "express";
import { signup, login, refresh, changePermission } from "../controllers/authController";
import { requireAuth, requireAdminAuth } from "../middleware/authMiddleware"; 

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/refresh", requireAuth, refresh)
router.post("/change-permission", requireAdminAuth, changePermission);

export default router;