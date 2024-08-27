export interface MotiData {
  moti_pk: number;
  name: string;
  phone: string;
  work_state: string;
}

export interface StudentData {
  student_pk: number;
  name: string;
  grade: number;
  school: string;
  phone: string;
  work_state: string;
  service_time: string;
  service_state: number;
  parent: string;
  parent_phone : string;
  moti_pk : number;
}