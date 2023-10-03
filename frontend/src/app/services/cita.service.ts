import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  url: string = 'http://localhost:8000/api/auth';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  crearCita(informacionCita: string){
    return this.http.post(this.url + '/cita', { informacionCita } )
  }
}
