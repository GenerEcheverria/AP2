import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url: string = 'http://localhost:8000/api/doctor';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getDoctors(){
    return this.http.get(this.url + '/doctores', this.httpOptions)
  }
}
