import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ListOfRutes1: any = [];
  isScrolled = false;

  constructor() {}

  ngOnInit() {
    this.ListOfRutes1 = [
      { "Route": "Login", "Name": "Se connecter" },
    ];
    this.ListOfRutes1 = [
      { "Route": "Matieres", "Name": "Matieres" },
      { "Route": "Profile", "Name": "Profile" },
      { "Route": "Logout", "Name": "Se deconnecter" },
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
  this.isScrolled = window.scrollY > 0;
}

}
