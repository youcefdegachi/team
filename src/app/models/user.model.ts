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




export interface teacher{
  id: number;
  name: string;
  classe: string;
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