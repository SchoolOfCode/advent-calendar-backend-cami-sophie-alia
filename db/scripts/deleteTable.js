import { pool } from "../index.js";

async function dropTable() {
  const dropped = await pool.query("DROP TABLE IF EXISTS advent_calendar;");
  console.log("advent calendar table deleted", dropped.command);
}

try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
