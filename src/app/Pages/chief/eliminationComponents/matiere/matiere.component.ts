import { Component } from '@angular/core';
import { matiere } from '../../../../models/subject.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.scss'
})
export class MatiereComponent {

  user = { name: "John", id: "1234565678" };
  subjects:matiere[] = [
    { id: 1,subject: 'Programmation'},
    { id: 2,subject: 'Developpement'},
    { id: 3,subject: 'Math'},
    { id: 4,subject: 'Physic'},
  ];

  constructor(private router:Router) {}

  navigateToStudent(subject: string) {
    this.router.navigate([`/EliminateList/`, subject]);
  }
}
