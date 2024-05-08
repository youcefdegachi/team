import { Component } from '@angular/core';
import { StudentDetail } from '../../../../models/user.model';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  constructor(private route: ActivatedRoute) {}

  students: StudentDetail[] = [
    { id: 1, cin: 12345678, name: 'Youcef Degachi', classe: 'DSI21', email: 'youcef.degachi@example.com' },
    { id: 2, cin: 87654321, name: 'Wajih', classe: 'DSI21', email: 'wajih@example.com' },
    { id: 3, cin: 45612378, name: 'Hamdi', classe: 'DSI21', email: 'hamdi@example.com' },
  ];

  editStudent(studentId: number): void {
    console.log(`Edit student with ID: ${studentId}`);
    // Add your edit logic here, e.g., navigate to an edit page, open a modal, etc.
  }

  className!: string;
  ngOnInit() {
    // Retrieve the combined information from the route
    this.className = this.route.snapshot.paramMap.get('ClassName') ?? '';
    if (this.className) {
      // Assuming the format is "Subject Class"
        this.className;
      
    }
  }
}
