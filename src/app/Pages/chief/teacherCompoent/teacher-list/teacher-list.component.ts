import { Component } from '@angular/core';
import { teacherDetail } from '../../../../models/user.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  
teachers: teacherDetail[] = [
  {
    id: 1,
    cin: 98765432,
    name: 'Teacher One',
    classes: ['Class A', 'Class B'], // Example classes
    subjects: ['Math', 'Science'], // Example subjects
  },
  {
    id: 2,
    cin: 23456789,
    name: 'Teacher Two',
    classes: ['Class C', 'Class D'],
    subjects: ['English', 'History'],
  },
  {
    id: 3,
    cin: 34567890,
    name: 'Teacher Three',
    classes: ['Class E', 'Class F'],
    subjects: ['Physics', 'Chemistry'],
  },
];


editTeacher(studentId: number): void {
    console.log(`Edit student with ID: ${studentId}`);
    // Add your edit logic here, e.g., navigate to an edit page, open a modal, etc.
  }
}
