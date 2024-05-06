import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassComponent } from '../../Pages/class/class.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost/api/user/';
  constructor(private http: HttpClient) {}
  getUserByEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}${email}`;
    return this.http.get(url);
  }
  getAllUsersInClass(classe: string): Observable<any> {
    const url = `${this.apiUrl}${ClassComponent}`;
    return this.http.get(url);
  }
}
