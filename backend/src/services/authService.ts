import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "../db";

const SALT_ROUNDS = 10;
const users: Record<string, { email: string; password: string }> = {}; // In-memory user store for now, will be replaced with a database later

export async function signup(email: string, password: string, firstName: string, lastName: string) {
  const existingUser = await query("SELECT * FROM users WHERE email = $1", [email]);
  if (existingUser.rows.length > 0) {
    return { success: false, message: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const result = await query(
    `INSERT INTO users (email, password_hash, firstName, lastName)
     VALUES ($1, $2, $3, $4)
     RETURNING id, email, firstName, lastName`,
    [email, hashedPassword, firstName, lastName]
  );
  return { success: true, result: result.rows[0] };
}

export async function login(email: string, password: string, ipAddress: string, userAgent: string) {
  const existingUser = await query("SELECT * FROM users WHERE email = $1", [email]);
  if (existingUser.rows.length === 0) {
    return { success: false, message: "User not found" };
  }
  
  const user = existingUser.rows[0];
  const id = user.id;
  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    await query("INSERT INTO login_attempts (user_id, email_entered, user_agent, ip_address, success, ts) VALUES ($1, $2, $3, $4, $5, NOW())", [id, email, userAgent, ipAddress, false]);
    return { success: false, message: "Invalid password"};
  }
  const jwt_token = jwt.sign({ email: email, id: id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
  await query("INSERT INTO login_attempts (user_id, email_entered, user_agent, ip_address, success, ts) VALUES ($1, $2, $3, $4, $5, NOW())", [id, email, userAgent, ipAddress, true]);

  return { success: true, token: jwt_token, user_id: id};
}