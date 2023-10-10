import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiarioEmbarazadaService {
  url: string = 'http://localhost:8000/api/diario';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  getHojasDiarioById(idPaciente: string){
    return this.http.get(this.url + '/getHojasDiarioById/'+idPaciente, this.httpOptions)
  }

}