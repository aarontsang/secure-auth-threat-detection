import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;
const users: Record<string, { email: string; password: string }> = {}; // In-memory user store for now, will be replaced with a database later

export async function signup(email: string, password: string) {
  if (users[email]) {
    return { success: false, message: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  users[email] = { email, password: hashedPassword };
  return { success: true, email};
}

export async function login(email: string, password: string) {
  const user = users[email];
  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { success: false, message: "Invalid password" };
  }
  const id = "000001"
  const jwt_token = jwt.sign({ email: email, id: id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

  return { success: true, token: jwt_token, user_id: id};
}

/*
export async function changePassword(email: string, oldPassword: string, newPassword: string) {
  const user = users[email];
  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
  if (!isOldPasswordValid) {
    return { success: false, message: "Old password is incorrect" };
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
  users[email].password = hashedNewPassword;
  
  return { success: true };
}
*/