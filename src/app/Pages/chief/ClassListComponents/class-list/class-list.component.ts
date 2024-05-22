import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../../../../models/subject.model';
import { ActivatedRoute } from '@angular/router';




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

  constructor(private router:Router, private route: ActivatedRoute) {}
  subject:String | undefined;

  ngOnInit() {
    // Retrieve the combined information from the route
    this.subject = this.route.snapshot.paramMap.get('subject') ?? '';
  }
  navigateToStudent(className:string ) {
    console.log(this.subject);
    if (this.subject !== '') {
      this.router.navigate([`/EliminateList`, this.subject, className]);
    } else {
      this.router.navigate([`/StudentList`, className]);
    }
  }
}
