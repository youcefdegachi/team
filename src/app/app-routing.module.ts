import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MatieresComponent } from './Pages/matieres/matieres.component';
import { ClassComponent } from './Pages/class/class.component';
import { ListStudentComponent } from './Pages/list-student/list-student.component';

const routes: Routes = [
  { path: 'ListStudent', component: ListStudentComponent },
  { path: 'Class', component: ClassComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Matieres', component: MatieresComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
