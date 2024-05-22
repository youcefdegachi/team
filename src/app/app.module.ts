import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/log/home/home.component';
import { LoginComponent } from './Pages/log/login/login.component';
import { RegisterComponent } from './Pages/log/register/register.component';
import { PostComponent } from './Component/post/post.component';
import AOS from 'aos';
import { ProfileComponent } from './Pages/log/profile/profile.component';
import { MatieresComponent } from './Pages/student/matieres/matieres.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ClassComponent } from './Pages/teacher/class/class.component';
import { ListStudentComponent } from './Pages/teacher/list-student/list-student.component';
import { MyAbsentComponent } from './Pages/student/my-absent/my-absent.component';
import { DirectorListComponent } from './Pages/chief/director-list/director-list.component';
import { TeacherListComponent } from './Pages/chief/teacherCompoent/teacher-list/teacher-list.component';
import { ClassListComponent } from './Pages/chief/ClassListComponents/class-list/class-list.component';
import { StudentListComponent } from './Pages/chief/ClassListComponents/student-list/student-list.component';
import { EliminateComponent } from './Pages/chief/eliminationCompnents/eliminate/eliminate.component';
import { MatiereComponent } from './Pages/chief/eliminationComponents/matiere/matiere.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    ProfileComponent,
    MatieresComponent,
    HeaderComponent,
    FooterComponent,
    ClassComponent,
    ListStudentComponent,
    MyAbsentComponent,
    DirectorListComponent,
    TeacherListComponent,
    ClassListComponent,
    StudentListComponent,
    EliminateComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Add RouterModule to imports
  ],
  providers: [
    // provideClientHydration() // Uncomment if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
