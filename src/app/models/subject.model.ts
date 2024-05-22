export interface teachignSubject {
  subject: string;
  classe: string;
}

export interface matiere{
  id: number;
  subject: string;
}


export interface studentSubject {
  subject: string;
  eliminet: boolean;
}

export interface seasson {
  subject: string;
  date: boolean;
  id_student: string;
  id_teacher: string;
  isPresent: boolean;
}

export interface SessionForStudent {
  dateSession:Date;
  isPresent: boolean;
}

export interface Class{
  id: number;
  className: string;
}