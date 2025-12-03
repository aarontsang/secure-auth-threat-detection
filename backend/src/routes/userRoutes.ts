import { Router } from "express";
import { profile } from "../controllers/userController";

const router = Router();

router.post("/self", profile);

export default router;