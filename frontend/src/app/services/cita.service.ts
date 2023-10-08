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
    return this.http.post(this.url + '/cita', {informacionCita}, this.httpOptions )
  }

  availableTime(dateSelectedInfo: string){
    console.log("Voy a consultar los horarios")
    return this.http.get(this.url + '/availableTime/'+dateSelectedInfo, this.httpOptions)
  }
}
