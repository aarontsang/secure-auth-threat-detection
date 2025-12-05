import { query } from "../db";

export async function profile(user_id: string){
  console.log("USER ID IN SERVICE:", user_id);
  const userDetails = await query("SELECT id, email, firstName, lastName FROM users WHERE id = $1", [user_id]);
  
  const full_name = userDetails.rows[0].firstname + " " + userDetails.rows[0].lastname;
  return { id: userDetails.rows[0].id, email: userDetails.rows[0].email, name: full_name };
}