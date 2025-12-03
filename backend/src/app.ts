import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import { requireAuth } from "./middleware/authMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Secure Auth & Threat Detection API is running");
});

app.get("/profile", requireAuth, (req, res) => {
  res.send(`Welcome to your profile! {req}`);
});
export default app;
