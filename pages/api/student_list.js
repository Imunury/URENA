import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const { rows } = await query("SELECT * FROM student");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
