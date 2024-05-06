import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from '../../models/subject.model';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {

    private apiUrl = 'api/teacher/subject'; // Your API endpoint
  
    constructor(private http: HttpClient) {}
  
    getSubjects(): Observable<CardData[]> {
      return this.http.get<CardData[]>(this.apiUrl); // Fetch data from the API
    }
}
