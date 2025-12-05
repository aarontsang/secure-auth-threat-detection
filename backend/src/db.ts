import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function query(text: string, params?: any[]) {
  const result = await pool.query(text, params);
  return result;
}