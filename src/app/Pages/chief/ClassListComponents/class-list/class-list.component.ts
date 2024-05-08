import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../../../../models/subject.model'
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.scss'
})
export class ClassListComponent {
  cards: Class[] = [
    { id: 1,className: 'DSI21'},
    { id: 2,className: 'DSI22'},
    { id: 3,className: 'RSI21'},
    // Add more card data as needed
  ];

  constructor(private router:Router) {}

  navigateToStudent(className:string ) {
    this.router.navigate([`/StudentList/`, className]);
  }
}
