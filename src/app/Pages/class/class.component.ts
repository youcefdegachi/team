import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from '../../models/subject.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent {

  cards: CardData[] = [
    { subject: 'Programmation', classe: 'DSI21' },
    { subject: 'Developpement', classe: 'DSI21' },
    { subject: 'Programmation', classe: 'DSI22' },
    { subject: 'Developpement', classe: 'DSI22' },
    // Add more card data as needed
  ];

  constructor(private router:Router) {}

  navigateToStudent(subject: string,classe:string ) {
    this.router.navigate([`/ListStudent/`, subject , classe]);
  }
}
