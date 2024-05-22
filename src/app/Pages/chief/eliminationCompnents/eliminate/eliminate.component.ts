import { Component } from '@angular/core';
import { StudentEliminate } from '../../../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminate',
  templateUrl: './eliminate.component.html',
  styleUrl: './eliminate.component.scss'
})
export class EliminateComponent {

  studentList: StudentEliminate[] = [
    { id: 1, cin: 12345678, name: 'John Doe', email: 'john@example.com', numberAbsent: 4,isEliminate: false },
    { id: 2, cin: 46878995, name: 'Jane Smith', email: 'jane@example.com',numberAbsent: 1, isEliminate: true },
    { id: 3, cin: 35823653, name: 'Alice Johnson', email: 'alice@example.com', numberAbsent: 6,isEliminate: false },
    { id: 4, cin: 23489467, name: 'Bob Brown', email: 'bob@example.com',numberAbsent: 2, isEliminate: true },
  ];
  subject:String | undefined;
  className:String | undefined;
  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
  this.subject = this.route.snapshot.paramMap.get('subject') ?? '';
  this.className = this.route.snapshot.paramMap.get('className') ?? '';
  }


  toggleEliminate(student: StudentEliminate): void {
    student.isEliminate = !student.isEliminate;
    console.log(`Student ID ${student.id} elimination status changed to ${student.isEliminate}`);
    // Add any additional logic for updating the data, e.g., API call, etc.
  }


  submitChanges(): void {
    console.log('Submitting changes');
  //   this.http.post('/api/save-students', { studentList: this.studentList }) // Example endpoint
  //     .subscribe(
  //       response => {
  //         console.log('Changes submitted successfully', response);
  //         // Additional success handling
  //       },
  //       error => {
  //         console.error('Failed to submit changes', error);
  //         // Additional error handling
  //       }
  //     );
  }



}
