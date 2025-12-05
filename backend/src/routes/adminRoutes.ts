import { Router } from "express";
import { logs, alerts} from "../controllers/adminController";
import { requireAdminAuth } from "../middleware/authMiddleware"; 

const router = Router();

router.get("/logs", requireAdminAuth, logs);
router.get("/alerts", requireAdminAuth, alerts);

export default router;