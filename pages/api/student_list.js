import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    // JOIN을 포함한 쿼리 작성
    const sql = `
      SELECT 
        s.student_pk,
        s.name,
        s.grade,
        s.school,
        s.phone,
        s.service_time,
        s.service_state,
        s.parent,
        s.parent_phone,
        m.name AS moti_name
      FROM 
        student s
      JOIN 
        moti m ON s.moti_pk = m.moti_pk
    `;

    const { rows } = await query(sql);
    
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching student data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
