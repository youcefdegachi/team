import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  etudants:number = 1600;
  enseignants:number = 60;
  facultes:number = 15;
  constructor(){

  }

}
