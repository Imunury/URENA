import { query } from "../../lib/db";

export default async function handler(req, res) {
  const { moti_pk } = req.query;

  try {
    let sql = `
      SELECT
        m.moti_pk,
        m.name,
        m.phone,
        m.work_state,
        COUNT(s.student_pk) AS student_count
      FROM
        moti m
      LEFT JOIN
        student s ON m.moti_pk = s.moti_pk
    `;

    const params = [];
    if (moti_pk) {
      sql += ` WHERE m.moti_pk = $1`;
      params.push(moti_pk);
    }

    sql += ` GROUP BY m.moti_pk, m.name, m.phone, m.work_state`;

    const { rows } = await query(sql, params);
    console.log('Query Result:', rows);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching moti data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
