import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule here

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { PostComponent } from './Component/post/post.component';
import AOS from 'aos';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MatieresComponent } from './Pages/matieres/matieres.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ClassComponent } from './Pages/class/class.component';
import { ListStudentComponent } from './Pages/list-student/list-student.component';

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
    ListStudentComponent
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
