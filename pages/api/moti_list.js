import { query } from "../../lib/db";

// moti 테이블과 student_count를 가져오는 handler
export default async function handler(req, res) {
  try {
    const sql = `
      SELECT
        m.moti_pk,
        m.phone,
        m.work_state,
        m.name AS name,
        COUNT(s.student_pk) AS student_count
      FROM
        moti m
      LEFT JOIN
        student s ON m.moti_pk = s.moti_pk
      GROUP BY
        m.moti_pk, m.phone, m.work_state, m.name
    `;

    const { rows } = await query(sql);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching moti data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
