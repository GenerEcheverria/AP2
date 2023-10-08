import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  url: string = 'http://localhost:8000/api/appointment';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  crearCita(informacionCita: string){
    console.log("Estoy en el servicio")
    return this.http.post(this.url + '/cita', {informacionCita}, this.httpOptions )
  }
}
