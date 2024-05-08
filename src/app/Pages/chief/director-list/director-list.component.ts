import { Component } from '@angular/core';
import { DirectorDetail } from '../../../models/user.model';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrl: './director-list.component.scss'
})
export class DirectorListComponent {
  directors: DirectorDetail[] = [
    {
      id: 1,
      cin: 98765432,
      name: 'Director One',
      email: 'director.one@example.com',
      students: [
        { cin: 12345678, name: 'Youcef', email: 'youcef@email.com' },
        { cin: 87654321, name: 'Wajih', email: 'wajih@email.com' },
      ],
    },
    {
      id: 2,
      cin: 23456789,
      name: 'Director Two',
      email: 'director.two@example.com',
      students: [
        { cin: 45612378, name: 'Hamdi', email: 'hamdi@email.com' },
        { cin: 78945612, name: 'Amine', email: 'amine@email.com' },
      ],
    },
    {
      id: 3,
      cin: 34567890,
      name: 'Director Three',
      email: 'director.three@example.com',
      students: [
        { cin: 95175384, name: 'Nour', email: 'nour@email.com' },
        { cin: 75395184, name: 'Kais', email: 'kais@email.com' },
      ],
    },
  ];



  editDirector(studentId: number): void {
    console.log(`Edit student with ID: ${studentId}`);
    // Add your edit logic here, e.g., navigate to an edit page, open a modal, etc.
  }
}
