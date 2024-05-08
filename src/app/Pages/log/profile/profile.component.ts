import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}



// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   styleUrls: ['./user-profile.component.css']
// })
// export class UserProfileComponent implements OnInit {
//   user: any | null = null; // Variable to store the user data

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     // Fetch user data when the component is initialized
//     const email = 'user@example.com'; // Replace with the email you're testing with

//     this.userService.getUserByEmail(email).subscribe({
//       next: (response) => {
//         this.user = response; // Save the user data
//         console.log('User data fetched:', this.user);
//       },
//       error: (err) => {
//         console.error('Error fetching user data:', err);
//       }
//     });
//   }
// }