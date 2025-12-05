import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import { requireAuth } from "./middleware/authMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.get("/profile", userRoutes);

app.get("/", (req, res) => {
  res.send("Secure Auth & Threat Detection API is running");
});


export default app;
