export interface Student{
  id: number;
  name: string;
  classe: string;
  isAbsent: boolean;
}
export interface StudentDetail{
  id: number;
  cin: number;
  name: string;
  classe: string;
  email: string;
}

export interface StudentEliminate{
  id: number;
  cin: number;
  name: string;
  email: string;
  numberAbsent: number;
  isEliminate: boolean;
}


export interface teacher{
  id: number;
  name: string;
  classe: string;
}

export interface teacherDetail{
  id: number;
  cin: number;
  name: string;
  classes: string[];
  subjects: string[];
}

export interface StudentInfo {
  cin: number;
  name: string;
  email: string;
}


export interface DirectorDetail {
  id: number;
  cin: number;
  name: string;
  email: string;
  students: StudentInfo[]; 
}