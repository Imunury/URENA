import { query } from "../../lib/db";

export default async function handler(req, res) {
  const { moti_pk } = req.query; // 쿼리 파라미터에서 moti_pk를 받아옴

  try {
    let sql = `
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

    const params = [];
    if (moti_pk) {
      sql += ` WHERE s.moti_pk = ?`; 
      params.push(moti_pk);
    }

    const { rows } = await query(sql, params);
    
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching student data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
