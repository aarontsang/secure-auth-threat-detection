import { Router } from "express";
import { logs, alerts} from "../controllers/adminController";
import { requireAdminAuth } from "../middleware/authMiddleware"; 
import { changePermission } from "../controllers/adminController";

const router = Router();

router.get("/logs", requireAdminAuth, logs);
router.get("/alerts", requireAdminAuth, alerts);
router.post("/change-permission", requireAdminAuth, changePermission);

export default router;