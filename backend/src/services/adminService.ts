import { query } from "../db";

export async function logs() {
  const startTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(); 
  const endTime = new Date().toISOString(); 
  const result = await query(
    `SELECT * FROM login_attempts 
     WHERE ts >= $1 AND ts <= $2
     ORDER BY ts DESC`,
    [startTime, endTime]
  );
  return { success: true, logs: result.rows };
}

export async function alerts() {
  const startTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(); 
  const endTime = new Date().toISOString(); 
  const result = await query(
    `SELECT * FROM alerts 
     WHERE created_at >= $1 AND created_at <= $2
     ORDER BY created_at DESC`,
    [startTime, endTime]
  );
  return { success: true, alerts: result.rows };
}