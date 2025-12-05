import dotenv from 'dotenv';
dotenv.config();

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Secure Auth & Threat Detection API is running");
});

app.use("/auth", authRoutes);
//app.get("/profile", userRoutes);
app.use("/profile", userRoutes);
app.use("/admin", adminRoutes);

export default app;
