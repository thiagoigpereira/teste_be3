import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  create(patient: Patient): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Patients`, patient)
  }
  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/Patients`);
  }
}
