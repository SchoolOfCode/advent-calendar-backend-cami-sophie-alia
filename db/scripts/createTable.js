import { pool } from "../index.js";

async function createTable() {
  const created = await pool.query(
    `CREATE TABLE IF NOT EXISTS advent_calendar (
      id SERIAL PRIMARY KEY,
      day INT,
      activity TEXT NOT NULL,
      link TEXT
    );`
  );
  console.log("advent calendar table created", created.command);
}

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
