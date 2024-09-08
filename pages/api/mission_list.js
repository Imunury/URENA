import { query } from "../../lib/db";

export default async function handler(req, res) {
  const { student_pk } = req.query;

  try {
    let sql = `
      SELECT
        m.mission_pk,
        m.student_pk,
        s.name AS student_name,
        s.service_state,
        m.start_date,
        m.end_date,
        m.title,
        mc.check_date,
        mc.check_stats,
        mc.mission_date
      FROM
        mission m
      LEFT JOIN
        student s ON m.student_pk = s.student_pk
      LEFT JOIN
        missionCheck mc ON m.mission_pk = mc.mission_pk
    `;

    const params = [];
    if (student_pk) {
      sql += ` WHERE m.student_pk = $1`;
      params.push(student_pk);
    }

    sql += ` ORDER BY m.mission_pk, mc.check_date`;

    const { rows } = await query(sql, params);
    console.log('Query Result:', rows);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching mission data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
