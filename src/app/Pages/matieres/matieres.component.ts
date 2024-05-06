import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { studentSubject } from '../../models/subject.model';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrl: './matieres.component.scss'
})
export class MatieresComponent {

  user = { name: "John", id: "1234565678" };
  subjects:studentSubject[] = [
    { subject: 'Programmation', eliminet: true },
    { subject: 'Developpement', eliminet: true },
    { subject: 'Math', eliminet: false },
    { subject: 'Physic', eliminet: true },
  ];

  constructor(private router:Router) {}


  navigateToStudent(subject: string,id:string ) {
    this.router.navigate([`/MyAbsent/`, subject , id]);
  }
}
