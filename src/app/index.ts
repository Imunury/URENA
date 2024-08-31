export interface MotiData {
  moti_pk: number;
  name: string;
  phone: string;
  work_state: string;
  student_count: number;
}

export interface StudentData {
  student_pk: number;
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