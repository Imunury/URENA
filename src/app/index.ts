export interface MotiData {
  moti_pk: string;
  name: string;
  phone: string;
  work_state: string;
  student_count: number;
}

export interface StudentData {
  student_pk: string;
  name: string;
  grade: string;
  school: string;
  phone: string;
  work_state: string;
  service_time: string;
  service_state: string;
  parent: string;
  parent_phone : string;
  moti_name : string;
}

export interface MissionData {
  mission_pk: number;
  student_pk: string;
  student_name: string;
  start_date: string;
  end_date: string;
  service_state: string;
  title: string;
  check_date: string;
  check_stats: string;
  mission_date: string;
}