import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ListOfRutes1: any = [];
  isScrolled = false;
  userInfo: { 
    name: string, 
    role: string, 
    email: string, 
    cin: string, 
    faculte: string | null, 
    filere: string | null, 
    niveau: string | null 
  } | null = null;
  storedUserInfo: string | null = null;
  // storedUserInfo = localStorage.getItem('userInfo');

  constructor() {}

  ngOnInit() {
    this.storedUserInfo = localStorage.getItem('userInfo');
    // console.log(localStorage.getItem('userInfo'));
    this.ListOfRutes1 = [{ "Route": "Login", "Name": "Se connecter" },];
    if (this.storedUserInfo) {
      // Parse stored user info
      this.userInfo = JSON.parse(this.storedUserInfo);

      if (this.userInfo && this.userInfo.role) {
        console.log(`Role of the user is: ${this.userInfo.role}`);

        // Modify the route list based on user role
        if (this.userInfo.role === 'student') {
          this.ListOfRutes1 = [
            { "Route": 'Matieres', "Name": 'Matieres' },
            { "Route": 'Profile', "Name": 'Profile' },
            { "Route": 'Logout', "Name": 'Se deconnecter' }
          ];
        } else if (this.userInfo.role === 'teacher') {
          this.ListOfRutes1 = [
            { "Route": 'Class', "Name": 'Class' },
            { "Route": 'Profile', "Name": 'Profile' },
            { "Route": 'Logout', "Name": 'Se deconnecter' }
          ];
        } else if (this.userInfo.role === 'admin') {
          this.ListOfRutes1 = [
            { "Route": 'Dashboard', "Name": 'Tableau de bord' },
            { "Route": 'Users', "Name": 'Gestion des utilisateurs' },
            { "Route": 'Settings', "Name": 'Paramètres' },
            { "Route": 'Profile', "Name": 'Profile' },
            { "Route": 'Logout', "Name": 'Se deconnecter' }
          ];
        }  else if (this.userInfo.role === 'chief') {
          this.ListOfRutes1 = [
            { "Route": 'DirectorList', "Name": 'Director' },
            { "Route": 'ClassList', "Name": 'classList' },
            { "Route": 'EliminateMatieres', "Name": 'eliminate' },
            { "Route": 'TeacherList', "Name": 'teacher' },
            { "Route": 'Profile', "Name": 'Profile' },
            { "Route": 'Logout', "Name": 'Se deconnecter' }
          ];
        }else if (this.userInfo.role === 'secretary') {
          this.ListOfRutes1 = [
            { "Route": 'Class', "Name": 'class' },
            { "Route": 'Student', "Name": 'student' },
            { "Route": 'Profile', "Name": 'Profile' },
            { "Route": 'Logout', "Name": 'Se deconnecter' }
          ];
        }else {
          console.log(`User role is not recognized: ${this.userInfo.role}`);
        }
      } else {
        console.log('User role is not defined');
      }
    } else {
      console.log('No user info found in local storage');
    }

}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
  this.isScrolled = window.scrollY > 0;
}

}
