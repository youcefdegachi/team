import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/log/home/home.component';
import { LoginComponent } from './Pages/log/login/login.component';
import { RegisterComponent } from './Pages/log/register/register.component';
import { ProfileComponent } from './Pages/log/profile/profile.component';
import { MatieresComponent } from './Pages/student/matieres/matieres.component';
import { ClassComponent } from './Pages/teacher/class/class.component';
import { ListStudentComponent } from './Pages/teacher/list-student/list-student.component';
import { MyAbsentComponent } from './Pages/student/my-absent/my-absent.component';

import { ClassListComponent } from './Pages/chief/ClassListComponents/class-list/class-list.component';
import { DirectorListComponent } from './Pages/chief/director-list/director-list.component';
import { StudentListComponent } from './Pages/chief/ClassListComponents/student-list/student-list.component';
import { TeacherListComponent } from './Pages/chief/teacherCompoent/teacher-list/teacher-list.component';
import { EliminateComponent } from './Pages/chief/eliminationCompnents/eliminate/eliminate.component';









const routes: Routes = [

  { path: 'EliminateList', component: EliminateComponent },
  { path: 'StudentList/:ClassName', component: StudentListComponent },
  { path: 'ClassList', component: ClassListComponent },
  { path: 'TeacherList', component: TeacherListComponent },
  { path: 'DirectorList', component: DirectorListComponent },
  { path: 'MyAbsent/:subject/:id', component: MyAbsentComponent },
  { path: 'ListStudent/:subject/:classe', component: ListStudentComponent },
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
