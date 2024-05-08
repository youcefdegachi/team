import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/user.model';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})



export class ListStudentComponent {
  constructor(private route: ActivatedRoute) {}


  students: Student[] = [
    { id: 1, name: 'Youcef Degachi', classe: 'DSI21', isAbsent: false },
    { id: 2, name: 'wajih', classe: 'DSI21', isAbsent: false },
    { id: 3, name: 'hamdi', classe: 'DSI21', isAbsent: true },
  ];
  toggleAbsence(student: Student): void {
    student.isAbsent = !student.isAbsent;
  }



  /*//todo: get subject and class form class.componnent */
  subject!: string;
  className!: string;


  ngOnInit() {
    // Retrieve the combined information from the route
    this.subject = this.route.snapshot.paramMap.get('subject') ?? '';
    this.className = this.route.snapshot.paramMap.get('classe') ?? '';
    if (this.subject && this.className) {
      // Assuming the format is "Subject Class"
        this.subject;
        this.className;
      
    }
  }
  // isAbsent: boolean = false;



  // onclick = () => {
  //   this.isAbsent =!this.isAbsent;
  // }



  /*//todo: get all student from api  */
  // students: Student[] = [];
  // apiUrl = 'https://api.example.com/'; // Example base URL
  
  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getAllUsersInClass('DSI21').subscribe({
  //     next: (data) => {
  //       this.students = data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching data:', error);
  //     },
  //   });
  // }

  // getAllUsersInClass(classe: string): Observable<Student[]> {
  //   const url = `${this.apiUrl}class/${classe}`; // Updated endpoint
  //   return this.http.get<Student[]>(url).pipe(
  //     catchError((err) => {
  //       console.error(err);
  //       throw err; // Rethrow the error to be caught by the subscription
  //     })
  //   );
  // }

}
