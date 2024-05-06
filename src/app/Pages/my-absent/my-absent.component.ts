import { Component } from '@angular/core';
import { Student } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { SessionForStudent } from '../../models/subject.model';

@Component({
  selector: 'app-my-absent',
  templateUrl: './my-absent.component.html',
  styleUrl: './my-absent.component.scss'
})


/* // todo: in this page it will get subject and user name from (matieres) componect and id  */
/* // todo: this page will get all seasson he study by date and absent or not */
export class MyAbsentComponent {
  subject!: string;
  studentName!: string;
  seasonDetail: SessionForStudent[] = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {

    this.seasonDetail = [
      {
        dateSession: new Date('2024-05-01'),
        isPresent: true,
      },
      {
        dateSession: new Date('2024-05-02'),
        isPresent: false,
      },
      {
        dateSession: new Date('2024-05-03'),
        isPresent: true,
      },
      {
        dateSession: new Date('2024-05-04'),
        isPresent: true,
      },
      {
        dateSession: new Date('2024-05-05'),
        isPresent: false,
      }
    ];

    // Retrieve the combined information from the route
    this.subject = this.route.snapshot.paramMap.get('subject') ?? '';
    this.studentName = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.subject && this.studentName) {
      // Assuming the format is "Subject Class"
        this.subject;
        this.studentName;
      
    }
  }
}
