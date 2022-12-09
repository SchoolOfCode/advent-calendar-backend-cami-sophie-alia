import { query } from "../db/index.js";

export default async function getPresents() {
  const data = await query(`SELECT * FROM advent_calendar`);
  return data.rows;
}
